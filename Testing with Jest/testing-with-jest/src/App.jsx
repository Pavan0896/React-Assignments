// App.js

import React, { useState } from 'react';
import Button from './Button';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <p>Clicked {clickCount} times</p>
      <Button onClick={handleButtonClick}>Click me</Button>
    </div>
  );
}

export default App;
