'use client';

import React, { useState, useEffect } from 'react';
import { EscKey } from './EscKey';
import { ControlStrip } from './ControlStrip';
import { AppContextArea } from './AppContextArea';
import { AIQuickActions } from './AIQuickActions';
import { FunctionKeys } from './FunctionKeys';
import { AppContext } from '@/lib/types';

interface TouchBarProps {
  activeApp: AppContext;
  volume: number;
  brightness: number;
  onVolumeChange: (v: number) => void;
  onBrightnessChange: (v: number) => void;
}

export function TouchBar({ 
  activeApp, 
  volume, 
  brightness, 
  onVolumeChange, 
  onBrightnessChange 
}: TouchBarProps) {
  const [showFnKeys, setShowFnKeys] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Fn' || e.key === 'Control') {
        setShowFnKeys(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Fn' || e.key === 'Control') {
        setShowFnKeys(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-28 bg-black border-t border-white/10 flex flex-col items-center justify-center px-4 z-50 shadow-2xl touchbar-shadow">
      <div className="absolute inset-0 pointer-events-none touchbar-gradient opacity-10" />
      
      {/* The Physical Strip */}
      <div className="relative w-full max-w-6xl flex items-center h-[42px] px-1 rounded-[10px] bg-[#050505] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] border border-white/5 overflow-hidden">
        {showFnKeys ? (
          <FunctionKeys />
        ) : (
          <>
            <EscKey />
            <div className="flex-1 flex items-center overflow-hidden">
              <AppContextArea app={activeApp} />
              <AIQuickActions app={activeApp} />
            </div>
            <ControlStrip 
              volume={volume} 
              brightness={brightness} 
              onVolumeChange={onVolumeChange} 
              onBrightnessChange={onBrightnessChange} 
            />
          </>
        )}
      </div>
      
      {/* Brand & Fn Toggle Hint */}
      <div className="mt-3 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-12 bg-white/5" />
          <div className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold select-none">
            Touch Bar
          </div>
          <div className="h-[1px] w-12 bg-white/5" />
        </div>
        <button 
          onMouseDown={() => setShowFnKeys(true)}
          onMouseUp={() => setShowFnKeys(false)}
          className="text-[9px] bg-white/5 border border-white/10 px-3 py-1 rounded-md text-white/40 hover:text-white/60 active:bg-white/10 transition-all uppercase font-bold tracking-wider"
        >
          Hold Fn
        </button>
      </div>
    </div>
  );
}