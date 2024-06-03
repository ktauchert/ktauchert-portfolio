import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "@/components/helper/useWindowDimensions";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const ORIGINAL_BOX_SIZE = 3;

function Scene() {
  const { width, height, aspect } = useWindowDimensions();
  const [cameraWidth, setCameraWidth] = useState(10);

  // game vars
  const [gameState, setGameState] = useState('init');
  const [layerCount, setLayerCount] = useState(0);
  const [stack, setStack] = useState([]);

  const addLayer = (x, z, width, depth) => {

  }


  const cameraRef = useRef();

  useFrame((state, delta) => {
    cameraRef.current.lookAt(new Vector3(0, 0, 0));
    if(gameState === 'init'){
      // initial Block einfügen
      addLayer(0, 0, ORIGINAL_BOX_SIZE, ORIGINAL_BOX_SIZE)
    }
  
  });

  useEffect(() => {
    
  }, [])


  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight
        color={"white"}
        intensity={1.0}
        position={[10, 20, 0]}
      />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1, 3]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <OrthographicCamera
        makeDefault
        position={[4, 4, 4]}
        ref={cameraRef}
        near={1}
        far={100}
        left={cameraWidth / -2}
        right={cameraWidth / 2}
        top={cameraWidth / (width / height) / 2}
        bottom={cameraWidth / (width / height) / -2}
      />
    </>
  );
}

export default Scene;
