import React from 'react';
import { Link } from 'react-router-dom';

interface PlayerProps {
  scenario1Title: string;
}

const Player: React.FC<PlayerProps> = ({ scenario1Title }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Scenario Player</h1>
        <Link to="/settings">
            <button>Settings</button>
        </Link>
      </div>
      <div>
        <div className="video-title">{scenario1Title ? scenario1Title : "No video selected"}</div>
        {scenario1VideoUrl ? (
          <video 
            controls 
            className="video-player"
            src={scenario1VideoUrl}
          />
        ) : (
          <div>
            <p>Please select a scenario with a configured video URL</p>
          </div>
        )}
      </div>
      <div><button>Play</button> 1.0x</div>
    </div>
  );
};

export default Player;