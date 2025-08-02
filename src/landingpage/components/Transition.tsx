import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Transition.css';
import logo from '@/assets/logo.png'
const Transition = () => {
  const [phase, setPhase] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setPhase(2), 1000); // Logo moves to center
    const timer2 = setTimeout(() => setPhase(3), 2000); // Background reveals
    const timer3 = setTimeout(() => setPhase(4), 3000); // Logo disappears
    const timer4 = setTimeout(() => navigate('/home'), 3500); // Navigate to home

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  return (
    <div className={`transition-container phase-${phase}`}>
      <img 
        src={logo} // Replace with your logo path
        alt="Game Logo"
        className="transition-logo"
      />
    </div>
  );
};

export default Transition;