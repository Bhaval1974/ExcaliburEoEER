interface AnalyticsEvent {
  event_name: string;
  button_name?: string;
  learning_objectives?: string;
  quaternary?: string;
  section_name?: string;
  sub_subsection?: string;
  user_id?: string;
  timestamp?: string;
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export class AnalyticsService {
  private static instance: AnalyticsService;
  private userId: string | null = null;

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  setUserId(userId: string) {
    this.userId = userId;
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-P7JFBHBD1F', {
        user_id: userId
      });
    }
  }

  trackEvent(eventData: AnalyticsEvent) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventData.event_name, {
        custom_map: {
          button_name: eventData.button_name || null,
          learning_objectives: eventData.learning_objectives || null,
          quaternary: eventData.quaternary || null,
          section_name: eventData.section_name || null,
          sub_subsection: eventData.sub_subsection || null,
        },
        user_id: this.userId,
        timestamp: new Date().toISOString()
      });
    }

    // Also log to console for development
    console.log('Analytics Event:', eventData);
  }

  // Specific tracking methods based on your CSV data
  trackSectionView(sectionName: string, subSection?: string) {
    this.trackEvent({
      event_name: `Section-${sectionName}`,
      section_name: sectionName,
      sub_subsection: subSection
    });
  }

  trackQuestionSubmit(questionId: string, answer: string, tryNumber: number, learningObjective?: string) {
    this.trackEvent({
      event_name: `${questionId}-Try-${tryNumber}-Ans-${answer}`,
      button_name: 'Submit',
      learning_objectives: learningObjective,
      section_name: this.getCurrentSection(),
      sub_subsection: this.getCurrentSubSection()
    });
  }

  trackQuestionResult(questionId: string, isCorrect: boolean, isFirstAttempt: boolean) {
    const eventName = `${questionId}-${isFirstAttempt ? 'first' : ''}${isCorrect ? 'Correct' : 'Incorrect'}`;
    this.trackEvent({
      event_name: eventName
    });
  }

  trackWager(questionId: string, confidenceLevel: string) {
    this.trackEvent({
      event_name: `${questionId}-wager${confidenceLevel}`,
      button_name: confidenceLevel
    });
  }

  trackHotspotClick(roomName: string, hotspotNumber: string) {
    this.trackEvent({
      event_name: `Section-${roomName}-${hotspotNumber}`,
      section_name: roomName,
      sub_subsection: `${roomName} ${hotspotNumber}`
    });
  }

  trackClueAccess(sectionId: string) {
    this.trackEvent({
      event_name: `ClueSection-${sectionId}`
    });
  }

  trackAudioPlay(audioTitle: string, section: string, subsection: string) {
    this.trackEvent({
      event_name: 'Audio-1', // or Audio-2 based on which audio
      button_name: audioTitle,
      section_name: section,
      sub_subsection: subsection
    });
  }

  trackTutorialSkip() {
    this.trackEvent({
      event_name: 'skipTutorial',
      button_name: 'Skip Tutorial'
    });
  }

  trackLeaderboardView() {
    this.trackEvent({
      event_name: 'leaderboard-button'
    });
  }

  private getCurrentSection(): string {
    // Logic to determine current section based on URL or state
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('specialty')) return "Alice's Exam Room";
      if (path.includes('william')) return "Kelvins's Exam Room";
      // Add more mappings as needed
    }
    return '';
  }

  private getCurrentSubSection(): string {
    // Logic to determine current subsection
    return '';
  }
}

export const analytics = AnalyticsService.getInstance();