'use client'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useRef, useLayoutEffect, Suspense } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { Mesh, MeshBasicMaterial, type Mesh as ThreeMesh } from "three";
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

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

export function GLTFModel(props : { path: string, color?: string, position?: [number, number, number], scale?: number }) {
  const gltf = useLoader(GLTFLoader, props.path) as GLTF
  const mesh = useRef<ThreeMesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  useLayoutEffect(() => {
    const colorToUse = props.color || 'black';
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshBasicMaterial({color: colorToUse})
      }
    })
  }, [props.color, gltf])

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