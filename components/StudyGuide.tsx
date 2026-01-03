
import React, { useEffect } from 'react';
import { BookOpen, Lightbulb, CheckCircle, ArrowRight, Plus } from 'lucide-react';
import { Level } from '../types';

interface StudyGuideProps {
  level: Level;
  onStart: () => void;
}

const StudyGuide: React.FC<StudyGuideProps> = ({ level, onStart }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') onStart();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart]);

  const renderInfographic = () => {
    const { steps, visualType } = level.guide;
    if (!steps || steps.length === 0) return null;

    if (visualType === 'formula') {
      return (
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 py-2 md:py-4">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className={`flex flex-col items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl border-2 ${step.color} bg-white/5 shadow-lg animate-in zoom-in duration-500`} style={{ animationDelay: `${i * 150}ms` }}>
                <span className="text-lg md:text-xl">{step.icon}</span>
                <span className={`text-[10px] md:text-[12px] font-black uppercase tracking-widest ${step.color.replace('border-', 'text-')}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <Plus className="w-3 h-3 md:w-4 md:h-4 text-white/20 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      );
    }

    if (visualType === 'flow') {
      return (
        <div className="flex flex-col gap-2 md:gap-3 py-1 md:py-2">
          {steps.map((step, i) => (
            <div key={i} className={`flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl md:rounded-2xl glass border-l-4 ${step.color} animate-in slide-in-from-left duration-500`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg md:text-xl bg-white/5 border ${step.color}`}>
                {step.icon || (i + 1)}
              </div>
              <span className="text-sm md:text-base font-bold text-white/90">{step.label}</span>
            </div>
          ))}
        </div>
      );
    }

    if (visualType === 'comparison') {
      return (
        <div className="grid grid-cols-2 gap-2 md:gap-4 py-2 md:py-4">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col items-center text-center p-3 md:p-4 rounded-2xl md:rounded-3xl glass border-b-4 ${step.color} animate-in zoom-in duration-500`} style={{ animationDelay: `${i * 200}ms` }}>
              <span className="text-2xl md:text-3xl mb-1 md:mb-2">{step.icon}</span>
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-white/60 mb-0.5 md:mb-1">Pattern</span>
              <span className={`text-[11px] md:text-sm font-bold ${step.color.replace('border-', 'text-')}`}>{step.label}</span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-emerald-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl glass rounded-[2.5rem] md:rounded-[3rem] border-white/20 shadow-2xl overflow-hidden relative flex flex-col max-h-[95vh] md:max-h-[90vh]">
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
        
        {/* Fixed Header */}
        <div className="p-5 md:p-8 pb-3 md:pb-4 shrink-0">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 bg-emerald-500/20 rounded-xl md:rounded-2xl border border-emerald-500/30">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-[9px] md:text-[11px] font-black text-emerald-400 uppercase tracking-[0.4em]">Level {level.id}</h2>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tight leading-tight">{level.title}</h3>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto px-5 md:px-8 py-2 custom-scrollbar">
          <div className="space-y-4 md:space-y-6">
            <section className="bg-emerald-900/20 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] border border-white/5">
              <h4 className="text-white/40 text-[9px] md:text-[11px] font-black flex items-center gap-2 uppercase tracking-[0.2em] mb-3 md:mb-4">
                <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" /> Grammar Rule
              </h4>
              <p className="text-sm md:text-lg text-emerald-50/90 leading-relaxed font-bold">
                {level.guide.rule}
              </p>
              
              <div className="mt-4 md:mt-6 border-t border-white/5 pt-3 md:pt-4">
                {renderInfographic()}
              </div>
            </section>

            <section className="bg-white/5 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50" />
              <h4 className="text-white/40 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-1.5 md:mb-2">Example</h4>
              <p className="text-lg md:text-2xl text-emerald-300 italic font-black tracking-tight leading-tight">
                "{level.guide.example}"
              </p>
            </section>

            {level.guide.tip && (
              <section className="flex gap-3 md:gap-4 bg-amber-400/5 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] border border-amber-400/20 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-400/20 rounded-lg md:rounded-2xl flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-amber-400 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-0.5 md:mb-1">Explorer's Tip</h4>
                  <p className="text-amber-100/70 text-xs md:text-sm leading-snug font-medium">{level.guide.tip}</p>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="p-5 md:p-8 pt-3 md:pt-4 shrink-0 bg-emerald-950/40 backdrop-blur-sm border-t border-white/5">
          <button
            onClick={onStart}
            className="w-full py-4 md:py-5 rounded-2xl md:rounded-[2rem] bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black text-lg md:text-xl flex items-center justify-center gap-2 md:gap-3 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] active:scale-95 group"
          >
            START EXPEDITION <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="hidden md:block text-center mt-3 text-[10px] text-white/20 font-black uppercase tracking-widest">
            Press <span className="text-white/40">Enter</span> to proceed
          </p>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
};

export default StudyGuide;
