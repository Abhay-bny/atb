
'use client';

import React from 'react';
import { EscKey } from './EscKey';
import { ControlStrip } from './ControlStrip';
import { AppContextArea } from './AppContextArea';
import { AIQuickActions } from './AIQuickActions';
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
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0a] border-t border-white/10 flex flex-col items-center justify-center px-4 z-50 shadow-2xl touchbar-shadow">
      {/* Glossy Reflection overlay */}
      <div className="absolute inset-0 pointer-events-none touchbar-gradient opacity-20" />
      
      <div className="relative w-full max-w-6xl flex items-center h-10 px-2 rounded-lg bg-[#050505] shadow-inner border border-white/5">
        <EscKey />
        
        <AppContextArea app={activeApp} />
        
        <AIQuickActions app={activeApp} />
        
        <ControlStrip 
          volume={volume} 
          brightness={brightness} 
          onVolumeChange={onVolumeChange} 
          onBrightnessChange={onBrightnessChange} 
        />
      </div>
      
      {/* Label for visual context */}
      <div className="mt-1 text-[8px] uppercase tracking-widest text-white/10 font-bold select-none">
        WebTouch Bar
      </div>
    </div>
  );
}
