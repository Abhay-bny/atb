
'use client';

import React, { useState } from 'react';
import { TouchBar } from '@/components/TouchBar/TouchBar';
import { AppSimulator } from '@/components/AppSimulator';
import { AppContext } from '@/lib/types';
import { Toaster } from '@/components/ui/toaster';

export default function WebTouchBar() {
  const [activeApp, setActiveApp] = useState<AppContext>('Safari');
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(85);

  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      {/* Simulation UI Area */}
      <AppSimulator 
        activeApp={activeApp} 
        onAppSwitch={setActiveApp} 
      />

      {/* The Actual Touch Bar Component */}
      <TouchBar 
        activeApp={activeApp}
        volume={volume}
        brightness={brightness}
        onVolumeChange={setVolume}
        onBrightnessChange={setBrightness}
      />

      {/* Customization Tool Tip for UI instructions */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-none">
        <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-md animate-in slide-in-from-right-10 duration-1000">
           <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Interactive Experience</p>
           <h3 className="text-sm font-semibold text-white/90">Welcome to WebTouch Bar</h3>
           <p className="text-xs text-white/50 mt-1 max-w-[200px]">
             Switch apps in the dock to see the Touch Bar adapt. Use the sliders on the right for system controls.
           </p>
        </div>
      </div>

      <Toaster />
    </main>
  );
}
