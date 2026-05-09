
'use client';

import React from 'react';

export function FunctionKeys() {
  const fKeys = Array.from({ length: 12 }, (_, i) => `F${i + 1}`);

  return (
    <div className="flex-1 flex items-center justify-between px-2 gap-1 overflow-x-auto no-scrollbar">
      {fKeys.map((key) => (
        <button
          key={key}
          className="touchbar-button flex-1 h-8 text-[11px] font-medium text-white/90 min-w-[40px]"
        >
          {key}
        </button>
      ))}
    </div>
  );
}
