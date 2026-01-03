
import React from 'react';
import { Star, Leaf } from 'lucide-react';
import { LEVELS } from '../data/curriculum';
import { useGame } from '../context/GameContext';
import Mascot from './Mascot';
import { MascotState } from '../types';

interface LevelGridProps {
  onSelectLevel: (id: number) => void;
}

const LevelGrid: React.FC<LevelGridProps> = ({ onSelectLevel }) => {
  const { completedLevels } = useGame();

  const getBiomeInfo = (id: number) => {
    if (id <= 10) return { title: "Sunlit Floor", color: "text-emerald-400", bg: "bg-emerald-500/5", accent: "emerald" };
    if (id <= 20) return { title: "Ancient Ruins", color: "text-amber-400", bg: "bg-amber-500/5", accent: "amber" };
    return { title: "High Canopy", color: "text-sky-400", bg: "bg-sky-500/5", accent: "sky" };
  };

  return (
    <div className="relative max-w-7xl mx-auto p-4 pt-12 md:pt-16 pb-32">
      {/* Title Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 md:mb-12 text-center lg:text-left gap-4 glass p-6 md:p-10 rounded-3xl md:rounded-[3rem] border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="flex-1 flex flex-col items-center lg:items-start z-10">
          <h1 className="text-3xl md:text-6xl font-black text-white drop-shadow-2xl mb-1 tracking-tighter">
            Sentence Safari
          </h1>
          <h2 className="text-emerald-400 font-black text-[10px] md:text-base uppercase tracking-[0.4em] ml-1">
            The Syntax Jungle
          </h2>
          <div className="w-12 md:w-16 h-1 bg-emerald-500/30 rounded-full mt-2 md:mt-3 mb-2 md:mb-3" />
          <p className="text-emerald-100/20 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
            30 Expeditions Unlocked • Choose Your Path
          </p>
        </div>
        
        {/* Kojo */}
        <div className="shrink-0 z-10 transform scale-[0.5] sm:scale-[0.6] lg:scale-[0.8] hover:scale-90 transition-transform duration-700 mt-0 lg:mb-16">
          <Mascot state={MascotState.IDLE} />
        </div>
      </div>

      <div className="space-y-12 md:space-y-20">
        {[0, 10, 20].map((startIdx) => {
          const biome = getBiomeInfo(startIdx + 1);
          return (
            <div key={startIdx} className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4 px-2 md:px-4">
                <div className={`h-px flex-1 bg-gradient-to-r from-transparent to-${biome.accent}-500/50`} />
                <h3 className={`${biome.color} font-black text-sm md:text-lg uppercase tracking-widest`}>{biome.title}</h3>
                <div className={`h-px flex-1 bg-gradient-to-l from-transparent to-${biome.accent}-500/50`} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {LEVELS.slice(startIdx, startIdx + 10).map((level) => {
                  const progress = completedLevels[level.id];
                  const stars = progress?.stars || 0;
                  const isCompleted = !!progress;

                  return (
                    <div key={level.id} className="relative group">
                      <button
                        onClick={() => onSelectLevel(level.id)}
                        className={`
                          relative w-full aspect-square rounded-2xl md:rounded-[32px] transition-all duration-500 transform
                          glass border-white/10 hover:border-${biome.accent}-400/50 shadow-xl md:shadow-2xl hover:-translate-y-1 hover:scale-[1.03]
                          ${isCompleted ? 'ring-2 ring-emerald-500/20' : ''}
                        `}
                      >
                        <div className="flex flex-col items-center justify-center h-full gap-1.5 md:gap-2 relative z-10">
                          <div className={`
                            w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-0.5 md:mb-1 transition-all duration-300
                            bg-${biome.accent}-500/20
                          `}>
                            <span className="text-xl md:text-2xl font-black text-white">
                              {level.id}
                            </span>
                          </div>
                          
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-500 ${i < stars ? 'text-yellow-400 fill-yellow-400 scale-110' : 'text-white/10'}`}
                              />
                            ))}
                          </div>
                        </div>

                        {progress?.isPerfect && (
                          <div className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 bg-yellow-400 text-emerald-950 p-1 md:p-1.5 rounded-lg md:rounded-xl shadow-lg border border-emerald-950 z-20 animate-bounce">
                            <Leaf className="w-3 h-3 md:w-4 md:h-4 fill-emerald-900" />
                          </div>
                        )}
                        
                        <div className={`absolute inset-0 bg-gradient-to-br from-${biome.accent}-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl md:rounded-[32px]`} />
                      </button>
                      
                      <div className="mt-2 md:mt-3 text-center px-1">
                         <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest truncate text-white/70">
                           {level.title}
                         </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LevelGrid;
