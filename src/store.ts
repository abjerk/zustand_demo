import { create } from 'zustand';

// Define the types for your store state
interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// place all states and functions within a store for the defined interface
interface ThemeState {
  isDarkMode: boolean;
  themeClass: string;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: false,
  themeClass: 'light-mode',  // Default theme class
  toggleTheme: () =>
    set((state) => {
      const isDarkMode = !state.isDarkMode;
      return {
        isDarkMode,
        themeClass: isDarkMode ? 'dark-mode' : 'light-mode',
      };
    }),
}));


interface FormState {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

const useFormStore = create<FormState>((set) => ({
  name: '',
  email: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
}));

export  { useThemeStore, useFormStore };
