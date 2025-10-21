# Multiple Myeloma Escape Room

> **Disclaimer**: This README was generated with AI assistance and may not be fully accurate. Please verify all technical details and implementation specifics independently.

An interactive, gamified educational experience designed to teach healthcare professionals about multiple myeloma diagnosis, treatment, and the evolving role of bispecific T-cell antibodies (bsAbs) in patient care.

## Project Overview

This escape room application simulates realistic clinical scenarios where learners navigate through different "exam rooms" representing various healthcare providers (PCPs and specialists) to solve multiple myeloma cases. The gamification approach enhances learning engagement through:

- **Interactive patient scenarios** featuring characters like William, Alice, and other patients
- **Hotspot-based exploration** of virtual exam rooms and medical charts
- **Progressive difficulty** with multiple attempt opportunities
- **Real-time feedback** and scoring system
- **Confidence wagering** to assess learner self-evaluation

## Learning Objectives

The escape room addresses three key learning objectives:

1. **LO1**: Review the process by which bispecific T-cell antibodies (bsAbs) therapies work in patients with multiple myeloma
2. **LO2**: Recognize the evolving role of bsAbs both as monotherapy and as part of combination regimens in the treatment of patients with relapsed and refractory multiple myeloma
3. **LO3**: Identify common and uncommon toxicities associated with the use of bsAbs, and develop strategies to assess these toxicities in the clinical setting

## Technology Stack

This is a **Next.js** project integrated with **Plasmic** for visual design and component management:

- **Frontend**: Next.js 14 with TypeScript and React 18
- **Design System**: Plasmic visual builder with blackbox components
- **UI Components**: React Aria for accessible interactions
- **Authentication**: Google Auth Library integration
- **Data Storage**: Local storage for progress tracking and scoring
- **Analytics**: CSV-based metrics tracking for educational assessment

## Project Structure

```text
├── components/           # React components (Plasmic-managed)
├── core/services/       # Business logic and data services
├── pages/              # Next.js pages and API routes
├── public/plasmic/     # Static assets and images
├── resources/          # Assessment data and analytics
└── styles/             # Global CSS and styling
```

## Key Features

### Educational Content

- **Patient Case Studies**: Realistic multiple myeloma scenarios with lab results and treatment histories
- **Interactive Lab Values**: Clickable medical charts showing CBC, comprehensive metabolic panels, and specialized tests (IgA-tTg, etc.)
- **Treatment Decision Trees**: Guided pathways through complex treatment scenarios

### Gamification Elements

- **Room Navigation**: Virtual exam rooms for different healthcare providers
- **Progressive Unlocking**: Complete challenges to access new areas
- **Scoring System**: Points awarded for correct answers and completion
- **Confidence Assessment**: Self-evaluation through wagering mechanisms
- **Multiple Attempts**: Learning-focused approach allowing retries

### Assessment & Analytics

- **Real-time Progress Tracking**: Monitor learner advancement through scenarios
- **Detailed Metrics**: Comprehensive analytics on question attempts, scores, and learning paths
- **Educational Outcomes**: Measure achievement of learning objectives

## Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd escape-room
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Configuration

The project uses Plasmic for visual component management. Key configuration files:

- `plasmic.json` - Plasmic project configuration and component mappings
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## Educational Design

### Target Audience

- Hematologists and oncologists
- Nurse practitioners specializing in hematology/oncology
- Primary care providers
- Medical students and residents
- Healthcare professionals treating multiple myeloma patients

### Pedagogical Approach

- **Case-based Learning**: Realistic patient scenarios promote clinical reasoning
- **Spaced Repetition**: Multiple attempts with immediate feedback reinforce learning
- **Self-Assessment**: Confidence wagering develops metacognitive awareness
- **Progressive Disclosure**: Information revealed incrementally to build understanding

## Analytics & Assessment

The application tracks comprehensive learning analytics including:

- Question attempt patterns and success rates
- Time spent in different sections
- Confidence ratings vs. actual performance
- Learning objective achievement
- Overall completion and engagement metrics

## Contributing

This project is part of Infograph-Ed's educational technology initiatives. For contributions:

1. Follow the existing code structure and TypeScript patterns
2. Ensure Plasmic component integration remains intact
3. Test educational flows thoroughly
4. Maintain accessibility standards (React Aria integration)

## Learn More About Plasmic

This project leverages Plasmic for visual design and component management:

- [Plasmic Website](https://www.plasmic.app/)
- [Plasmic Documentation](https://docs.plasmic.app/learn/)
- [Plasmic Community Forum](https://forum.plasmic.app/)
- [Plasmic GitHub Repository](https://github.com/plasmicapp/plasmic)

## License

© 2024 Infograph-Ed. All rights reserved.
