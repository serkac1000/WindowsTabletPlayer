import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SettingsProps {
  scenario1Settings: {
    title: string;
    videoUrl: string;
  };
  setScenario1Settings: (settings: { title: string; videoUrl: string }) => void;
}

const Settings: React.FC<SettingsProps> = ({ scenario1Settings, setScenario1Settings }) => {
  const [localSettings, setLocalSettings] = useState(scenario1Settings);

  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem('scenario1Settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setLocalSettings(parsed);
      setScenario1Settings(parsed);
    }
  }, []);

  const handleSave = () => {
    setScenario1Settings(localSettings);
    localStorage.setItem('scenario1Settings', JSON.stringify(localSettings));
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  return (
    <div data-testid="settings">
      <div
        className="header-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="header">
          <h1>Scenario Player</h1>
        </div>
        <Link to="/">
          <button>Player</button>
        </Link>
      </div>
      <div className="info-text">
        Configure the URLs and titles for each video button. Settings are
        automatically saved.
      </div>
      <div className="video-settings-container">
        <h2>Video Settings</h2>
        <div className="scenario-config-block">
          <h3>Scenario 1</h3>
          <div className="input-group">
            <label htmlFor="scenario1-title">Title</label>
            <input
              type="text"
              id="scenario1-title"
              value={localSettings.title}
              onChange={(e) =>
                setLocalSettings({
                  ...localSettings,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="scenario1-videoUrl">Video URL</label>
            <input
              type="text"
              id="scenario1-videoUrl"
              value={localSettings.videoUrl}
              onChange={(e) =>
                setLocalSettings({
                  ...localSettings,
                  videoUrl: e.target.value,
                })
              }
            />
          </div>
          <div className="save-container">
            <button 
              onClick={handleSave}
              className="save-button"
            >
              Save Changes
            </button>
            {showSaved && <span className="save-notification">Saved!</span>}
          </div>
          <div className="video-url-info">
            for videos: use direct MP4 links:{' '}
            <a href="https://example.com/video.mp4">
              https://example.com/video.mp4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
