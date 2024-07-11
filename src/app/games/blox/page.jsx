"use client";
import Scene from "@/components/blox/Scene";
import BloxGameContextProvider from "@/context/BloxGameContext";
import { Canvas } from "@react-three/fiber";
import { Suspense} from "react";

function page() {


  return (
    <div className="w-screen h-[calc(100vh-180px)] flex justify-center">
      <BloxGameContextProvider>
      <Suspense>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
      </BloxGameContextProvider>
    </div>
  );
}

export default page;
