
'use client';

import React from 'react';

export function EmojiPicker() {
  const emojis = ['😊', '😂', '😍', '✨', '🔥', '🚀', '👍', '🎉', '❤️', '🤔', '😎', '🙌', '💻', '🍕', '🌈'];

  return (
    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[200px] border-l border-white/5 ml-2 pl-2">
      {emojis.map((emoji, i) => (
        <button
          key={i}
          className="touchbar-button h-8 w-8 text-sm"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}
