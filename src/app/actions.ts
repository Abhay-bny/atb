
'use server';

import { aiQuickActionsSuggestion } from '@/ai/flows/ai-quick-actions-suggestion';

export async function getQuickActions(activeApp: string) {
  try {
    const suggestions = await aiQuickActionsSuggestion({ activeApp });
    return suggestions;
  } catch (error) {
    console.error('Failed to get AI suggestions:', error);
    return [];
  }
}
