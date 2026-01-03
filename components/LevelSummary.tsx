
import React, { useEffect } from 'react';
import { Star, ArrowRight, Home, Repeat, Leaf, RefreshCw } from 'lucide-react';
import Mascot from './Mascot';
import { MascotState } from '../types';

interface LevelSummaryProps {
  levelId: number;
  stars: number;
  isPerfect: boolean;
  bananasEarned: number;
  onNext: () => void;
  onRetry: () => void;
  onHome: () => void;
}

const LevelSummary: React.FC<LevelSummaryProps> = ({ 
  levelId, stars, isPerfect, bananasEarned, onNext, onRetry, onHome 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') onNext();
      if (e.key.toLowerCase() === 'r') onRetry();
      if (e.key.toLowerCase() === 'p') onRetry(); 
      if (e.key === 'Escape') onHome();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onRetry, onHome]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-2xl">
      <div className="w-full max-w-lg glass rounded-[2.5rem] md:rounded-[60px] border-white/20 shadow-2xl p-6 md:p-10 flex flex-col items-center text-center animate-in zoom-in duration-500 relative overflow-hidden max-h-[95vh] overflow-y-auto custom-scrollbar">
        {isPerfect && (
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />
        )}

        <div className="mb-4 md:mb-6 scale-[0.7] md:scale-90">
          <Mascot state={MascotState.WIN} isFlipping={true} />
        </div>
        
        <h2 className="text-emerald-400 font-black text-[10px] md:text-sm uppercase tracking-[0.4em] mb-0.5 md:mb-1">Expedition Success</h2>
        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">Level {levelId} Complete!</h3>

        <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
          {[...Array(3)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-8 h-8 md:w-12 md:h-12 transition-all duration-700 delay-${i * 100} ${
                i < stars ? 'text-yellow-400 fill-yellow-400 scale-125 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]' : 'text-white/10'
              }`}
            />
          ))}
        </div>

        {isPerfect && (
          <div className="bg-yellow-400/20 border-2 border-yellow-400/50 p-3 md:p-4 rounded-3xl md:rounded-[32px] mb-6 md:mb-8 flex flex-col items-center gap-1 animate-in slide-in-from-top-10 duration-700">
             <div className="bg-yellow-400 text-emerald-950 p-1.5 md:p-2 rounded-lg md:rounded-xl">
               <Leaf className="w-5 h-5 md:w-6 md:h-6 fill-emerald-900" />
             </div>
             <span className="text-sm md:text-lg text-yellow-400 font-black tracking-tighter uppercase">Golden Leaf Earned!</span>
             <p className="text-yellow-100/60 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">A perfect safari run</p>
          </div>
        )}

        <div className="w-full bg-white/5 rounded-3xl md:rounded-[32px] p-4 md:p-6 border border-white/10 mb-6 md:mb-8 flex justify-around">
          <div className="flex flex-col items-center text-center">
            <span className="text-white/40 text-[8px] md:text-[10px] font-black uppercase mb-0.5 md:mb-1 tracking-widest">Rewards</span>
            <div className="flex items-center gap-1">
              <span className="text-xl md:text-2xl font-black text-yellow-400">+{bananasEarned}</span>
              <span className="text-lg md:text-xl">🍌</span>
            </div>
          </div>
          <div className="w-px h-10 md:h-12 bg-white/10" />
          <div className="flex flex-col items-center text-center">
            <span className="text-white/40 text-[8px] md:text-[10px] font-black uppercase mb-0.5 md:mb-1 tracking-widest">Accuracy</span>
            <span className="text-xl md:text-2xl font-black text-emerald-400">
              {stars === 3 ? '100%' : stars === 2 ? 'Great' : 'Retry'}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 md:gap-4">
          <button
            onClick={onNext}
            className="w-full py-4 md:py-5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black text-lg md:text-xl rounded-2xl md:rounded-[28px] flex items-center justify-center gap-2 md:gap-3 transition-all active:scale-95 shadow-xl md:shadow-2xl"
          >
            NEXT LEVEL <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
          </button>
          
          <div className="flex gap-3">
             <button
              onClick={onRetry}
              className="flex-1 py-3 md:py-4 bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/20 rounded-2xl md:rounded-[24px] flex flex-col items-center justify-center gap-1 transition-all active:scale-95 text-yellow-400 font-black"
            >
              <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest">Retry</span>
            </button>
            <button
              onClick={onHome}
              className="flex-1 py-3 md:py-4 glass hover:bg-white/10 rounded-2xl md:rounded-[24px] flex flex-col items-center justify-center gap-1 transition-all active:scale-95 text-white/60 font-black"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest">Map</span>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default LevelSummary;
