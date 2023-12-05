import React, { useState } from 'react';

const App = () => {
  const [firstDate, setFirstDate] = useState(new Date().toISOString().slice(0, 16));
  const [secondDate, setSecondDate] = useState(new Date().toISOString().slice(0, 16));
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  
  const calculateDifference = () => {
    const diffMs = new Date(secondDate) - new Date(firstDate);
    if (diffMs < 0) {
      return 'Please choose another range...';
    }

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) return `${diffYears} years`;
    if (diffMonths > 0) return `${diffMonths} months`;
    if (diffDays > 0) return `${diffDays} days`;
    if (diffHours > 0) return `${diffHours} hours`;
    if (diffMinutes > 0) return `${diffMinutes} minutes`;
    return `${diffSeconds} seconds`;
  };

  
  const appStyles = {
    backgroundColor: bgColor,
    color: textColor,
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={appStyles}>
      <h1>Welcome to the Date difference calculator</h1>
      <p>Please choose a date range:</p>
      <div>
        <input 
          type="datetime-local" 
          value={firstDate}
          onChange={e => setFirstDate(e.target.value)} 
        />
        <input 
          type="datetime-local" 
          value={secondDate}
          onChange={e => setSecondDate(e.target.value)} 
        />
        <div>{calculateDifference()}</div>
      </div>

      <p>Please make your color combo selection:</p>
      <div>
        <input 
          type="color"
          value={bgColor}
          onChange={e => setBgColor(e.target.value)}
        />
        <input 
          type="color"
          value={textColor}
          onChange={e => setTextColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
