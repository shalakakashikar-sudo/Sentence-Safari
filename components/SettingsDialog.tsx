
import React from 'react';
import { X, Trash2, Volume2, Moon } from 'lucide-react';

interface SettingsDialogProps {
  onClose: () => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ onClose }) => {
  const handleResetProgress = () => {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone!")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
      <div className="w-full max-w-md glass rounded-[40px] border-white/20 shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="flex items-center justify-between p-8 pb-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-xl">
              <Moon className="w-6 h-6 text-emerald-400" />
            </div>
            Jungle Settings
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white/60" />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-white">Safari Sounds</span>
              </div>
              <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleResetProgress}
              className="w-full py-4 rounded-2xl bg-red-500/10 hover:bg-red-500/20 border-2 border-red-500/20 text-red-400 font-black flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Trash2 className="w-5 h-5" />
              RESET ALL PROGRESS
            </button>
          </div>
        </div>

        <div className="p-8 pt-0 text-center">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
            Sentence Safari © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialog;
