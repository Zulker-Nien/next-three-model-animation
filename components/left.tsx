import { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Component.module.css";
import Floor from "./floor";
import { OrbitControls } from "@react-three/drei";

const left = () => {
  // CHANGE COLOUR ON SPACEBAR CLICK
  // This is the state
  const [state, setState] = useState("white");

  // Check Keyboard Press on Spacebar
  const handleUserKeyPress = useCallback(
    (event) => {
      const { keyCode } = event;
      if (keyCode === 32) {
        var randomNumber = Math.floor(Math.random() * colors.length);
        setState(colors[randomNumber]);
      } if(keyCode === 40){
        
      }
    },
    [state]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const colors = [
    "#7f8a93",
    "#97a1a7",
    "#acb4b9",
    "#DF9998",
    "#7C6862",
    "#A3AB84",
    "#D6CCB1",
    "#F8D5C4",
    "#A3AE99",
    "#EFF2F2",
    "#B0C5C1",
    "#565F59",
    "#CB304A",
    "#FED7C8",
    "#C7BDBD",
    "#3DCBBE",
    "#264B4F",
    "#389389",
    "#85BEAE",
    "#F2A97F",
    "#D85F52",
    "#D92E37",
    "#FC9736",
    "#F7BD69",
    "#A4D09C",
    "#4C8A67",
    "#25608A",
    "#75C8C6",
    "#F5E4B7",
    "#E69041",
    "#E56013",
    "#11101D",
    "#630609",
    "#C9240E",
    "#EC4B17",
    "#281A1C",
    "#4F556F",
  ];
  const keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
  }

  return (
    <div className={styles.scene}>
      <Canvas
        // shadows={true}
        // className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color={"white"} position={[2, 2, 5]} />
        {/* <TransformControls mode="translate"> */}
        <mesh>
          <boxGeometry args={[5, 4, 5]} />
          <meshStandardMaterial color={state} />
          <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          // makeDefault
        />
        </mesh>
        {/* </TransformControls> */}
       
        <Floor />
      </Canvas>
    </div>
  );
};

export default left;
