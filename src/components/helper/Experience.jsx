"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Scene } from "../models/Scene";
import { OrbitControls, Environment, SoftShadows } from "@react-three/drei";
import { Avatar } from "../models/Avatar";
const Light = () => {
    const dirLight = useRef();
    // useHelper(dirLight, DirectionalLightHelper, "red");

    return (
        <>
            <directionalLight
                ref={dirLight}
                castShadow
                position={[1, 2, 0.75]}
                shadow-mapSize={[1024, 1024]}
                target-position={[0, 1, 0.5]}
                color="#dde"
                intensity={5}
            >
                <orthographicCamera
                    attach="shadow-camera"
                    args={[-2, 2, 2, -2]}
                />
            </directionalLight>
        </>
    );
};

function Experience() {
    return (
        <Canvas
            shadows
            camera={{
                fov: 40,
                near: 0.1,
                far: 1000,
                position: [3.8, 1.7, 2.8],
            }}
        >
            {/* <SoftShadows size={5} /> */}
            {/* <OrbitControls /> */}
            <Environment files={"/images/satara_night_no_lamps_1k.hdr"} blur />
            {/* <axesHelper args={[5]} /> */}
            <pointLight
                position={[0.75, 2, -2]}
                intensity={2}
                color="#fefecf"
                // castShadow
            />
            <Light />

            <group position={[-0.4, -0.25, -0.4]}>
                <group rotation-y={Math.PI * 0.125} receiveShadow>
                    <Scene />
                </group>
                <group
                    position={[1.25, 0.053, 0.75]}
                    scale={0.6}
                    rotation-x={-Math.PI * 0.5}
                    rotation-z={-Math.PI * 0.375}
                >
                    <Avatar />
                </group>
            </group>
        </Canvas>
    );
}

export default Experience;
