"use client";
import Scene from "@/components/ar-demo/Scene";
import { Canvas } from "@react-three/fiber";
import { ARButton, VRButton, XR } from "@react-three/xr";
import React, { Suspense } from "react";


function ARDemo() {
  return (
    <div className="w-screen h-[calc(100vh-180px)]">
      <Suspense>
        <ARButton />
        <Canvas>
          <XR>
            <Scene />
          </XR>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default ARDemo;
