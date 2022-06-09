import {
  Lightformer,
  PerspectiveCamera,
  Preload,
  Scroll,
  ScrollControls,
  SpotLight,
  useDepthBuffer,
  useScroll,
} from "@react-three/drei";
import { Canvas, Camera, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import THREE from "three";
import styles from "../styles/Component.module.scss";
import Model from "./ModelLoad";

export default function ForCanvas() {

  return (
    <>
      <div className={styles.scene} id="div1">
        <Canvas
        
        >
          <PerspectiveCamera/>
         {/* <directionalLight position={[20, 100, 0]} /> */}
          {/* <ambientLight position={[115.634 ,-0.199677, 151.107 ]} scale={1} /> */}
          <ambientLight position={[-38.1183 ,-269.879 , 175.15 ]} scale={1} />
          <Suspense fallback={null}>
            <ScrollControls pages={15} distance={3}>
              <Scroll>
                <Model  scale={1}/>
              </Scroll>
            </ScrollControls>
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
