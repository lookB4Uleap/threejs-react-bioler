import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Box } from './Box';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [3, 3, 3] }}
      className="bg-gray-900"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box position={[0, 0, 0]} />
      <OrbitControls />
      <gridHelper args={[10, 10]} />
      <axesHelper args={[5]} />
    </Canvas>
  );
}