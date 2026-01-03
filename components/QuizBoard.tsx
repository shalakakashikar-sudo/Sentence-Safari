import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Level, MascotState, Question } from '../types';
import Mascot from './Mascot';
import { Lightbulb, RotateCcw, Check, Flame, X, Eye, Star } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { shuffle } from '../data/curriculum_helper';

interface QuizBoardProps {
  level: Level;
  onComplete: (stars: number, isPerfect: boolean) => void;
  onExit: () => void;
}

const QuizBoard: React.FC<QuizBoardProps> = ({ level, onComplete, onExit }) => {
  const { spendBananas, addBananas, bananas } = useGame();
  const [qIndex, setQIndex] = useState(0);
  const [sessionQuestions] = useState<Question[]>(() => shuffle(level.questions).slice(0, 5));
  const [usedIndices, setUsedIndices] = useState<number[]>([]);
  const [mascotState, setMascotState] = useState<MascotState>(MascotState.IDLE);
  const [isFlipping, setIsFlipping] = useState(false);
  const [shake, setShake] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);
  
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [revealUsed, setRevealUsed] = useState(false);

  const [feedbackText, setFeedbackText] = useState<{id: number, text: string, color: string, x: number, y: number}[]>([]);
  const [particles, setParticles] = useState<{id: number, x: number, y: number, tx: number, ty: number, tr: number, color: string}[]>([]);
  const [flyingBananas, setFlyingBananas] = useState<{id: number, x: number, y: number}[]>([]);
  const checkBtnRef = useRef<HTMLButtonElement>(null);

  const currentQuestion = sessionQuestions[qIndex];

  const spawnFeedback = (text: string, color: string) => {
    const id = Date.now();
    setFeedbackText(prev => [...prev, { id, text, color, x: Math.random() * 40 - 20, y: 0 }]);
    setTimeout(() => {
      setFeedbackText(prev => prev.filter(f => f.id !== id));
    }, 1500);
  };
  
  const handleWordClick = useCallback((index: number) => {
    if (usedIndices.includes(index)) return;
    setUsedIndices(prev => [...prev, index]);
    if (mascotState === MascotState.ERROR) setMascotState(MascotState.IDLE);
  }, [usedIndices, mascotState]);

  const handleUndo = useCallback(() => {
    setUsedIndices(prev => prev.slice(0, -1));
  }, []);

  const handleReveal = useCallback(() => {
    if (revealUsed) return;
    if (spendBananas(15)) {
      const tokens = currentQuestion.correctAnswers[0].match(/\w+|[^\w\s]/g) || [];
      const newIndices: number[] = [];
      const tempScrambled = [...currentQuestion.scrambled];
      
      tokens.forEach(token => {
        const idx = tempScrambled.findIndex(t => t === token);
        if (idx !== -1) {
          newIndices.push(idx);
          tempScrambled[idx] = "USED_MARKER";
        }
      });
      setUsedIndices(newIndices);
      setMascotState(MascotState.SUCCESS);
      setRevealUsed(true);
      spawnFeedback("-15 🍌", "text-red-400 font-bold");
    } else {
      spawnFeedback("NEED 15 🍌", "text-amber-400 font-bold");
    }
  }, [currentQuestion, spendBananas, revealUsed]);

  const normalize = (str: string) => {
    return str.toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[.,!?;]$/, '')
      .replace(/\s([.,!?;])/g, '$1');
  };

  const handleCheck = useCallback(() => {
    if (!currentQuestion) return;

    const selectedTokens = usedIndices.map(idx => currentQuestion.scrambled[idx]);
    let built = "";
    selectedTokens.forEach((token, i) => {
      const isPunctuation = /^[^\w\s]$/.test(token);
      if (i > 0 && !isPunctuation) built += " ";
      built += token;
    });
    
    const normalizedBuilt = normalize(built);
    const isCorrect = currentQuestion.correctAnswers.some(
      ans => normalize(ans) === normalizedBuilt
    );

    if (isCorrect) {
      spawnBanana();
      spawnParticles();
      
      let reward = 2;
      if (streak >= 4) reward = 15;
      else if (streak >= 2) reward = 8;
      
      addBananas(reward);
      spawnFeedback(`+${reward} 🍌`, "text-yellow-400 text-3xl md:text-4xl font-black");
      setStreak(prev => prev + 1);
      setShowHint(false);
      
      setTimeout(() => {
        if (qIndex < sessionQuestions.length - 1) {
          setQIndex(prev => prev + 1);
          setUsedIndices([]);
          setMascotState(MascotState.IDLE);
        } else {
          setIsFlipping(true);
          setMascotState(MascotState.WIN);
          let stars = 3;
          if (revealUsed) stars = 1;
          else {
            const mistakes = (errorOccurred ? 1 : 0) + (hintUsed ? 1 : 0);
            stars = Math.max(1, 3 - mistakes);
          }
          const isPerfect = !errorOccurred && !hintUsed && !revealUsed;
          setTimeout(() => onComplete(stars, isPerfect), 1200);
        }
      }, 1200);
    } else {
      setMascotState(MascotState.ERROR);
      setStreak(0);
      setErrorOccurred(true);
      setShake(true);
      spendBananas(5);
      spawnFeedback("-5 🍌", "text-red-500 font-black");
      setTimeout(() => setShake(false), 500);
    }
  }, [usedIndices, currentQuestion, qIndex, onComplete, addBananas, spendBananas, streak, errorOccurred, hintUsed, revealUsed, sessionQuestions.length]);

  const handleHint = useCallback(() => {
    if (showHint) return;
    if (spendBananas(8)) {
      setShowHint(true);
      setHintUsed(true);
      setMascotState(MascotState.TICKLE);
      spawnFeedback("-8 🍌", "text-amber-400 font-bold");
      setTimeout(() => setMascotState(MascotState.IDLE), 1000);
    } else {
      spawnFeedback("NEED 8 🍌", "text-amber-400 font-bold");
    }
  }, [spendBananas, showHint]);

  const getBiomeColors = () => {
    if (level.id <= 10) return ['#4ade80', '#22c55e', '#ffffff'];
    if (level.id <= 20) return ['#fbbf24', '#f59e0b', '#78350f'];
    return ['#38bdf8', '#0ea5e9', '#ffffff'];
  };

  const spawnParticles = () => {
    if (!checkBtnRef.current) return;
    const rect = checkBtnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const colors = getBiomeColors();
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      tx: (Math.random() - 0.5) * 600,
      ty: (Math.random() - 0.5) * 600,
      tr: Math.random() * 1000,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1500);
  };

  const spawnBanana = () => {
    if (!checkBtnRef.current) return;
    const rect = checkBtnRef.current.getBoundingClientRect();
    const mascotEl = document.getElementById('mascot-container');
    if (!mascotEl) return;
    const mascot = mascotEl.getBoundingClientRect();
    const id = Date.now();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top;
    const endX = mascot.left + mascot.width / 2;
    const endY = mascot.top + (mascot.height * 0.75);
    const count = streak >= 4 ? 6 : streak >= 2 ? 3 : 1;
    for (let i = 0; i < count; i++) {
      const bid = id + i;
      setTimeout(() => {
        setFlyingBananas(prev => [...prev, { id: bid, x: startX, y: startY }]);
        const style = document.createElement('style');
        style.innerHTML = `@keyframes fly-${bid} {
          0% { transform: translate(${startX + (Math.random() * 40 - 20)}px, ${startY}px) scale(1.2) rotate(0deg); opacity: 1; }
          85% { transform: translate(${endX}px, ${endY}px) scale(0.3) rotate(720deg); opacity: 1; }
          100% { transform: translate(${endX}px, ${endY}px) scale(0) rotate(750deg); opacity: 0; }
        }`;
        document.head.appendChild(style);
        setTimeout(() => setMascotState(MascotState.EATING), 550);
        setTimeout(() => {
          setFlyingBananas(prev => prev.filter(b => b.id !== bid));
          document.head.removeChild(style);
          if (i === count - 1) setMascotState(MascotState.SUCCESS);
        }, 800);
      }, i * 80);
    }
  };

  // Global Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1-9 to select words
      if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key) - 1;
        if (currentQuestion && currentQuestion.scrambled[index]) {
          handleWordClick(index);
        }
      } else if (e.key === '0') {
        if (currentQuestion && currentQuestion.scrambled[9]) {
          handleWordClick(9);
        }
      }

      // Enter to Verify
      if (e.key === 'Enter') {
        if (usedIndices.length > 0) handleCheck();
      }
      
      // Backspace to Undo
      if (e.key === 'Backspace') {
        handleUndo();
      }

      // H for Hint
      if (e.key.toLowerCase() === 'h') {
        handleHint();
      }

      // S for Solve (Reveal)
      if (e.key.toLowerCase() === 's') {
        handleReveal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, usedIndices, handleCheck, handleUndo, handleHint, handleReveal, handleWordClick]);

  return (
    <div className={`flex flex-col w-full h-[calc(100dvh-64px)] overflow-hidden safe-area-inset ${shake ? 'shake' : ''}`}>
      {particles.map(p => (
        <div key={p.id} className="confetti-particle w-2 h-2 rounded-full" style={{ left: p.x, top: p.y, backgroundColor: p.color, '--tx': `${p.tx}px`, '--ty': `${p.ty}px`, '--tr': `${p.tr}deg` } as any} />
      ))}

      {feedbackText.map(f => (
        <div key={f.id} className={`fixed z-[120] font-black text-3xl md:text-4xl pointer-events-none drop-shadow-2xl ${f.color}`} 
             style={{ left: `calc(50% + ${f.x}px)`, top: '30%', animation: 'confetti-fall 1.5s ease-out forwards' }}>
          {f.text}
        </div>
      ))}

      {/* Top Status Bar */}
      <div className="w-full flex justify-between items-center px-4 md:px-8 py-2 md:py-4 shrink-0 bg-emerald-950/20">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex gap-1 bg-white/5 p-1.5 rounded-xl border border-white/10 shadow-lg">
            {[...Array(3)].map((_, i) => {
              let active = false;
              if (revealUsed) active = i === 0;
              else {
                const mistakes = (errorOccurred ? 1 : 0) + (hintUsed ? 1 : 0);
                active = i < (3 - mistakes);
              }
              return <Star key={i} className={`w-5 h-5 md:w-8 md:h-8 ${active ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]' : 'text-white/5'}`} />;
            })}
          </div>
          <div className="flex gap-1.5">
            {sessionQuestions.map((_, i) => (
              <div key={i} className={`w-2.5 h-2.5 md:w-4 md:h-4 rounded-full transition-all duration-500 ${i < qIndex ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : i === qIndex ? 'bg-white/40 animate-pulse' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
        {streak >= 2 && (
          <div className="flex items-center gap-1 animate-bounce">
            <Flame className="w-6 h-6 md:w-10 md:h-10 text-orange-500 fill-orange-500" />
            <span className="text-xl md:text-3xl font-black streak-fire">{streak}x</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-stretch justify-center gap-4 w-full max-w-7xl mx-auto px-4 overflow-hidden py-2">
        <div className="flex flex-col items-center justify-center shrink-0 lg:w-1/4 relative min-h-[140px] lg:min-h-0">
          <div className="relative group transform scale-[0.4] sm:scale-[0.5] lg:scale-[0.8] transition-transform">
            {showHint && currentQuestion && (
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 glass border-sky-400/50 rounded-2xl p-4 text-sky-100 font-bold text-sm shadow-2xl animate-in zoom-in slide-in-from-bottom-2 duration-300 z-[60]">
                <div className="flex items-center gap-2 mb-1 text-sky-400">
                  <Lightbulb className="w-5 h-5" />
                  <span className="uppercase text-[11px] tracking-widest font-black">Hint</span>
                </div>
                {currentQuestion.hint}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-sky-900 border-r border-b border-sky-400/50 rotate-45" />
              </div>
            )}
            <Mascot state={mascotState} isFlipping={isFlipping} />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 min-h-0">
          <div className="flex-[0_0_auto] min-h-[100px] md:min-h-[160px] p-4 md:p-6 glass rounded-3xl border-white/20 flex flex-wrap gap-2 md:gap-3 items-center justify-center relative shadow-inner overflow-y-auto custom-scrollbar">
            {usedIndices.length === 0 && (
              <div className="opacity-20 pointer-events-none text-center px-4">
                <span className="text-lg md:text-2xl font-black italic tracking-tighter text-white">Select words or press 1-9 to build your sentence...</span>
              </div>
            )}
            {usedIndices.map((idx, i) => (
              <button
                key={i}
                onClick={() => handleUndo()}
                className="group relative px-4 py-2 md:px-6 md:py-3 bg-emerald-500 text-emerald-950 font-black text-lg md:text-2xl rounded-xl shadow-[0_4px_0_rgb(5,150,105)] active:translate-y-[2px] active:shadow-none transition-all animate-in slide-in-from-bottom-2 duration-300"
              >
                {currentQuestion.scrambled[idx]}
                <div className="absolute -top-2 -right-2 bg-emerald-900 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <X className="w-3 h-3 text-white" />
                </div>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 py-4">
              {currentQuestion?.scrambled.map((word, i) => {
                const isUsed = usedIndices.includes(i);
                return (
                  <div key={i} className={`relative transition-all duration-300 ${isUsed ? 'opacity-0 pointer-events-none scale-75' : 'hover:scale-105'}`}>
                    <button
                      onClick={() => handleWordClick(i)}
                      className="relative px-5 py-3 md:px-10 md:py-5 bg-emerald-900/40 hover:bg-emerald-700/60 border border-emerald-500/10 leaf-shape transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      <div className="leaf-vein" />
                      <span className="text-white font-black text-lg md:text-3xl tracking-tight drop-shadow-lg relative z-10">{word}</span>
                    </button>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#8b4513] rounded-lg rotate-12 flex items-center justify-center border-2 border-[#451a03] shadow-md">
                      <span className="text-amber-100 font-black text-[9px]">{i + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls with Discoverable Keyboard Shortcuts */}
          <div className="flex flex-col md:flex-row gap-3 w-full max-w-4xl mx-auto shrink-0 py-4">
            <button
              onClick={handleUndo}
              disabled={usedIndices.length === 0}
              className={`flex-1 h-14 md:h-18 glass rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95
                ${usedIndices.length > 0 ? 'text-white hover:bg-white/10' : 'opacity-20 cursor-not-allowed'}
              `}
            >
              <RotateCcw className="w-6 h-6" />
              <span className="font-black uppercase tracking-widest text-sm">Undo (Back)</span>
            </button>
            
            <button
              ref={checkBtnRef}
              onClick={handleCheck}
              disabled={usedIndices.length === 0}
              className={`flex-[2_2_0%] h-14 md:h-18 rounded-2xl md:rounded-3xl font-black text-xl md:text-3xl flex items-center justify-center gap-4 transition-all shadow-xl active:scale-95
                ${usedIndices.length > 0 
                  ? 'bg-yellow-400 text-emerald-950 hover:bg-yellow-300 ring-4 ring-yellow-400/10' 
                  : 'bg-white/5 text-white/20 cursor-not-allowed'}
              `}
            >
              <Check className="w-8 h-8 stroke-[4px]" />
              VERIFY (Enter)
            </button>

            <div className="flex flex-row md:flex-col gap-2 shrink-0">
              <button
                onClick={handleHint}
                disabled={showHint}
                className={`flex-1 md:w-44 h-12 glass rounded-xl flex items-center justify-center gap-2 transition-all
                  ${showHint ? 'opacity-40' : 'hover:bg-white/10'}
                `}
              >
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Hint (H)</span>
              </button>
              <button
                onClick={handleReveal}
                disabled={revealUsed}
                className={`flex-1 md:w-44 h-12 glass rounded-xl flex items-center justify-center gap-2 transition-all
                  ${revealUsed ? 'opacity-40' : 'hover:bg-white/10'}
                `}
              >
                <Eye className="w-5 h-5 text-sky-400" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Solve (S)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {flyingBananas.map(b => (
        <div key={b.id} className="fixed text-4xl z-[100] pointer-events-none drop-shadow-2xl" style={{ animation: `fly-${b.id} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`, top: 0, left: 0 }}>
          🍌
        </div>
      ))}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
        .safe-area-inset {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </div>
  );
};

export default QuizBoard;
