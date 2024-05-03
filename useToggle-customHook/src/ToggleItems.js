import { useState } from 'react';

const useToggleItems = (initialValue, initialPosition = 0)=> {
  const [currentIndex, setCurrentIndex] = useState(initialPosition);
  const totalItems = initialValue.length;

  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  return [initialValue[currentIndex], toggleState];
}

export default useToggleItems;
