'use client';

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Sun, 
  Layers,
  LayoutGrid,
  Camera,
  Play,
  SkipBack,
  SkipForward,
  Mic,
  Lock,
  Search
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
  const [isSiriActive, setIsSiriActive] = useState(false);

  const STROKE = 1.2;

  const handleSiriClick = () => {
    setIsSiriActive(true);
    setTimeout(() => setIsSiriActive(false), 3000);
  };

  return (
    <div className={cn(
      "flex items-center gap-1 transition-all duration-300 ml-auto pl-2 border-l border-white/10",
      isExpanded ? "flex-1 justify-end" : "w-auto"
    )}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="touchbar-button h-8 w-6 text-white/70"
      >
        {isExpanded ? <ChevronRight size={14} strokeWidth={STROKE} /> : <ChevronLeft size={14} strokeWidth={STROKE} />}
      </button>

      {isExpanded ? (
        <div className="flex items-center gap-1 animate-in slide-in-from-right-4 duration-300 mr-2">
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
            <button className="touchbar-button h-8 w-9">
              <Sun size={15} strokeWidth={STROKE} />
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 bg-[#1a1a1a] border-white/10 mb-6 p-4 shadow-2xl backdrop-blur-xl rounded-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest font-bold">
                <span>Brightness</span>
                <span className="text-white/80">{Math.round(brightness)}%</span>
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
            <button className="touchbar-button h-8 w-9">
              {volume === 0 ? <VolumeX size={15} strokeWidth={STROKE} /> : <Volume2 size={15} strokeWidth={STROKE} />}
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 bg-[#1a1a1a] border-white/10 mb-6 p-4 shadow-2xl backdrop-blur-xl rounded-2xl">
             <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest font-bold">
                <span>Volume</span>
                <span className="text-white/80">{Math.round(volume)}%</span>
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

        {/* Siri Button */}
        <button 
          onClick={handleSiriClick}
          className={cn(
            "touchbar-button h-8 w-12 transition-all duration-300",
            isSiriActive && "bg-white/15"
          )}
        >
          <div className={cn(
            "relative transition-all duration-500",
            isSiriActive ? "scale-110 text-primary" : "text-white/80"
          )}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="currentColor"/>
            </svg>
            {isSiriActive && (
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}