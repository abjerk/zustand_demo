// App.tsx
import React from 'react';
import { useFormStore, useThemeStore } from './store.ts';  // Adjust the path as necessary
import './App.css';
import Form from './components/Form.tsx';

const App: React.FC = () => {
  const { isDarkMode, themeClass, toggleTheme } = useThemeStore(); // pull in all the needed things
  const { name, email, setName, setEmail } = useFormStore();


  if (name && email) {
    console.log(name, ' ', email)
  }

  return (
    <div className={`App ${themeClass}`}>
      <div className='theme_section'>
        <h1>Theme State with Zustand</h1>
        <h3 className={`${themeClass}`}>State: isDarkMode = {isDarkMode ? "true" : "false"}</h3>
        <button onClick={toggleTheme} className={`${themeClass}`}>
          {isDarkMode ? 'too dark!' : 'ah! too bright!'}
        </button>
      </div>
      <Form></Form>
    </div>
  );
}

export default App;
