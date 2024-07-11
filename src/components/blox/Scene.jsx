import { BloxGameContext } from "@/context/BloxGameContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import useWindowDimensions from "@/components/helper/useWindowDimensions";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, Vector3 } from "three";
import { NextDataPathnameNormalizer } from "next/dist/server/future/normalizers/request/next-data";
import next from "next";

function Scene() {
  // Context
  const { points, speed, boxSize, boxHeight, gameState, changeGameState } =
    useContext(BloxGameContext);

  // Window
  const { width, height, aspect } = useWindowDimensions();

  // States
  const [cameraWidth, setCameraWidth] = useState(20);
  const [stack, setStack] = useState([]);

  // Ref
  const cameraRef = useRef();
  const topLayer = useRef();
  const prevLayer = useRef();

  // Functions
  const generateBox = (x, y, z, width, depth, newColor = null) => {
    const materialColor = new Color(
      `hsl(${30 + (newColor ?? stack.length) * 4}, 100%, 50%)`
    );
    const position = [x, y, z];
    const box = {
      position,
      materialColor,
      width,
      depth,
    };

    return box;
  };

  const addLayer = (
    x,
    z,
    width,
    depth,
    direction = "none",
    stackLength = null
  ) => {
    const y = boxHeight * stack.length;
    const layer = generateBox(x, y, z, width, depth);
    layer.direction = direction;

    setStack([...stack, layer]);
  };

  const updateScene = (
    newWidth,
    newDepth,
    newTopLayerScale,
    newTopLayerPosition,
    direction
  ) => {
    const newColor = stack.length + 1;

    const nextY = boxHeight * stack.length;

    const stackCopy = JSON.parse(JSON.stringify(stack));
    const slicedCopy = stackCopy.slice(0, -1);

    // topLayer.current.scale[direction] = newTopLayerScale;
    topLayer.current.position[direction] -= newTopLayerPosition;

    const nextX = direction === "x" ? topLayer.current.position.x : -10;
    const nextZ = direction === "z" ? topLayer.current.position.z : -10;
    const nextDirection = direction === "x" ? "z" : "x";

    const newTopLayer = generateBox(
      topLayer.current.position.x,
      topLayer.current.position.y,
      topLayer.current.position.z,
      newWidth,
      newDepth
    );

    const nextLayer = generateBox(
      nextX,
      nextY,
      nextZ,
      newWidth,
      newDepth,
      newColor
    );
    nextLayer.direction = nextDirection;

    setStack([...slicedCopy, newTopLayer, nextLayer]);
  };

  const handleBoxClick = () => {
    if (gameState === "start") {
      changeGameState("running");
    }

    const topBox = stack[stack.length - 1];

    if (gameState === "running") {
      const delta =
        topLayer.current.position[topBox.direction] -
        prevLayer.current.position[topBox.direction];
      const overhangSize = Math.abs(delta);
      const size = topBox.direction === "x" ? topBox.width : topBox.depth;

      const overlap = size - overhangSize;
      // console.log(delta, overlap);

      if (overlap > 0) {
        const newWidth = topBox.direction === "x" ? overlap : topBox.width;
        const newDepth = topBox.direction === "z" ? overlap : topBox.depth;

        const newTopLayerScale = overlap / size;
        const newTopLayerPosition = delta / 2;

        updateScene(
          newWidth,
          newDepth,
          newTopLayerScale,
          newTopLayerPosition,
          topBox.direction
        );
        // addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
      }
    }

    if (gameState === "start") {
      const nextX = topBox.direction === "x" ? 0 : -10;
      const nextZ = topBox.direction === "z" ? 0 : -10;

      const newWidth = boxSize;
      const newDepth = boxSize;

      const nextDirection = topBox.direction === "x" ? "z" : "x";

      addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
    }
  };

  // Frame
  useFrame((state, delta) => {
    cameraRef.current.lookAt(new Vector3(0, stack.length ?? 1, 0));
    cameraRef.current.position.y = boxHeight * (stack.length - 2) + 4;

    if (gameState === "running") {
      const topBox = stack[stack.length - 1];
      const prevBox = stack[stack.length - 2];

      topLayer.current.position[topBox.direction] += delta * speed;
    }

    if (topLayer.current.position?.x > 3 || topLayer.current.position?.z > 3) {
      changeGameState("game-over");
    }
  });

  // Effect
  useEffect(() => {
    if (gameState === "start" && stack.length === 0) {
      addLayer(0, 0, boxSize, boxSize, "z");
    }
    console.log(stack);
  });

  return (
    <>
      <group onClick={handleBoxClick}>
        {stack &&
          stack.map((box, idx) => {
            // console.log(stack, idx);
            if (stack.length - 1 === idx) {
              return (
                <mesh ref={topLayer} position={box.position}>
                  <boxGeometry args={[box.width, boxHeight, box.depth]} />
                  <meshLambertMaterial color={box.materialColor} />
                </mesh>
              );
            } else if (stack.length - 2 === idx) {
              return (
                <mesh ref={prevLayer} position={box.position}>
                  <boxGeometry args={[box.width, boxHeight, box.depth]} />
                  <meshLambertMaterial color={box.materialColor} />
                </mesh>
              );
            } else {
              return (
                <mesh position={box.position}>
                  <boxGeometry args={[box.width, boxHeight, box.depth]} />
                  <meshLambertMaterial color={box.materialColor} />
                </mesh>
              );
            }
          })}
      </group>
      <ambientLight intensity={0.5} />
      <directionalLight
        color={"white"}
        intensity={1.0}
        position={[10, 20, 0]}
      />
      <axesHelper />
      <OrthographicCamera
        makeDefault
        position={[5, 5, 5]}
        ref={cameraRef}
        near={1}
        far={100}
        left={cameraWidth / -2}
        right={cameraWidth / 2}
        top={(cameraWidth * (height / width)) / 2}
        bottom={(cameraWidth * (height / width)) / -2}
      />
    </>
  );
}

export default Scene;
