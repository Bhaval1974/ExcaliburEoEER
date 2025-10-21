export function saveQuestionResult(question: string, attempt_number: number, score: number): void {
    const data = {
        attempt_number,
        score,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(question, JSON.stringify(data));
}

export function getQuestionResult(question: string): { attempt_number: number; score: number; timestamp: string } | null {
    const item = localStorage.getItem(question);
    if (item) {
        try {
            const data = JSON.parse(item);
            if (typeof data.score === 'number' && typeof data.attempt_number === 'number' && typeof data.timestamp === 'string') {
                return data;
            }
        } catch {
            // Invalid JSON
        }
    }
    return null;
}

export function getTotalScore(): number {
    let totalScore = 0;
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            const item = localStorage.getItem(key);
            if (item) {
                try {
                    const data = JSON.parse(item);
                    if (typeof data.score === 'number') {
                        totalScore += data.score;
                    }
                } catch {
                    // Skip invalid JSON items
                }
            }
        }
    }
    
    return totalScore;
}