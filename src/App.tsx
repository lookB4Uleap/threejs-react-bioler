import React from 'react';
import { Scene } from './components/Scene';

function App() {
  return (
    <div className="w-full h-screen">
      <Scene />
      <div className="absolute top-0 left-0 p-4 text-white">
        <h1 className="text-2xl font-bold mb-2">React Three.js Boilerplate</h1>
        <p className="text-sm opacity-75">Click the cube to scale it</p>
        <p className="text-sm opacity-75">Drag to rotate the camera</p>
        <p className="text-sm opacity-75">Scroll to zoom in/out</p>
      </div>
    </div>
  );
}

export default App;