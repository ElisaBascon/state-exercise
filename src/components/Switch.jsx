import React, { useState } from 'react'

const Switch = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const setLightTheme = () => {
    setCount(count + 1);
    setTheme('light');
  }

  const setDarkTheme = () => {
    setCount(count + 1);
    setTheme('dark');
  }

  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Times changed: {count}</h4>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={setDarkTheme}>Dark</button>
    </div>
  )
}

export default Switch;
