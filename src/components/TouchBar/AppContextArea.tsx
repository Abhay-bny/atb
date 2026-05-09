'use client';

import React from 'react';
import { 
  Globe, 
  RotateCcw, 
  Plus, 
  Share, 
  Bookmark, 
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
import { EmojiPicker } from './EmojiPicker';
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
          <div className="flex items-center gap-1 px-2">
            <button className="touchbar-button h-8 px-4 gap-2 text-[12px] font-medium"><Globe size={13} strokeWidth={STROKE} /> <span className="opacity-60">apple.com</span></button>
            <button className="touchbar-button h-8 w-9"><RotateCcw size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><Plus size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><Share size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><Bookmark size={15} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Music':
        return (
          <div className="flex items-center gap-1 px-2">
            <button className="touchbar-button h-8 w-11"><SkipBack size={16} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-14 touchbar-button-active"><Pause size={18} strokeWidth={STROKE} fill="currentColor" /></button>
            <button className="touchbar-button h-8 w-11"><SkipForward size={16} strokeWidth={STROKE} /></button>
            <div className="h-6 w-[1px] bg-white/10 mx-3" />
            <div className="flex flex-col items-center justify-center min-w-[140px] px-3">
              <span className="text-[11px] font-bold tracking-tight text-white/90">Starboy</span>
              <span className="text-[9px] text-white/50 tracking-wide">The Weeknd</span>
            </div>
          </div>
        );
      case 'Text Editor':
        return (
          <div className="flex items-center gap-1 px-2">
            <button className="touchbar-button h-8 px-4 gap-2 text-[12px] font-medium"><Type size={15} strokeWidth={STROKE} /> Body</button>
            <button className="touchbar-button h-8 w-9"><Bold size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><Italic size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><List size={15} strokeWidth={STROKE} /></button>
            <div className="h-6 w-[1px] bg-white/10 mx-2" />
            <EmojiPicker />
          </div>
        );
      case 'Calendar':
        return (
          <div className="flex items-center gap-1 px-2">
            <button className="touchbar-button h-8 px-5 text-[12px] font-medium">Today</button>
            <div className="flex items-center bg-white/5 rounded-md p-0.5 ml-2">
              <button className="touchbar-button h-7 px-4 text-[11px] font-medium bg-transparent">Day</button>
              <button className="touchbar-button h-7 px-4 text-[11px] font-medium touchbar-button-active">Week</button>
              <button className="touchbar-button h-7 px-4 text-[11px] font-medium bg-transparent">Month</button>
            </div>
            <button className="touchbar-button h-8 w-9 ml-2"><CalendarDays size={15} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Photos':
        return (
          <div className="flex items-center gap-1 px-2">
             <button className="touchbar-button h-8 w-9"><Heart size={15} strokeWidth={STROKE} /></button>
             <button className="touchbar-button h-8 w-9"><Edit3 size={15} strokeWidth={STROKE} /></button>
             <button className="touchbar-button h-8 px-5 gap-2 text-[12px] font-medium"><ImageIcon size={14} strokeWidth={STROKE} /> Enhance</button>
             <button className="touchbar-button h-8 w-9 text-red-500/80"><Trash2 size={15} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'Finder':
        return (
          <div className="flex items-center gap-1 px-2">
            <button className="touchbar-button h-8 w-9"><Layout size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><ArrowUpDown size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 px-4 gap-2 text-[12px] font-medium"><Folder size={14} strokeWidth={STROKE} /> New Folder</button>
            <button className="touchbar-button h-8 w-9"><Search size={15} strokeWidth={STROKE} /></button>
            <button className="touchbar-button h-8 w-9"><Share size={15} strokeWidth={STROKE} /></button>
          </div>
        );
      case 'System Settings':
        return (
          <div className="flex items-center gap-2 px-4">
            <button className="touchbar-button h-8 px-5 text-[12px] font-medium border border-white/10">Default Layout</button>
            <button className="touchbar-button h-8 px-5 text-[12px] font-medium text-primary">Done</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center overflow-x-auto no-scrollbar">
      {renderControls()}
    </div>
  );
}