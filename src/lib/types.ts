
export type AppContext = 'Safari' | 'Music' | 'Text Editor' | 'Calendar' | 'Photos' | 'System';

export interface TouchBarAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onPress: () => void;
}

export interface UserPreferences {
  enabledShortcuts: string[];
  controlStripExpanded: boolean;
  brightness: number;
  volume: number;
}
