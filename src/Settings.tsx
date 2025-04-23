import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  const [scenario1Settings, setScenario1Settings] = useState({
    title: '',
    videoUrl: '',
  });

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
              value={scenario1Settings.title}
              onChange={(e) =>
                setScenario1Settings({
                  ...scenario1Settings,
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
              value={scenario1Settings.videoUrl}
              onChange={(e) =>
                setScenario1Settings({
                  ...scenario1Settings,
                  videoUrl: e.target.value,
                })
              }
            />
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
