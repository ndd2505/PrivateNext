import {Box,Center , Avatar, Text, Divider} from "@chakra-ui/react"
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';
import Card from './card';
import Egg from './Egg'
import { Suspense } from "react";

export default function Profiler() {
  return (
    <>
        <Center>
            <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        </Center>
        <Center>
            <Text fontSize='40px' color='white'>
                Nguyen Dinh Duy
            </Text>
        </Center>
        
          <Canvas className="canvas1st" style={{width:"100%",background:""}}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensityintee={0.8} />
              {/* <directionalLight intensity={1} position={[1,1,1]}/> */}
              <Suspense fallback={null}>
                <Card />
              </Suspense>
          </Canvas>
          {/* <Center>
            <Canvas className="canvas2st" style={{width:"20%"}}>
              <OrbitControls enableZoom={true} />
              <ambientLight intensityintee={0.5} />
              <directionalLight intensity={1} position={[-2,5,2]}/>
              <Suspense fallback={null}>
                <Egg />
              </Suspense>
          </Canvas>
          </Center> */}
        <Divider />
    </>
    
  )
}

