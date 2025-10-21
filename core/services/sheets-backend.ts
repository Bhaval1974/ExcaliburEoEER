interface ScoreEntry {
    timestamp: string;
    name: string;
    score: number;
}

// Safe frontend service that uses your secure API routes
export async function saveFinalScoreToGoogleSheets(name: string, finalScore: number): Promise<void> {
    try {
        const response = await fetch('/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                score: finalScore
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Failed to save score: ${response.statusText}`);
        }
        
        console.log('Final score saved successfully');
    } catch (error) {
        console.error('Error saving final score:', error);
        throw error;
    }
}

export async function getAllScoresFromGoogleSheets(): Promise<ScoreEntry[]> {
    try {
        const response = await fetch('/api/scores', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Failed to retrieve scores: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.scores || [];
    } catch (error) {
        console.error('Error retrieving scores:', error);
        throw error;
    }
}
