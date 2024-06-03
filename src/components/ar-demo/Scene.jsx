import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


function Scene() {

  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta
  })

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} color={"#fff"} />
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshLambertMaterial color={"red"} />
      </mesh>
    </>
  );
}

export default Scene;