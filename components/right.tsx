import { Preload, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styles from "../styles/Component.module.css";
import Model from "./Model";

export default function right() {
  return (
    <>
    <div className={styles.scene}>
      <h1>Use W-A-S-D</h1>
      <Canvas
        camera={{
          position: [0, 0, 150]
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]}/>
        <Suspense fallback={null}>
           <Model />
           <Preload all/>
        </Suspense>
      </Canvas>
    </div></>
  );
}
