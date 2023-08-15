'use client'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useRef, useLayoutEffect, Suspense } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { Mesh, MeshBasicMaterial } from "three";

export function Scene(props : any) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {props.children}
        {/* <GLTFModel path={props.path} color={"black"} position={[0,0,0]} scale={2}/> */}
        {/* <Photo path={props.path} position={[0,0,0]}/> */}
        {/* <Sphere position={[0,0,0]} scale={0.5}/> */}
      </Suspense>
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
      mesh.current.rotation.y += 0.01
    }
  })

  return(
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 16, 16]}/>
      <meshStandardMaterial wireframe/>
    </mesh>
  )
}

export function GLTFModel(props : any) {
  const gltf = useLoader(GLTFLoader, props.path)
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  useLayoutEffect(() => {
    gltf.scene.traverse((child : any) => {
      if (child instanceof Mesh) {
        child.material = new MeshBasicMaterial({color: props.color || 0x000000})
      }
    })
  }, [])

  return <primitive {...props} ref={mesh} object={gltf.scene} />
}

export function OBJModel(props : any) {
  const obj = useLoader(OBJLoader, props.path)
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return <primitive {...props} ref={mesh} object={obj} />
}

export function Photo(props : any) {
  const colorMap = useLoader(TextureLoader, props.path)
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh {...props} rotation={[1,0,0]} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )

}