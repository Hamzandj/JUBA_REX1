"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export default function Shiba({ fileUrl }) {
    const mesh = useRef<Mesh>(null);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
        <div className="w-full h-full">
            <Canvas
                className="h-48 w-full"
                shadows
                camera={{ position: [2, 2, 5], fov: 50 }}
                gl={{ antialias: true, pixelRatio: window.devicePixelRatio }}

            >
    <OrbitControls enableZoom={true} enableDamping={true} dampingFactor={0.1} />

                <ambientLight intensity={0.4} />
                <directionalLight
                    position={[5, 5, 5]}
                    castShadow
                    intensity={1}
                    shadow-mapSize-width={256}
                    shadow-mapSize-height={256}
                />
                <spotLight
                    position={[10, 15, 10]}
                    angle={0.3}
                    intensity={1.5}
                    castShadow
                />

                <mesh ref={mesh} castShadow receiveShadow>
                    <primitive object={gltf.scene} />
                </mesh>

                <Environment preset="sunset" background={false} />
            </Canvas>  
        </div>
    );
}
