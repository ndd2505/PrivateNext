import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Card = () => {

    const imgMap = useLoader(TextureLoader, 'rabit.jpeg');
    const imgBackMap = useLoader(TextureLoader, 'logo.png');

    return (
        <mesh rotation={[0,0,0]}>
            {/* <boxGeometry args={[1,25,15]}/> */}
            <boxBufferGeometry attach={"geometry"} args={[0.1,3,4]}/>
            <meshStandardMaterial map={imgMap}/>
            <meshStandardMaterial map={imgBackMap}/>
        </mesh>
    )
}

export default Card