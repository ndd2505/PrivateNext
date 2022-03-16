/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Microsoft (https://sketchfab.com/microsoft)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/c2a3e754887e4ceeabeec4e814c4cbce
title: Chick In Egg
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/egg.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={10} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/egg.gltf')