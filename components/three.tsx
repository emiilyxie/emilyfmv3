'use client'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useRef, useLayoutEffect, Suspense } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { Mesh, MeshBasicMaterial } from "three";
import * as THREE from 'three'
import React from 'react'
import { useCounter } from '@/lib/counter-context'

export function Scene(props : any) {
  const { incrementCount } = useCounter()

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        {React.cloneElement(props.children, { onCatClick: incrementCount })}
      </Suspense>
      {/* <OrbitControls /> */}
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
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  useLayoutEffect(() => {
    const model = Array.isArray(gltf) ? gltf[0] : gltf
    if (model && 'scene' in model) {
      model.scene.traverse((child : any) => {
        if (child instanceof Mesh) {
          child.material = new MeshBasicMaterial({color: props.color || 0x000000})
        }
      })
    }
  }, [])

  const handleClick = (event: any) => {
    event.stopPropagation()
    console.log('Cat clicked!')
    props.onCatClick?.()
  }

  return (
    <group 
      ref={group}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation()
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        document.body.style.cursor = 'auto'
      }}
    >
      <primitive {...props} ref={mesh} object={Array.isArray(gltf) ? gltf[0].scene : gltf.scene} />
    </group>
  )
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
      <meshBasicMaterial map={Array.isArray(colorMap) ? colorMap[0] : colorMap} />
    </mesh>
  )
}