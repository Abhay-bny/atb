
'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { getQuickActions } from '@/app/actions';
import { AppContext } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

interface AIQuickActionsProps {
  app: AppContext;
}

export function AIQuickActions({ app }: AIQuickActionsProps) {
  const [actions, setActions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchActions() {
      if (app === 'System') return;
      setIsLoading(true);
      const suggestions = await getQuickActions(app);
      setActions(suggestions);
      setIsLoading(false);
    }
    fetchActions();
  }, [app]);

  if (app === 'System') return null;

  return (
    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/5 overflow-x-auto no-scrollbar">
      <Sparkles size={12} className="text-accent shrink-0" />
      {isLoading ? (
        <div className="flex gap-2">
          <Skeleton className="h-8 w-24 bg-white/5" />
          <Skeleton className="h-8 w-20 bg-white/5" />
        </div>
      ) : (
        actions.map((action, i) => (
          <button 
            key={i} 
            className="touchbar-button h-8 px-3 whitespace-nowrap text-[10px] font-medium text-accent border border-accent/20 hover:border-accent/40"
          >
            {action}
          </button>
        ))
      )}
    </div>
  );
}
