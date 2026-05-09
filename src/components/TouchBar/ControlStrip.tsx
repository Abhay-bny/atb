
'use client';

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Mic, 
  Lock,
  Search,
  Settings,
  Layers,
  LayoutGrid,
  Camera,
  Play,
  SkipBack,
  SkipForward
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface ControlStripProps {
  volume: number;
  brightness: number;
  onVolumeChange: (val: number) => void;
  onBrightnessChange: (val: number) => void;
}

export function ControlStrip({ volume, brightness, onVolumeChange, onBrightnessChange }: ControlStripProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Icon stroke width for that thin HIG look
  const STROKE = 1.2;

  return (
    <div className={cn(
      "flex items-center gap-1 transition-all duration-300 ml-auto pl-4 border-l border-white/5",
      isExpanded ? "flex-1 justify-end" : "w-auto"
    )}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="touchbar-button h-8 w-8 text-white/80"
      >
        {isExpanded ? <ChevronRight size={14} strokeWidth={STROKE} /> : <ChevronLeft size={14} strokeWidth={STROKE} />}
      </button>

      {isExpanded ? (
        <div className="flex items-center gap-1 animate-in slide-in-from-right-4 duration-300">
          <button className="touchbar-button h-8 w-8"><Layers size={14} strokeWidth={STROKE} /></button>
          <button className="touchbar-button h-8 w-8"><LayoutGrid size={14} strokeWidth={STROKE} /></button>
          <button className="touchbar-button h-8 w-8"><Camera size={14} strokeWidth={STROKE} /></button>
          <div className="h-4 w-px bg-white/10 mx-1" />
          <button className="touchbar-button h-8 w-8"><SkipBack size={14} strokeWidth={STROKE} /></button>
          <button className="touchbar-button h-8 w-8"><Play size={14} strokeWidth={STROKE} /></button>
          <button className="touchbar-button h-8 w-8"><SkipForward size={14} strokeWidth={STROKE} /></button>
          <div className="h-4 w-px bg-white/10 mx-1" />
          <button className="touchbar-button h-8 w-8"><Mic size={14} strokeWidth={STROKE} /></button>
          <button className="touchbar-button h-8 w-8"><Lock size={14} strokeWidth={STROKE} /></button>
          <button className="touchbar-button h-8 w-8"><Search size={14} strokeWidth={STROKE} /></button>
        </div>
      ) : null}

      <div className="flex items-center gap-1">
        <Popover>
          <PopoverTrigger asChild>
            <button className="touchbar-button h-8 w-8">
              <Sun size={14} strokeWidth={STROKE} />
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 bg-[#1a1a1a] border-white/10 mb-4 p-4 shadow-2xl backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest font-bold">
                <span>Brightness</span>
                <span>{Math.round(brightness)}%</span>
              </div>
              <Slider 
                value={[brightness]} 
                onValueChange={(val) => onBrightnessChange(val[0])} 
                max={100} 
                step={1} 
                className="cursor-pointer"
              />
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <button className="touchbar-button h-8 w-8">
              {volume === 0 ? <VolumeX size={14} strokeWidth={STROKE} /> : <Volume2 size={14} strokeWidth={STROKE} />}
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 bg-[#1a1a1a] border-white/10 mb-4 p-4 shadow-2xl backdrop-blur-xl">
             <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest font-bold">
                <span>Volume</span>
                <span>{Math.round(volume)}%</span>
              </div>
              <Slider 
                value={[volume]} 
                onValueChange={(val) => onVolumeChange(val[0])} 
                max={100} 
                step={1} 
                className="cursor-pointer"
              />
            </div>
          </PopoverContent>
        </Popover>

        <button className="touchbar-button h-8 w-8">
          <Settings size={14} strokeWidth={STROKE} />
        </button>
      </div>
    </div>
  );
}
