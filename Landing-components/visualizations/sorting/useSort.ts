import { useState } from 'react';

export const useSort = () => {
  const [array, setArray] = useState<number[]>([]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => 
      Math.floor(Math.random() * 50) + 10
    );
    setArray(newArray);
    setActiveIndices([]);
    setSortedIndices([]);
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        await sleep(100);
        
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
      setSortedIndices(prev => [...prev, n - i - 1]);
    }
    setSortedIndices([...Array(n).keys()]);
    setActiveIndices([]);
  };

  return {
    array,
    activeIndices,
    sortedIndices,
    generateArray,
    bubbleSort
  };
};