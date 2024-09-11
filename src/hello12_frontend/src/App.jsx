import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Click Counter</h1>
      </header>

      <section className="counter-section">
        <div className="counter-container">
          <button onClick={handleClick} className="click-button">
            Click Me
          </button>
          <p className="count-display">Count: {count}</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Click Counter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
