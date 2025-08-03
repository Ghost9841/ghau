import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import banner from '@/assets/banner-removebg-preview.png'
import logo from '@/assets/logo.png'
import { useNavigate } from "react-router";
import { socket } from "@/socket/Socket";
interface Props {
  onSettingsClick: () => void
}
const HomePage = ({ onSettingsClick }: Props) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [room, setRoom] = useState('')

  function redirectToGameZone() {
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    if (room.trim() === '') {
      alert('Please enter a room ID');
      return;
    }
    socket.emit('join_room', room);
    navigate('/game-zone');
  }

  useEffect(() => {
  }, [socket])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background banner */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-gray-900">

        <div className=" w-full h-full">
          <img
            src={banner}
            alt="la hai banner aayo hai"
            className="w-full h-full object-contain opacity-80 absolute inset-0"
          />
        </div>
      </div>

      {/* Settings icon */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={onSettingsClick}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Settings className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Center image placeholder */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-32  flex items-center justify-center">
            <span className="text-white/70 text-sm">
              <img src={logo} alt="" className="rounded-full fade-in" /></span>
          </div>
        </div>

        {/* Bottom section with controls */}
        <div className="pb-20 px-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* Name input */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 text-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
              />
            </div>
            {/* Room ID input */}
            <input
              type="text"
              placeholder="Enter room ID"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 text-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
            />

            {/* Play button */}
            <button onClick={redirectToGameZone} className="w-full py-4 bg-gradient-to-r from-red-900 to-black hover:from-red-700 hover:to-black text-white text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
              Play
            </button>

            {/* Create private room button */}
            <button
              onClick={() => {
                const newRoomId = crypto.randomUUID().slice(0, 8); // short unique ID
                setRoom(newRoomId);
                alert(`Created Room ID: ${newRoomId}`);
                navigate('/game-zone');
              }}
              className="w-full py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Create a Private Room
            </button>

          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};


export default HomePage;