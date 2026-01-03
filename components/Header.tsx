
import React from 'react';
import { ArrowLeft, Coins } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface HeaderProps {
  onBack?: () => void;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ onBack, title = "Sentence Safari" }) => {
  const { bananas } = useGame();

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50 glass">
      <div className="flex items-center gap-4">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl font-black tracking-tight text-white drop-shadow-md">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 shadow-inner">
          <Coins className="w-5 h-5 text-amber-400" />
          <span className="font-bold text-amber-400">{bananas}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
