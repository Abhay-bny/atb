'use server';
/**
 * @fileOverview Provides AI-powered suggestions for quick actions and contextual shortcuts based on the active application.
 *
 * - aiQuickActionsSuggestion - A function that suggests relevant quick actions for a given application.
 * - AIQuickActionsSuggestionInput - The input type for the aiQuickActionsSuggestion function.
 * - AIQuickActionsSuggestionOutput - The return type for the aiQuickActionsSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIQuickActionsSuggestionInputSchema = z.object({
  activeApp: z.string().describe('The name of the currently active application (e.g., "Safari", "Music", "Text Editor").'),
});
export type AIQuickActionsSuggestionInput = z.infer<typeof AIQuickActionsSuggestionInputSchema>;

const AIQuickActionsSuggestionOutputSchema = z.array(z.string()).describe('A list of suggested quick actions for the active application.');
export type AIQuickActionsSuggestionOutput = z.infer<typeof AIQuickActionsSuggestionOutputSchema>;

export async function aiQuickActionsSuggestion(
  input: AIQuickActionsSuggestionInput
): Promise<AIQuickActionsSuggestionOutput> {
  return aiQuickActionsSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiQuickActionsSuggestionPrompt',
  input: {schema: AIQuickActionsSuggestionInputSchema},
  output: {schema: AIQuickActionsSuggestionOutputSchema},
  prompt: `You are an AI assistant that suggests quick actions and contextual shortcuts for an Apple Touch Bar.
Based on the active application provided, generate a list of 3-5 highly relevant quick actions or shortcuts that a user might want to perform efficiently within that application context.
Provide only the actions as a JSON array of strings. Do not include any other text, explanations, or formatting.

Active Application: {{{activeApp}}}

Examples:
If Active Application is "Safari": ["Summarize Page", "Bookmark Page", "New Tab", "Share Page"]
If Active Application is "Music": ["Play Next Song", "Add to Playlist", "Shuffle Album", "View Lyrics"]
If Active Application is "Text Editor": ["Spell Check", "Save Document", "Find and Replace", "Format Selection"]
If Active Application is "Calendar": ["New Event", "Today's Schedule", "View Week", "Add Reminder"]
If Active Application is "Photos": ["Edit Photo", "Share Photo", "Create Album", "Delete Photo"]
`,
});

const aiQuickActionsSuggestionFlow = ai.defineFlow(
  {
    name: 'aiQuickActionsSuggestionFlow',
    inputSchema: AIQuickActionsSuggestionInputSchema,
    outputSchema: AIQuickActionsSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
