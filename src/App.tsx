// App.tsx
import React from 'react';
import { useThemeStore } from './store.ts';  // Adjust the path as necessary
import './App.css';
import Form from './components/Form.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';

const App: React.FC = () => {
  const { themeClass } = useThemeStore(); // pull in all the needed things

  return (
    <div className={`App ${themeClass}`}>
      <ThemeToggle />
      <Form />
    </div>
  );
}

export default App;
