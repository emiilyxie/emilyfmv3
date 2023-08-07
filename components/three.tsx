import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useRef } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export default function Scene() {
  return (
    <Canvas>
      <Model scale={30} position={[0,-0.5,0]}/>
      {/* <Sphere position={[0, 0, 0]} /> */}
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

function Model(props : any) {
  // const obj = useLoader(OBJLoader, './models/witch-broom.obj')
  const gltf = useLoader(GLTFLoader, './models/witch-walking.gltf')
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  // return <primitive {...props} ref={mesh} object={obj} />
  return <primitive {...props} ref={mesh} object={gltf.scene} />
}