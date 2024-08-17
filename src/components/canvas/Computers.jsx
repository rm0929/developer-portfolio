import React from 'react'
import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Here I am using ThreeMFLoader.js to create 3d visual Effects..
// 3d Geometry

const Computers = ( isMobile) => {
const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensisty={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2] : [0,-3.25,-1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { 
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand' 
      shadows camera={{position:[20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
       <Suspense fallback={<CanvasLoader/>}>
        {/* canvasloader shows the loading of the Computer canvas 3D element */}
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
       </Suspense>

       <Preload all/>
    </Canvas>
  )
}


export default ComputersCanvas;