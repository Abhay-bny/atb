
'use client';

import React from 'react';
import { AppContext } from '@/lib/types';
import { Compass, Music, FileText, Calendar, Image as ImageIcon, LayoutGrid, X, Minus, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AppSimulatorProps {
  activeApp: AppContext;
  onAppSwitch: (app: AppContext) => void;
}

export function AppSimulator({ activeApp, onAppSwitch }: AppSimulatorProps) {
  const apps: { id: AppContext; icon: any; color: string }[] = [
    { id: 'Safari', icon: Compass, color: 'bg-blue-500' },
    { id: 'Music', icon: Music, color: 'bg-pink-500' },
    { id: 'Text Editor', icon: FileText, color: 'bg-orange-400' },
    { id: 'Calendar', icon: Calendar, color: 'bg-red-500' },
    { id: 'Photos', icon: ImageIcon, color: 'bg-purple-500' },
  ];

  return (
    <div className="flex-1 flex flex-col p-8 pb-24 overflow-hidden relative">
      {/* Desktop Background simulated by color gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#14181F] to-black -z-10" />
      
      {/* Main Window */}
      <div className="flex-1 flex flex-col rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        <div className="h-10 flex items-center px-4 bg-white/5 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center text-xs font-medium text-white/40">
            {activeApp}
          </div>
        </div>
        
        <div className="flex-1 relative flex items-center justify-center">
          {activeApp === 'Safari' && (
            <div className="p-8 w-full max-w-2xl text-center space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-white/90">Good Morning.</h1>
              <div className="bg-white/10 rounded-full h-12 flex items-center px-4 gap-4 max-w-md mx-auto">
                <Compass size={18} className="text-white/40" />
                <span className="text-sm text-white/30">Search or enter website name</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-8">
                {[1,2,3,4].map(i => (
                   <div key={i} className="flex flex-col items-center gap-2">
                     <div className="w-14 h-14 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center border border-white/5">
                       <LayoutGrid size={24} className="text-white/60" />
                     </div>
                     <span className="text-[10px] text-white/40">Favorites</span>
                   </div>
                ))}
              </div>
            </div>
          )}

          {activeApp === 'Music' && (
            <div className="w-full flex h-full">
              <div className="w-64 bg-black/20 border-r border-white/5 p-6 space-y-6">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Library</div>
                  <div className="text-sm text-primary font-medium">Listen Now</div>
                  <div className="text-sm text-white/60">Radio</div>
                  <div className="text-sm text-white/60">Recently Added</div>
                </div>
              </div>
              <div className="flex-1 p-10 flex flex-col items-center justify-center text-center space-y-4">
                 <div className="w-64 h-64 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-lg shadow-2xl flex items-center justify-center relative group overflow-hidden">
                    <Image 
                      src="https://picsum.photos/seed/album/600/600" 
                      alt="Album Art" 
                      fill 
                      className="object-cover opacity-80"
                      data-ai-hint="album cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Play size={48} fill="white" stroke="none" />
                    </div>
                 </div>
                 <div className="space-y-1">
                   <h2 className="text-2xl font-bold">Starboy</h2>
                   <p className="text-white/50">The Weeknd • Starboy</p>
                 </div>
              </div>
            </div>
          )}

          {activeApp === 'Text Editor' && (
            <div className="p-12 w-full h-full flex flex-col">
              <div className="flex-1 bg-white/5 rounded-lg p-8 font-serif text-lg leading-relaxed text-white/80 outline-none border border-white/5">
                Start typing your next masterpiece...
                <div className="mt-4 animate-pulse h-6 w-1 bg-primary/80 inline-block" />
              </div>
            </div>
          )}

          {(activeApp === 'Calendar' || activeApp === 'Photos') && (
            <div className="text-white/20 flex flex-col items-center">
              <LayoutGrid size={120} strokeWidth={0.5} />
              <p className="mt-4 text-sm uppercase tracking-[0.2em]">{activeApp} View</p>
            </div>
          )}
        </div>
      </div>

      {/* Virtual Dock */}
      <div className="mt-auto self-center bg-white/10 backdrop-blur-3xl px-2 py-2 rounded-2xl flex items-center gap-2 border border-white/10 shadow-xl">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onAppSwitch(app.id)}
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative group",
              app.color,
              activeApp === app.id ? "scale-110 shadow-lg" : "hover:scale-105 opacity-80 hover:opacity-100"
            )}
          >
            <app.icon size={24} className="text-white" />
            <div className={cn(
              "absolute -bottom-1.5 w-1 h-1 rounded-full bg-white transition-opacity",
              activeApp === app.id ? "opacity-100" : "opacity-0"
            )} />
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {app.id}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
