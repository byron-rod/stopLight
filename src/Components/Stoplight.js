import React, { useState } from 'react';
import './styles.css';

const Stoplight = () => {
  const [color, setColor] = useState();

  const handleClick = (clickedColor) => {
    setColor(clickedColor);
  };

  let redLight = 'light red';
  let yellowLight = 'light yellow';
  let greenLight = 'light green';

  if (color === 'red') {
    redLight += ' active';
  } else if (color === 'yellow') {
    yellowLight += ' active';
  } else if (color === 'green') {
    greenLight += ' active';
  }

  return (
    <div className="stoplight-container">
      <div className="stoplight-rectangle">
        <div className={redLight} onClick={() => handleClick('red')}></div>
        <div className={yellowLight} onClick={() => handleClick('yellow')}></div>
        <div className={greenLight} onClick={() => handleClick('green')}></div>
      </div>
    </div>
  );
};

export default Stoplight;
