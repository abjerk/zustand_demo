// MyFormComponent.tsx
import React, { useState } from 'react';
import { useFormStore, useThemeStore } from '../store.ts';  // Import the Zustand store

const Form: React.FC = () => {
  // Access Zustand store's state and actions
    const {name, email, setName, setEmail} = useFormStore();
    const { themeClass } = useThemeStore();

  // Local state to capture input values before submitting
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setName(inputName);   
    setEmail(inputEmail); 
  };

  return (
    <div className='form_cont'>
      <h1 className={`${themeClass}`}>Form State Management with Zustand</h1>

      {/* Display current form state from Zustand */}
      <p className={`${themeClass}`}>Stored Name: {name}</p>
      <p className={`${themeClass}`}>Stored Email: {email}</p>

      {/* Input fields and form submission */}
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label className={`${themeClass}`}>
            Name:
            <input
              type="text"
              value={inputName}
              className={`${themeClass}`}
              onChange={(e) => setInputName(e.target.value)} // Update local state with input
            />
          </label>
        </div>
        <div className='input'>
          <label className={`${themeClass}`}>
            Email:
            <input
              type="email"
              value={inputEmail}
              className={`${themeClass}`}
              onChange={(e) => setInputEmail(e.target.value)} // Update local state with input
            />
          </label>
        </div>
        <button className={`${themeClass}`} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
