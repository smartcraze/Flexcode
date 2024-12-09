import React, { useEffect, useState } from 'react';

const Visualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 15 }, () => 
      Math.floor(Math.random() * 50) + 10
    );
    setArray(newArray);
  };

  return (
    <div className="flex items-end justify-center h-48 gap-1">
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{ height: `${value * 2}px` }}
          className="w-4 bg-purple-500 rounded-t-md transition-all duration-300"
        />
      ))}
    </div>
  );
};

export default Visualizer;