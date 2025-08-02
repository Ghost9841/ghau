import { useState } from "react";
import TransitionComponent from "../components/Transition";
import HomePage from "../components/HomePageComp";

const Home = () => {
  const [showTransition, setShowTransition] = useState(true);

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  const handleSettingsClick = () => {
    // Navigation to '/settings' would be handled here
    // For demo purposes, we'll just log it
    console.log('Navigate to /settings');
    alert('Navigate to /settings');
  };

  return (
    <div className="relative">
      {showTransition && (
        <TransitionComponent onTransitionComplete={handleTransitionComplete} />
      )}
      
      {!showTransition && (
        <HomePage onSettingsClick={handleSettingsClick} />
      )}
    </div>
  );
};

export default Home;