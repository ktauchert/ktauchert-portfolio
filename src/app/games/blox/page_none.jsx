"use client";
import Scene from "@/components/blox/Scene";
import { Canvas } from "@react-three/fiber";
import { Suspense} from "react";

function page() {


  return (
    <div className="w-screen h-[calc(100vh-180px)]">
      <Suspense>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default page;
