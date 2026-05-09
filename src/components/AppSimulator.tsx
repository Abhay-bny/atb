'use client';

import React from 'react';
import { AppContext } from '@/lib/types';
import { 
  Compass, 
  Music, 
  FileText, 
  Calendar, 
  Image as ImageIcon, 
  Monitor, 
  Play, 
  Settings,
  ShieldCheck,
  Keyboard,
  MousePointer2,
  Folder
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AppSimulatorProps {
  activeApp: AppContext;
  onAppSwitch: (app: AppContext) => void;
}

export function AppSimulator({ activeApp, onAppSwitch }: AppSimulatorProps) {
  const apps: { id: AppContext; icon: any; color: string }[] = [
    { id: 'Finder', icon: Monitor, color: 'bg-gradient-to-b from-blue-300 to-blue-500' },
    { id: 'Safari', icon: Compass, color: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { id: 'Music', icon: Music, color: 'bg-gradient-to-b from-pink-400 to-red-600' },
    { id: 'Text Editor', icon: FileText, color: 'bg-gradient-to-b from-orange-300 to-orange-500' },
    { id: 'Calendar', icon: Calendar, color: 'bg-gradient-to-b from-red-400 to-red-600' },
    { id: 'Photos', icon: ImageIcon, color: 'bg-gradient-to-b from-purple-400 to-indigo-600' },
    { id: 'System Settings', icon: Settings, color: 'bg-gradient-to-b from-gray-300 to-gray-500' },
  ];

  return (
    <div className="flex-1 flex flex-col p-12 pb-32 overflow-hidden relative">
      {/* Dynamic Background Wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] opacity-40 -z-10" />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      
      <div className="flex-1 flex flex-col rounded-2xl macos-window-shadow bg-[#1e1e1e]/95 backdrop-blur-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        <div className="h-10 flex items-center px-4 bg-[#2a2a2a] border-b border-black/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10" />
          </div>
          <div className="flex-1 text-center text-[13px] font-medium text-white/60 tracking-tight">
            {activeApp}
          </div>
        </div>
        
        <div className="flex-1 relative flex items-center justify-center overflow-auto bg-[#1e1e1e]">
          {activeApp === 'Safari' && (
            <div className="p-8 w-full max-w-2xl text-center space-y-6">
              <h1 className="text-6xl font-bold tracking-tight text-white/90">Good Morning.</h1>
              <div className="bg-white/5 border border-white/10 rounded-full h-12 flex items-center px-4 gap-4 max-w-md mx-auto shadow-inner">
                <Compass size={18} className="text-white/40" />
                <span className="text-sm text-white/30">Search or enter website name</span>
              </div>
            </div>
          )}

          {activeApp === 'Music' && (
            <div className="w-full flex h-full">
              <div className="w-56 bg-black/10 border-r border-white/5 p-6 space-y-6">
                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest px-2">Library</div>
                  <div className="space-y-1">
                    <div className="text-sm bg-white/5 px-2 py-1.5 rounded-md text-primary font-medium">Listen Now</div>
                    <div className="text-sm px-2 py-1.5 text-white/60 hover:text-white transition-colors">Radio</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-10 flex flex-col items-center justify-center text-center space-y-6">
                 <div className="w-72 h-72 rounded-xl shadow-2xl flex items-center justify-center relative group overflow-hidden">
                    <Image 
                      src="https://picsum.photos/seed/album/600/600" 
                      alt="Album Art" 
                      fill 
                      className="object-cover"
                      data-ai-hint="album cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Play size={64} fill="white" stroke="none" />
                    </div>
                 </div>
                 <div className="space-y-1">
                   <h2 className="text-3xl font-bold">Starboy</h2>
                   <p className="text-xl text-white/40">The Weeknd</p>
                 </div>
              </div>
            </div>
          )}

          {activeApp === 'Finder' && (
            <div className="w-full h-full p-8 grid grid-cols-4 gap-8 content-start">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                   <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-all transform group-active:scale-95">
                     <Folder size={48} fill="currentColor" fillOpacity={0.2} />
                   </div>
                   <span className="text-[13px] text-white/70 group-hover:text-white">Documents {i}</span>
                 </div>
               ))}
            </div>
          )}

          {activeApp === 'Text Editor' && (
            <div className="p-12 w-full h-full flex flex-col">
              <div className="flex-1 bg-black/20 rounded-xl p-10 font-serif text-xl leading-relaxed text-white/80 outline-none border border-white/5 selection:bg-primary/30">
                It was the best of times, it was the worst of times...
                <div className="mt-4 animate-pulse h-8 w-[2px] bg-primary inline-block align-middle" />
              </div>
            </div>
          )}

          {activeApp === 'System Settings' && (
            <div className="w-full h-full flex">
              <div className="w-64 bg-black/10 border-r border-white/5 p-4 space-y-1">
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest p-2 mb-2">Settings</div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-primary text-white">
                  <Keyboard size={18} /> <span className="text-sm font-medium">Keyboard</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-white/60 hover:bg-white/5">
                  <MousePointer2 size={18} /> <span className="text-sm font-medium">Trackpad</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-white/60 hover:bg-white/5">
                  <ShieldCheck size={18} /> <span className="text-sm font-medium">Touch ID</span>
                </div>
              </div>
              <div className="flex-1 p-10 overflow-auto">
                <h2 className="text-3xl font-bold mb-8">Keyboard Settings</h2>
                <div className="space-y-8 max-w-lg">
                   <div className="space-y-4">
                      <div className="text-sm font-bold text-white/40 uppercase tracking-wider">Touch Bar</div>
                      <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 shadow-sm">
                        <div>
                          <div className="text-[15px] font-medium">Touch Bar shows</div>
                          <div className="text-[13px] text-white/40">App Controls & Control Strip</div>
                        </div>
                        <Settings size={18} className="text-white/40" />
                      </div>
                   </div>
                   
                   <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl space-y-6">
                      <div className="text-[13px] font-bold uppercase tracking-widest text-primary">Advanced Customization</div>
                      <p className="text-[15px] leading-relaxed text-white/60">Customize the Control Strip by dragging your favorite actions directly to the bar from your screen.</p>
                      <button className="text-sm font-semibold px-6 py-2.5 bg-primary text-white rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Customize Control Strip...</button>
                   </div>
                </div>
              </div>
            </div>
          )}

          {(activeApp === 'Calendar' || activeApp === 'Photos') && (
            <div className="text-white/5 flex flex-col items-center">
              <ImageIcon size={160} strokeWidth={0.5} />
              <p className="mt-6 text-sm uppercase tracking-[0.4em] font-semibold opacity-30">{activeApp}</p>
            </div>
          )}
        </div>
      </div>

      {/* macOS Dock */}
      <div className="mt-auto self-center bg-white/10 backdrop-blur-3xl px-3 py-3 rounded-[24px] flex items-center gap-2 border border-white/10 shadow-2xl mb-4">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onAppSwitch(app.id)}
            className={cn(
              "w-[52px] h-[52px] rounded-[14px] flex items-center justify-center transition-all duration-300 relative group",
              app.color,
              activeApp === app.id ? "scale-115 shadow-xl -translate-y-1" : "hover:scale-110 hover:-translate-y-2"
            )}
          >
            <app.icon size={28} className="text-white" />
            <div className={cn(
              "absolute -bottom-2 w-1 h-1 rounded-full bg-white transition-opacity duration-300",
              activeApp === app.id ? "opacity-100" : "opacity-0"
            )} />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[11px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap backdrop-blur-xl border border-white/10">
              {app.id}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}