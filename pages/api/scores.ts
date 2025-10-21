import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAuth } from 'google-auth-library';

interface ScoreEntry {
    timestamp: string;
    name: string;
    score: number;
}

// Initialize Google Auth with service account
const auth = new GoogleAuth({
    credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        universe_domain: 'googleapis.com'
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const authClient = await auth.getClient();
        const accessToken = await authClient.getAccessToken();

        if (req.method === 'GET') {
            // Get all scores
            const response = await fetch(
                `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:C`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken.token}`,
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`Failed to retrieve scores: ${response.statusText}`);
            }

            const data = await response.json();
            const rows = data.values || [];

            const scores: ScoreEntry[] = rows
                .filter((row: string[]) => row.length >= 3 && row[2] && !isNaN(Number(row[2])))
                .map((row: string[]) => ({
                    timestamp: row[0] || '',
                    name: row[1] || '',
                    score: Number(row[2])
                }))
                .sort((a: ScoreEntry, b: ScoreEntry) => b.score - a.score);

            res.status(200).json({ scores });
        } else if (req.method === 'POST') {
            // Save new score
            const { name, score } = req.body;

            if (!name || typeof score !== 'number') {
                res.status(400).json({ error: 'Name and score are required' });
                return;
            }

            const data = {
                values: [[
                    new Date().toISOString(),
                    name,
                    score
                ]]
            };

            const response = await fetch(
                `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:C:append?valueInputOption=RAW`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken.token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
            );

            if (!response.ok) {
                throw new Error(`Failed to save score: ${response.statusText}`);
            }

            // Sort the sheet by score (column C) in descending order
            const sortRequest = {
                requests: [{
                    sortRange: {
                        range: {
                            sheetId: 0, // Assuming first sheet
                            startRowIndex: 0,
                            startColumnIndex: 0,
                            endColumnIndex: 3
                        },
                        sortSpecs: [{
                            dimensionIndex: 2, // Column C (score)
                            sortOrder: 'DESCENDING'
                        }]
                    }
                }]
            };

            const sortResponse = await fetch(
                `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken.token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sortRequest)
                }
            );

            if (!sortResponse.ok) {
                console.error('Failed to sort sheet:', sortResponse.statusText);
                // Don't fail the entire request if sorting fails
            }

            res.status(200).json({ message: 'Score saved successfully' });
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}