
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
  Settings
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

  return (
    <div className={cn(
      "flex items-center gap-1 transition-all duration-300 ml-auto pl-4 border-l border-white/5",
      isExpanded ? "w-auto" : "w-auto"
    )}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="touchbar-button h-8 w-8 text-muted-foreground"
      >
        {isExpanded ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {isExpanded ? (
        <div className="flex items-center gap-2 animate-in slide-in-from-right-4 duration-300">
          <button className="touchbar-button h-8 w-8"><Moon size={14} /></button>
          <button className="touchbar-button h-8 w-8"><Mic size={14} /></button>
          <button className="touchbar-button h-8 w-8"><Lock size={14} /></button>
          <button className="touchbar-button h-8 w-8"><Search size={14} /></button>
          <div className="h-6 w-px bg-white/10 mx-1" />
        </div>
      ) : null}

      <div className="flex items-center gap-1">
        <Popover>
          <PopoverTrigger asChild>
            <button className="touchbar-button h-8 w-8">
              <Sun size={14} />
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 bg-black/90 border-white/10 mb-2 p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Brightness</span>
                <span>{Math.round(brightness)}%</span>
              </div>
              <Slider 
                value={[brightness]} 
                onValueChange={(val) => onBrightnessChange(val[0])} 
                max={100} 
                step={1} 
              />
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <button className="touchbar-button h-8 w-8">
              {volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 bg-black/90 border-white/10 mb-2 p-4">
             <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Volume</span>
                <span>{Math.round(volume)}%</span>
              </div>
              <Slider 
                value={[volume]} 
                onValueChange={(val) => onVolumeChange(val[0])} 
                max={100} 
                step={1} 
              />
            </div>
          </PopoverContent>
        </Popover>

        <button className="touchbar-button h-8 w-8">
          <Settings size={14} />
        </button>
      </div>
    </div>
  );
}
