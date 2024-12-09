import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

interface NodeProps {
  position: [number, number, number];
  value: number;
}

const Node: React.FC<NodeProps> = ({ position, value }) => {
  const spring = useSpring({
    scale: [1, 1, 1],
    position,
    from: { scale: [0, 0, 0], position: [position[0], position[1] - 2, position[2]] },
  });

  return (
    <a.mesh position={spring.position} scale={spring.scale}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="purple" />
    </a.mesh>
  );
};

const Edge: React.FC<{ start: [number, number, number]; end: [number, number, number] }> = ({ start, end }) => {
  const spring = useSpring({
    scale: 1,
    from: { scale: 0 },
  });

  return (
    <a.line scale={spring.scale}>
      <bufferGeometry attach="geometry">
        <float32BufferAttribute attach="attributes-position" args={[new Float32Array([...start, ...end]), 3]} />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="white" linewidth={2} />
    </a.line>
  );
};

const BinaryTreeVis: React.FC = () => {
  const tree: TreeNode = useMemo(() => ({
    value: 10,
    left: {
      value: 5,
      left: { value: 3 },
      right: { value: 7 }
    },
    right: {
      value: 15,
      left: { value: 12 },
      right: { value: 18 }
    }
  }), []);

  const renderTree = (node: TreeNode, x: number, y: number, z: number, level: number = 0) => {
    const elements: JSX.Element[] = [];
    const spacing = 2 / (level + 1);
    
    elements.push(<Node key={`node-${x}-${y}`} position={[x, y, z]} value={node.value} />);

    if (node.left) {
      const childX = x - spacing;
      const childY = y - 1;
      elements.push(
        <Edge key={`edge-left-${x}-${y}`} start={[x, y, z]} end={[childX, childY, z]} />
      );
      elements.push(...renderTree(node.left, childX, childY, z, level + 1));
    }

    if (node.right) {
      const childX = x + spacing;
      const childY = y - 1;
      elements.push(
        <Edge key={`edge-right-${x}-${y}`} start={[x, y, z]} end={[childX, childY, z]} />
      );
      elements.push(...renderTree(node.right, childX, childY, z, level + 1));
    }

    return elements;
  };

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group position={[0, 2, 0]}>
          {renderTree(tree, 0, 0, 0)}
        </group>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default BinaryTreeVis;