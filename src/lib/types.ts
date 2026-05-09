
export type AppContext = 'Safari' | 'Music' | 'Text Editor' | 'Calendar' | 'Photos' | 'Finder' | 'System Settings';

export interface TouchBarAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onPress: () => void;
}

export interface UserPreferences {
  showControlStrip: boolean;
  showFnKeys: boolean;
  brightness: number;
  volume: number;
  activeApp: AppContext;
}
