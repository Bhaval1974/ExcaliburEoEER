import { useState, useEffect } from 'react';
import { getAllScoresFromGoogleSheets } from '../core/services/sheets-backend';

interface ScoreEntry {
    timestamp: string;
    name: string;
    score: number;
}

export default function Leaderboard() {
    const [scores, setScores] = useState<ScoreEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Override global styles
    useEffect(() => {
        // Add custom styles to override global CSS
        const style = document.createElement('style');
        style.id = 'leaderboard-override-styles';
        style.textContent = `
            .leaderboard-container {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background-color: #3F3532 !important;
                color: white !important;
                font-family: Arial, Helvetica, sans-serif !important;
                z-index: 1000 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 2rem !important;
            }
            .leaderboard-container * {
                box-sizing: border-box !important;
            }
            .leaderboard-close-button {
                position: fixed !important;
                top: 2rem !important;
                right: 2rem !important;
                background-color: transparent !important;
                color: white !important;
                font-weight: 600 !important;
                padding: 0.75rem 1.25rem !important;
                border-radius: 0.5rem !important;
                border: 2px solid transparent !important;
                cursor: pointer !important;
                transition: all 0.2s !important;
                font-size: 1rem !important;
                white-space: nowrap !important;
                display: flex !important;
                align-items: center !important;
                gap: 0.5rem !important;
                z-index: 1001 !important;
                backdrop-filter: blur(4px) !important;
            }

            .leaderboard-close-icon {
                font-size: 1.25rem !important;
                font-weight: bold !important;
                line-height: 1 !important;
            }
            .leaderboard-main-panel {
                width: 66.67% !important;
                height: 66.67% !important;
                max-width: 1200px !important;
                max-height: 800px !important;
                min-width: 600px !important;
                min-height: 500px !important;
                background-color: transparent !important;
                border: transparent !important;
                border-radius: 0.5rem !important;
                display: flex !important;
                flex-direction: column !important;
                overflow: hidden !important;
            }
            .leaderboard-header {
                background-color: transparent !important;
                border-bottom: 2px solid #4b5563 !important;
                flex-shrink: 0 !important;
                padding: 1.5rem !important;
                font-size: 1.875rem !important;
            }
            .leaderboard-content {
                flex: 1 !important;
                overflow: hidden !important;
                display: flex !important;
                flex-direction: column !important;
            }
            .leaderboard-table-container {
                flex: 1 !important;
                overflow-y: auto !important;
                padding-right: 0.5rem !important;
            }
            .leaderboard-table-container::-webkit-scrollbar {
                width: 8px !important;
                border-radius: 10px !important;
            }
            .leaderboard-table-container::-webkit-scrollbar-track {
                background: #B6AFAD !important;
                margin-top: 235px !important;
                border-radius: 10px !important;
            }
            .leaderboard-table-container::-webkit-scrollbar-thumb {
                background: #F5C47F !important;
                border-radius: 10px !important;
            }
            .leaderboard-table-container::-webkit-scrollbar-thumb:hover {
                background: #f0b76a !important;
                border-radius: 10px !important;
            }
            .leaderboard-table {
                width: 100% !important;
                border-collapse: separate !important;
                border-spacing: 0 0.5rem !important;
                border: none !important;
                background-color: transparent !important;
            }
            .leaderboard-table thead {
                background-color: #3F3532 !important;
                position: sticky !important;
                top: 0 !important;
                z-index: 10 !important;
            }
            .leaderboard-table th {
                color: #d1d5db !important;
                font-size: 1.25rem !important;
                font-weight: 800 !important;
                text-align: left !important;
                text-transform: uppercase !important;
                letter-spacing: 0.05em !important;
                padding: 0.75rem 1.5rem !important;
                border: none !important;
                background-color: #3F3532 !important;
            }
            .leaderboard-table td {
                padding: 1rem 1.5rem !important;
                border-top: 2px transparent #6b7280 !important;
                border-bottom: 2px transparent #6b7280 !important;
                white-space: nowrap !important;
            }
            .leaderboard-table td:first-child {
                border-left: 2px solid transparent !important;
                border-top-left-radius: 0.5rem !important;
                border-bottom-left-radius: 0.5rem !important;
            }
            .leaderboard-table td:last-child {
                border-right: 2px solid transparent !important;
                border-top-right-radius: 0.5rem !important;
                border-bottom-right-radius: 0.5rem !important;
            }
            .leaderboard-row-1 {
                background: #f0b76a !important;
                border-color: #f0b76a  !important;
            }
            .leaderboard-row-2 {
                background: #f0b76a !important;
                border-color: #f0b76a  !important;
            }
            .leaderboard-row-3 {
                background: #f0b76a !important;
                border-color: #f0b76a  !important;
            }
            .leaderboard-row {
                background: #A78472 !important;
                border-color: #A78472  !important;
            }
            .leaderboard-rank-1 {
                color: #3F3532  !important;
                font-size: 1.5rem !important;

            }
            .leaderboard-rank-2 {
                color: #3F3532  !important;
                font-size:  1.5rem !important;

            }
            .leaderboard-rank-3 {
                color: #3F3532  !important;
                font-size:  1.5rem !important;

            }
            .leaderboard-rank-other {
                color: white !important;
                font-size: 1rem !important;
                font-weight: 600 !important;
            }
            .leaderboard-trophy {
                font-size: 1.5rem !important;
                line-height: 1 !important;
            }
            .leaderboard-player-name-other {
                color: white !important;
                font-size: 1rem !important;
                font-weight: 600 !important;
  
            }
            .leaderboard-player-name-top-3 {
                color: #3F3532 !important;
                font-size: 1rem !important;
                font-weight: 900 !important;
            }
            .leaderboard-score-1 {
                color: #3F3532 !important;
                font-size: 1rem !important;
                font-weight: 900 !important;
            }
            .leaderboard-score-2 {
                color: #3F3532  !important;
                font-size: 1rem !important;
                font-weight: 900 !important;
            }
            .leaderboard-score-3 {
                color: #3F3532  !important;
                font-size: 1rem !important;
                font-weight: 900 !important;
            }
            .leaderboard-score-other {
                color: white !important;
                font-size: 1rem !important;
                font-weight: 600 !important;
            }
            .leaderboard-footer {
                background-color: transparent !important;
                border-top: 2px solid #4b5563 !important;
                padding: 1.5rem !important;
                flex-shrink: 0 !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
            }
            .leaderboard-stats {
                color: #d1d5db !important;
                font-size: 0.875rem !important;
            }
            .leaderboard-back-button {
                background-color: #2563eb !important;
                color: white !important;
                font-weight: bold !important;
                padding: 0.5rem 1.5rem !important;
                border-radius: 0.5rem !important;
                border: none !important;
                cursor: pointer !important;
                transition: background-color 0.2s !important;
                font-size: 0.875rem !important;
                margin-left: auto !important;
            }
            .leaderboard-back-button:hover {
                background-color: #1d4ed8 !important;
            }
            .leaderboard-empty-state {
                flex: 1 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
            .leaderboard-empty-message {
                color: #9ca3af !important;
                font-size: 1.25rem !important;
                text-align: center !important;
            }
            .leaderboard-loading-spinner {
                border-bottom: 2px solid #3b82f6 !important;
                width: 3rem !important;
                height: 3rem !important;
                border-radius: 50% !important;
                animation: spin 1s linear infinite !important;
                margin: 0 auto 1rem !important;
            }
            .leaderboard-loading-text {
                color: white !important;
                font-size: 1.125rem !important;
                text-align: center !important;
            }
            .leaderboard-error-text {
                color: #f87171 !important;
                font-size: 1.125rem !important;
                margin-bottom: 1rem !important;
                text-align: center !important;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        return () => {
            const existingStyle = document.getElementById('leaderboard-override-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, []);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                setLoading(true);
                const allScores = await getAllScoresFromGoogleSheets();
                // Sort scores by highest score first, then by timestamp for ties
                const sortedScores = allScores.sort((a, b) => {
                    if (b.score !== a.score) {
                        return b.score - a.score;
                    }
                    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
                });
                setScores(sortedScores);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load leaderboard');
            } finally {
                setLoading(false);
            }
        };

        fetchScores();
    }, []);

    if (loading) {
        return (
            <div className="leaderboard-container">
                <div>
                    <div className="leaderboard-loading-spinner"></div>
                    <p className="leaderboard-loading-text">Loading leaderboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="leaderboard-container">
                <div>
                    <p className="leaderboard-error-text">Error: {error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="leaderboard-back-button"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="leaderboard-container">
            <button 
                onClick={() => window.history.back()}
                className="leaderboard-close-button"
            >
                
                RETURN TO THE ESCAPE ROOM
                <span className="leaderboard-close-icon">✕</span>
            </button>
            
            <div className="leaderboard-main-panel">
                
                {/* Content Area */}
                <div className="leaderboard-content">
                    {scores.length === 0 ? (
                        <div className="leaderboard-empty-state">
                            <div className="leaderboard-empty-message">
                                No scores recorded yet. Be the first to complete the escape room!
                            </div>
                        </div>
                    ) : (
                        <div className="leaderboard-table-container">
                            <table className="leaderboard-table">
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scores.map((entry, index) => (
                                        <tr 
                                            key={`${entry.timestamp}-${entry.name}-${index}`}
                                            className={
                                                index === 0 ? 'leaderboard-row-1' : 
                                                index === 1 ? 'leaderboard-row-2' : 
                                                index === 2 ? 'leaderboard-row-3' : 
                                                 'leaderboard-row'
                                            }
                                        >
                                            <td>
                                                <span className={
                                                    index === 0 ? 'leaderboard-rank-1' : 
                                                    index === 1 ? 'leaderboard-rank-2' : 
                                                    index === 2 ? 'leaderboard-rank-3' : 
                                                    'leaderboard-rank-other'
                                                }>
                                                    {index === 0 && <span className="leaderboard-rank-1">🥇</span>}
                                                    {index === 1 && <span className="leaderboard-rank-2">🥈</span>}
                                                    {index === 2 && <span className="leaderboard-rank-3">🥉</span>}
                                                    {`${index > 2 ? index + 1 : ''}`}
                                                
                                                </span>
                                            </td>
                                            <td>
                                                {/* <div className="leaderboard-player-name">
                                                    {entry.name}
                                                </div> */}
                                               <div className={
                                                    index === 0 ? 'leaderboard-player-name-top-3' : 
                                                    index === 1 ? 'leaderboard-player-name-top-3' : 
                                                    index === 2 ? 'leaderboard-player-name-top-3' : 
                                                    'leaderboard-player-name-other'
                                                }>
                                                    {entry.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className={
                                                    index === 0 ? 'leaderboard-score-1' : 
                                                    index === 1 ? 'leaderboard-score-2' : 
                                                    index === 2 ? 'leaderboard-score-3' : 
                                                    'leaderboard-score-other'
                                                }>
                                                    {entry.score.toLocaleString()}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}