import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useRef } from "react";

export default function Scene() {
  return (
    <Canvas>
      <Sphere position={[0, 0, 0]} />
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

function Sphere(props : any) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
  })

  return(
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 16, 16]}/>
      <meshStandardMaterial wireframe />
    </mesh>
  )
}