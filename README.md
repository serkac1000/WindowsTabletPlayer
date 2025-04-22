# Windows Tablet Player

A desktop video player application with advanced playback features, designed for Windows tablets and touch-enabled devices.

## Features

- **Slow Motion Playback**: Analyze videos with customizable playback speed
- **Scenario Management**: Configure up to 12 video buttons with titles and URLs
- **Touch-Optimized Interface**: Designed specifically for tablet use
- **Simple Navigation**: Easy switching between player and settings
- **Persistent Settings**: All configurations are saved automatically

## Installation and Setup on Windows

### Prerequisites

1. Install Node.js for Windows:
   - Download the Windows installer from [nodejs.org](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - Run the installer and follow the installation wizard
   - Make sure to include npm package manager in the installation

2. Verify installation:
   - Open Command Prompt or PowerShell
   - Run `node -v` and `npm -v` to verify both are installed correctly

### Installing the Application

1. Extract the ZIP file to your preferred location
   - Right-click on `WindowsTabletPlayer.zip` and select "Extract All"
   - Choose a destination folder (e.g., `C:\WindowsTabletPlayer`)
   - Click "Extract"

2. Install dependencies:
   - Open Command Prompt or PowerShell
   - Navigate to the application folder:
     ```
     cd C:\path\to\WindowsTabletPlayer
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - This may take a few minutes to complete

### Starting the Application

1. Start the development server:
   - In the same Command Prompt or PowerShell window, run:
     ```
     npm run dev
     ```
   - Wait for the server to start (you'll see "serving on port 5000" message)

2. Access the application:
   - Open a web browser (Chrome or Edge recommended)
   - Navigate to `http://localhost:5000`
   - The application should now be running

### Using the Application

1. The application has two main screens:
   - **Player**: Watch and control videos with slow motion capabilities
   - **Settings**: Configure video scenario buttons

2. Initial configuration:
   - When first launched, go to the Settings screen
   - Configure your video buttons with titles and URLs (Google Drive or other sources)
   - Return to the Player screen and select a scenario to play

3. Video controls:
   - Play/Pause: Toggle video playback
   - Speed controls: Adjust playback speed for slow motion analysis

## Creating a Desktop Shortcut

1. Create a batch file named `StartVideoPlayer.bat` in the application folder with the following content:
   ```batch
   @echo off
   cd /d %~dp0
   start "" http://localhost:5000
   npm run dev
   ```

2. Create a shortcut to this batch file:
   - Right-click on `StartVideoPlayer.bat` and select "Create shortcut"
   - Move the shortcut to your desktop
   - Right-click the shortcut and select "Properties"
   - Click "Change Icon" and select an appropriate icon (optional)

3. To start the application, double-click the desktop shortcut

## Troubleshooting

- **Application doesn't start**: Make sure Node.js is installed properly and you're in the correct directory
- **Videos don't play**: Check your internet connection and verify the video URLs are accessible
- **Slow performance**: Close other applications to free up system resources

## Technical Details

- Frontend: React with TypeScript
- Styling: Tailwind CSS with shadcn components
- Backend: Express server with in-memory storage
- Build Tool: Vite