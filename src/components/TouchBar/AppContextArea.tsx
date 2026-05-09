
'use client';

import React from 'react';
import { 
  Globe, 
  RotateCcw, 
  Plus, 
  Share, 
  Bookmark, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward,
  Type,
  Bold,
  Italic,
  List,
  CalendarDays,
  Image as ImageIcon,
  Heart,
  Trash2,
  Edit3,
  Folder,
  Layout,
  ArrowUpDown,
  Search
} from 'lucide-react';
import { AppContext } from '@/lib/types';
import { cn } from '@/lib/utils';

interface AppContextAreaProps {
  app: AppContext;
}

export function AppContextArea({ app }: AppContextAreaProps) {
  const STROKE = 1.2;

  const renderControls = () => {
    switch (app) {
      case 'Safari':
        return (
          <div className="flex items-center gap-1">
            <button className="touchbar-button h-8 px-3 gap-2 text-[11px] font-medium"><Globe size={12} strokeWidth={STROKE} /> <span className="opacity-70">apple.com</span></button>
            <button className="touchbar-button h-8 w-8"><RotateCcw size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><Plus size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><Share size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><Bookmark size={14} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Music':
        return (
          <div className="flex items-center gap-1">
            <button className="touchbar-button h-8 w-10"><SkipBack size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-14 touchbar-button-active"><Pause size={16} strokeWidth={STROKE} fill="currentColor" /></button>
            <button className="touchbar-button h-8 w-10"><SkipForward size={14} strokeWidth={STROKE} /></button>
            <div className="h-6 w-px bg-white/10 mx-2" />
            <div className="flex flex-col items-center justify-center min-w-[120px] px-2">
              <span className="text-[10px] font-semibold tracking-tight text-white/90">Starboy</span>
              <span className="text-[8px] text-white/50">The Weeknd</span>
            </div>
          </div>
        );
      case 'Text Editor':
        return (
          <div className="flex items-center gap-1">
            <button className="touchbar-button h-8 px-3 gap-2 text-[11px] font-medium"><Type size={14} strokeWidth={STROKE} /> Normal</button>
            <button className="touchbar-button h-8 w-8"><Bold size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><Italic size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><List size={14} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Calendar':
        return (
          <div className="flex items-center gap-1">
            <button className="touchbar-button h-8 px-4 text-[11px] font-medium">Today</button>
            <button className="touchbar-button h-8 px-3 text-[11px] font-medium">Day</button>
            <button className="touchbar-button h-8 px-3 text-[11px] font-medium touchbar-button-active">Week</button>
            <button className="touchbar-button h-8 px-3 text-[11px] font-medium">Month</button>
            <button className="touchbar-button h-8 w-8"><CalendarDays size={14} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Photos':
        return (
          <div className="flex items-center gap-1">
             <button className="touchbar-button h-8 w-8"><Heart size={14} strokeWidth={STROKE} /></button>
             <button className="touchbar-button h-8 w-8"><Edit3 size={14} strokeWidth={STROKE} /></button>
             <button className="touchbar-button h-8 px-4 gap-2 text-[11px] font-medium"><ImageIcon size={12} strokeWidth={STROKE} /> Auto-Enhance</button>
             <button className="touchbar-button h-8 w-8 text-destructive"><Trash2 size={14} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Finder':
        return (
          <div className="flex items-center gap-1">
            <button className="touchbar-button h-8 w-8"><Layout size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><ArrowUpDown size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 px-3 gap-2 text-[11px] font-medium"><Folder size={12} strokeWidth={STROKE} /> New Folder</button>
            <button className="touchbar-button h-8 w-8"><Search size={14} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-8"><Share size={14} strokeWidth={STROKE} /></button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center overflow-x-auto no-scrollbar mx-2">
      {renderControls()}
    </div>
  );
}
