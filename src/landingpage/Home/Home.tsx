import { useNavigate } from 'react-router-dom';
import './Home.css'; // Create this CSS file
import { useState } from 'react';
import { Settings2 } from "lucide-react";
import banner from '@/assets/banner.jpeg'
import Transition from '../components/Transition';

const HomePage = () => {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');

  const handlePlay = () => {
    if (playerName.trim()) {
      // Save player name to context/state/store
      navigate('/lobby');
    }
  };

  return (
    <div className="home-container">
      {/* Settings Icon */}
      <div className="settings-icon" onClick={() => navigate('/settings')}>
        <Settings2 size={24} />
      </div>
<Transition/>
      {/* Middle Image */}
      <div className="banner-image-container">
        <img 
          src={banner} // Replace with your banner path
          alt="Game Banner"
          className="banner-image"
        />
      </div>

      {/* Input and Buttons */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="name-input"
        />
        
        <button 
          onClick={handlePlay}
          className="play-button"
          disabled={!playerName.trim()}
        >
          Play
        </button>

        <button 
          onClick={() => navigate('/create-room')}
          className="private-room-button"
        >
          Create a Private Room
        </button>
      </div>
    </div>
  );
};

export default HomePage;