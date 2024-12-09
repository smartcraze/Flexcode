import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface BarProps {
  height: number;
  isActive: boolean;
  isSorted: boolean;
}

const Bar: React.FC<BarProps> = ({ height, isActive, isSorted }) => {
  const props = useSpring({
    height: `${height * 2}px`,
    backgroundColor: isActive 
      ? '#ff6b6b' 
      : isSorted 
        ? '#51cf66' 
        : '#845ef7',
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={{
        ...props,
        width: '20px',
        margin: '0 2px',
        borderRadius: '4px 4px 0 0',
      }}
    />
  );
};

export default Bar;