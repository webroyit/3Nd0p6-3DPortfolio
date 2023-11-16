import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
    // Import the 3D object
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            {/* To see the 3D object */}
            <hemisphereLight intensity={0.15} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={0.75}
                position={[0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25}}       // Where to look the 3D object
                                                            // 'fov' How wide for field of view
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* To move the view from left to right */}
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}         // Limit on how much to rotate
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas;