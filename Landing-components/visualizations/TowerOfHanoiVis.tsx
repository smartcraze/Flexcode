import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface Disk {
  size: number;
  color: string;
}

const TowerOfHanoiVis: React.FC = () => {
  const [towers, setTowers] = useState<Disk[][]>([[], [], []]);
  const [moves, setMoves] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Vibrant disk colors
  const diskColors = [
    '#ef4444', // Red
    '#3b82f6', // Blue
    '#ec4899', // Pink
    '#eab308', // Yellow
    '#8b5cf6', // Purple
  ];

  const initializeTowers = () => {
    const disks = 5;
    setTowers([
      Array.from({ length: disks }, (_, i) => ({
        size: disks - i,
        color: diskColors[i],
      })),
      [],
      [],
    ]);
    setMoves(0);
  };

  useEffect(() => {
    initializeTowers();
  }, []);

  const solveTowerOfHanoi = async (n: number, source: number, auxiliary: number, target: number) => {
    if (n === 1) {
      await moveDisk(source, target);
      return;
    }
    await solveTowerOfHanoi(n - 1, source, target, auxiliary);
    await moveDisk(source, target);
    await solveTowerOfHanoi(n - 1, auxiliary, source, target);
  };

  const moveDisk = async (from: number, to: number) => {
    setIsAnimating(true);
    // Increased animation delay to 1000ms (1 second)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setTowers(prev => {
      const newTowers = prev.map(tower => [...tower]);
      const disk = newTowers[from].pop();
      if (disk) {
        newTowers[to].push(disk);
      }
      return newTowers;
    });
    
    setMoves(prev => prev + 1);
    setIsAnimating(false);
  };

  const startAnimation = () => {
    if (!isAnimating) {
      initializeTowers();
      setTimeout(() => {
        solveTowerOfHanoi(5, 0, 1, 2);
      }, 1000);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col items-center gap-4 mb-6">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-sm font-medium disabled:opacity-50 shadow-lg"
        >
          {isAnimating ? 'Solving...' : 'Solve Tower of Hanoi'}
        </button>
        <div className="text-sm text-gray-300">
          Moves: {moves}
        </div>
      </div>
      <div className="flex justify-around items-end h-48">
        {towers.map((tower, towerIndex) => (
          <div key={towerIndex} className="relative flex flex-col items-center">
            {/* Tower rod with glow effect */}
            <div className="w-2 h-32 bg-gray-400 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            {/* Tower base with gradient */}
            <div className="w-24 h-2 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-sm shadow-lg" />
            <div className="absolute bottom-2 flex flex-col-reverse items-center">
              {tower.map((disk, diskIndex) => (
                <animated.div
                  key={diskIndex}
                  className="h-4 rounded-md shadow-lg transition-all duration-300"
                  style={{
                    width: `${disk.size * 20}px`,
                    backgroundColor: disk.color,
                    marginBottom: '2px',
                    // Add glow effect to disks
                    boxShadow: `0 0 10px ${disk.color}40`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TowerOfHanoiVis;