import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png'
interface Props{
  onTransitionComplete: () => void
}

const TransitionComponent = ({ onTransitionComplete }:Props) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(true);
  const [logoExiting, setLogoExiting] = useState(false);

  useEffect(() => {
    // Logo enters from top
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 300);

    // Logo starts exiting
    const logoExitTimer = setTimeout(() => {
      setLogoExiting(true);
    }, 2000);

    // Background exits from bottom to top
    const backgroundTimer = setTimeout(() => {
      setBackgroundVisible(false);
    }, 2300);

    // Complete transition
    const completeTimer = setTimeout(() => {
      onTransitionComplete();
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(logoExitTimer);
      clearTimeout(backgroundTimer);
      clearTimeout(completeTimer);
    };
  }, [onTransitionComplete]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Black background that slides out */}
      <div 
        className={`absolute inset-0 bg-black transition-transform duration-700 ease-in-out ${
          !backgroundVisible ? 'transform translate-y-full' : ''
        }`}
      />
      
      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-6xl font-bold text-white transition-all duration-1000 ease-out ${
            logoVisible && !logoExiting 
              ? 'transform translate-y-0 opacity-100' 
              : logoExiting
              ? 'transform scale-0 opacity-0'
              : 'transform -translate-y-20 opacity-0'
          }`}
        >
          <img src={logo} alt="ghau_ghar_ko_logo_hai" className='h-80 w-full rounded-full animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default TransitionComponent;