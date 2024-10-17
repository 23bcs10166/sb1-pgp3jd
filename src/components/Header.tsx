import React, { useState } from 'react';
import { Video, User, Bell, Info } from 'lucide-react';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Video size={24} />
          <span className="font-bold text-xl">VALID AI</span>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
          <div className="relative">
            <Info
              size={20}
              className="cursor-pointer text-white hover:text-blue-200 transition-colors duration-200"
              onClick={toggleInfo}
            />
            {showInfo && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg p-4">
                <p className="text-sm">
                  VALID AI uses advanced machine learning to detect deepfake videos, helping to maintain trust in digital media.
                </p>
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Bell size={20} className="cursor-pointer" />
              <div className="relative">
                <img
                  src="https://source.unsplash.com/random/40x40?face"
                  alt="User"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={handleLogout}
                />
              </div>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300"
            >
              <User size={16} />
              <span>Login</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;