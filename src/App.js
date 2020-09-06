import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei'
import { useSpring, a } from 'react-spring/three'


import './App.scss';

// Adds soft shadow capability to the scene
softShadows()

// Resubale 3D mesh component
const SpinningMesh = ({ position, args, color, speed }) => {

  // ref to target the mesh
  const mesh = useRef(null)

  // useFrame reruns/re-renders rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  // Expand boolean tracking scaling objects when clicked
  const [expand, setExpand] = useState(false)

  // React Spring expand(scale) animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    <a.mesh
      onClick={() => setExpand(!expand)} 
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry 
        attach='geometry' 
        args={args} 
      />
      <MeshWobbleMaterial 
        attach='material'
        color={color}
        speed={speed}
        factor={0.6} 
      />
    </a.mesh>
  )
}


function App() {

  return (
    <>
      {/* Camera and scene inbuilt to canvas */}
      <Canvas shadowMap colorManagement camera={{position: [-5, 2, 10], fov: 60 }}>
        {/* Ambient light */}
        <ambientLight intensity={0.3} />
        {/* Main source of light, responsible for casting shadows below */}
        <directionalLight 
          castShadow
          position={[0, 10, 0]} 
          intensity={1.5} 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Point/Key light illuminating the spinning mesh objects */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        
        <group>
          {/* The floor (plane) mesh object */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} >
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>

          <SpinningMesh args={[3, 2, 1]} position={[0, 1, 0]} color="lightblue" speed={2} />
          <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />
          <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
        </group>
        
        {/* Allows movement of scene (rotation, zoom in, zoom out) */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
