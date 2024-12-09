import React, { useEffect } from 'react';
import Bar from './sorting/Bar';
import { useSort } from './sorting/useSort';

const SortingVis: React.FC = () => {
  const { array, activeIndices, sortedIndices, generateArray, bubbleSort } = useSort();

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4 gap-4">
        <button
          onClick={generateArray}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 text-sm font-medium"
        >
          Generate New Array
        </button>
        <button
          onClick={() => bubbleSort()}
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 text-sm font-medium"
        >
          Bubble Sort
        </button>
      </div>
      <div className="flex items-end justify-center h-48">
        {array.map((value, idx) => (
          <Bar
            key={idx}
            height={value}
            isActive={activeIndices.includes(idx)}
            isSorted={sortedIndices.includes(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVis;