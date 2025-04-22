# Windows Tablet Player - Application Overview

## Application Purpose
This application is a specialized video player designed for Windows tablets that allows coaches and analysts to:
- Play videos from URLs (including Google Drive)
- Analyze motion with slow-motion playback
- Quickly switch between different video scenarios
- Configure up to 12 video scenarios with custom titles and URLs

## Architecture

### Frontend Components
- **VideoPlayer**: Handles video playback with customizable speed
- **PlaybackControls**: Provides play/pause and speed adjustment controls
- **ScenarioButtons**: Displays buttons for quick selection of video scenarios
- **ScenarioSettingForm**: Form for editing scenario settings
- **StatusBar**: Shows current application status messages
- **Header**: Navigation between player and settings screens

### Pages
- **Player**: Main screen for video playback with controls
- **Settings**: Configuration screen for scenario buttons

### State Management
- Uses Zustand for state management with the `videoStore`
- Stores current video, playback state, and scenario settings
- Provides methods for video selection, playback control, and settings management

### Backend Services
- Simple Express server for API endpoints
- In-memory storage for persisting settings
- API endpoints for retrieving and updating scenario settings

## Data Flow
1. User selects a scenario button
2. Application loads the corresponding video URL
3. User can play/pause and adjust playback speed
4. Changes to scenario settings are saved to the server

## User Interface
- Clean, touch-friendly interface suitable for tablet use
- Two main screens (Player and Settings) accessible via header buttons
- Responsive design that works on various screen sizes

## Technical Details
- Built with React and TypeScript
- Styled with Tailwind CSS and shadcn components 
- Vite as the build tool
- Express backend with in-memory storage
- Drizzle ORM for data modeling