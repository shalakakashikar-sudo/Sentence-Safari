
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameProgress, LevelProgress } from '../types';

interface GameContextType extends GameProgress {
  unlockLevel: (id: number) => void;
  completeLevel: (id: number, stars: number, isPerfect: boolean) => void;
  addBananas: (amount: number) => void;
  spendBananas: (amount: number) => boolean;
}

const STORAGE_KEY = 'sentence-safari-v1';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<GameProgress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = stored ? JSON.parse(stored) : {
      unlockedLevels: Array.from({ length: 30 }, (_, i) => i + 1), // All unlocked by default
      completedLevels: {},
      bananas: 20
    };
    // Ensure all levels are unlocked if it's an old save
    if (initial.unlockedLevels.length < 30) {
      initial.unlockedLevels = Array.from({ length: 30 }, (_, i) => i + 1);
    }
    return initial;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const unlockLevel = (id: number) => {
    // Logic kept for potential future expansion, but all are unlocked by default now
    if (!progress.unlockedLevels.includes(id) && id <= 30) {
      setProgress(prev => ({
        ...prev,
        unlockedLevels: [...prev.unlockedLevels, id]
      }));
    }
  };

  const completeLevel = (id: number, stars: number, isPerfect: boolean) => {
    setProgress(prev => {
      const current = prev.completedLevels[id];
      const newLevelProgress: LevelProgress = {
        stars: Math.max(current?.stars || 0, stars),
        isPerfect: current?.isPerfect || isPerfect
      };
      
      return {
        ...prev,
        completedLevels: {
          ...prev.completedLevels,
          [id]: newLevelProgress
        }
      };
    });
  };

  const addBananas = (amount: number) => {
    setProgress(prev => ({ ...prev, bananas: prev.bananas + amount }));
  };

  const spendBananas = (amount: number): boolean => {
    if (progress.bananas >= amount) {
      setProgress(prev => ({ ...prev, bananas: prev.bananas - amount }));
      return true;
    }
    return false;
  };

  return (
    <GameContext.Provider value={{ ...progress, unlockLevel, completeLevel, addBananas, spendBananas }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
