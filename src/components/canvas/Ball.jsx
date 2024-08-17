import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, Icosahedron, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  // all the properties of the rotating ball 
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      {/**to make the balls appear, we use the mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[ 2 * Math.PI, 0, 6.25]} 
        flatShading map={decal}/>
      </mesh>
    </Float>
  )
}


const BallCanvas = ({icon}) => {
  return(
    <Canvas
      frameloop='demand' 
      gl={{preserveDrawingBuffer: true}}
    >
       <Suspense fallback={<CanvasLoader/>}>
        {/* canvasloader shows the loading of the Computer canvas 3D element */}
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
       </Suspense>

       <Preload all/>
    </Canvas> 
  )
}
export default BallCanvas