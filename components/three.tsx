import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas>
      <Box position={[1.2, 0, 0]} />
      <pointLight position={[0, 1, 2]} intensity={20}></pointLight>
      <OrbitControls />
    </Canvas>
    );
  }

function Box(props : any){
  return(
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}