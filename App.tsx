
import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Header from './components/Header';
import LevelGrid from './components/LevelGrid';
import StudyGuide from './components/StudyGuide';
import QuizBoard from './components/QuizBoard';
import LevelSummary from './components/LevelSummary';
import { LEVELS } from './data/curriculum';

const AppContent: React.FC = () => {
  const { completeLevel } = useGame();
  const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
  const [isStudying, setIsStudying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [lastStars, setLastStars] = useState(0);
  const [isLastPerfect, setIsLastPerfect] = useState(false);

  const currentLevel = selectedLevelId ? LEVELS.find(l => l.id === selectedLevelId) : null;

  const handleLevelSelect = (id: number) => {
    setSelectedLevelId(id);
    setIsStudying(true);
    setShowSummary(false);
  };

  const startQuiz = () => {
    setIsStudying(false);
    setIsPlaying(true);
  };

  const handleQuizComplete = (stars: number, isPerfect: boolean) => {
    if (selectedLevelId) {
      completeLevel(selectedLevelId, stars, isPerfect);
      setLastStars(stars);
      setIsLastPerfect(isPerfect);
      setShowSummary(true);
    }
    setIsPlaying(false);
  };

  const nextLevel = () => {
    if (selectedLevelId && selectedLevelId < 30) {
      handleLevelSelect(selectedLevelId + 1);
    } else {
      exitLevel();
    }
  };

  const exitLevel = () => {
    setIsPlaying(false);
    setIsStudying(false);
    setShowSummary(false);
    setSelectedLevelId(null);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#011a14]">
      {/* Immersive Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-amber-500/5 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-sky-900/5 rounded-full blur-[200px]" />
      </div>

      <Header 
        onBack={selectedLevelId ? exitLevel : undefined} 
        title={isPlaying && currentLevel ? `Safari: Level ${currentLevel.id}` : "Sentence Safari"}
      />

      <main className="container mx-auto relative z-10 pt-16">
        {!selectedLevelId && <LevelGrid onSelectLevel={handleLevelSelect} />}
        
        {isStudying && currentLevel && (
          <StudyGuide level={currentLevel} onStart={startQuiz} />
        )}

        {isPlaying && currentLevel && (
          <QuizBoard 
            level={currentLevel} 
            onComplete={handleQuizComplete} 
            onExit={exitLevel} 
          />
        )}

        {showSummary && selectedLevelId && (
          <LevelSummary 
            levelId={selectedLevelId}
            stars={lastStars}
            isPerfect={isLastPerfect}
            bananasEarned={(5 + (lastStars * 2)) + (isLastPerfect ? 10 : 0)}
            onNext={nextLevel}
            onRetry={startQuiz}
            onHome={exitLevel}
          />
        )}
      </main>

      {/* Persistent User Credits - Positioned in the corner to avoid control overlaps */}
      <footer className="fixed bottom-4 right-6 pointer-events-none z-[100]">
        <div className="flex flex-col items-end opacity-40 hover:opacity-100 transition-opacity">
          <p className="text-white/30 text-[8px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
            Created by <span className="text-emerald-400/50">Shalaka Kashikar</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;
