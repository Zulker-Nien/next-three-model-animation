import {
    OrbitControls,
    useAnimations,
    useFBX,
    useTexture,
  } from "@react-three/drei";
  import { useEffect, useCallback } from "react";
  import { useLoader } from "@react-three/fiber";
  import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
  import {  LoopOnce, MeshPhongMaterial } from "three/src/Three";
  import THREE from "three";
  
  const Model = () => {
    // Load Model
    const fbx = useLoader(FBXLoader, "./ASSASSIN_07.fbx");
    // Load Textures
    const Body = useTexture([
      "./Emission.png",
      "./AlbedoTransparency.png",
      "./MetallicSmoothness.png",
      "./Normal.png",
    ]);
  
    // Create Materials
    let new_mtl;
    new_mtl = new MeshPhongMaterial({
      emissiveMap: Body[0],
      map: Body[1],
      normalMap: Body[3],
      aoMap: Body[2],
    });
  
    const INITIAL_MAP = [{ mtl: new_mtl }];
  
    // Function to apply texture
    const initTexture = (parent, mtl) => {
      parent.traverse((o) => {
        if (o.isMesh) {
          o.material = mtl;
        }
      });
    };
  
    // Apply Texture
    if (fbx) {
      for (let object of INITIAL_MAP) {
        initTexture(fbx, object.mtl);
      }
    }
  
    // Load Animation
    const walk = useFBX("./assasin@walking.fbx");
    const turnLeft = useFBX("./assasin@turnleft.fbx");
    const turnRight = useFBX("./assasin@turnright.fbx");
    const idle = useFBX("./assasin@idle.fbx");
    
    const idl = useAnimations(idle.animations, fbx);
    const wlk = useAnimations(walk.animations, fbx);
    const lft = useAnimations(turnLeft.animations, fbx);
    const ryt = useAnimations(turnRight.animations, fbx);
  
    const handleAnimate = useCallback((e) => {
      const { keyCode } = e;
  
      if (keyCode === 87) {
        ryt.actions[ryt.names[ryt.names.length - 1]].reset().fadeOut(0.5).stop();
        lft.actions[lft.names[lft.names.length - 1]].reset().fadeOut(0.5).stop();
        idl.actions[idl.names[idl.names.length - 1]].reset().fadeOut(0.5).stop();
        wlk.actions[wlk.names[wlk.names.length - 1]].reset().fadeIn(0.5).play();
      }
      if (keyCode === 65) {
        wlk.actions[wlk.names[wlk.names.length - 1]].reset().fadeOut(0.5).stop();
        ryt.actions[ryt.names[ryt.names.length - 1]].reset().fadeOut(0.5).stop();
        idl.actions[idl.names[idl.names.length - 1]].reset().fadeOut(0.5).stop()
        lft.actions[lft.names[lft.names.length - 1]].reset().fadeIn(0.5).play().setLoop(LoopOnce,1)
      }
      if (keyCode === 68) {
        wlk.actions[wlk.names[wlk.names.length - 1]].reset().fadeOut(0.5).stop();
        lft.actions[lft.names[lft.names.length - 1]].reset().fadeOut(0.5).stop();
        idl.actions[idl.names[idl.names.length - 1]].reset().fadeOut(0.5).stop();
        ryt.actions[ryt.names[ryt.names.length - 1]].reset().fadeIn(0.5).play().setLoop(LoopOnce,1);
      }
      if (keyCode === 83) {
        wlk.actions[wlk.names[wlk.names.length - 1]].reset().fadeOut(0.5).stop();
        lft.actions[lft.names[lft.names.length - 1]].reset().fadeOut(0.5).stop();
        ryt.actions[ryt.names[ryt.names.length - 1]].reset().fadeOut(0.5).stop();
        idl.actions[idl.names[idl.names.length - 1]].reset().fadeIn(0.5).play()
      }
    }, []);
  
    // Detect input change
    useEffect(() => {
      window.addEventListener("keydown", handleAnimate);
      return () => {
        window.removeEventListener("keydown", handleAnimate);
      };
    }, [handleAnimate]);
  
    // x.actions[x.names[x.names.length - 1]].reset().fadeIn(0.5).play();
    // Apply Animation
  
    return (
      <>
        <group position={[0, -75, 0]}>
          <primitive object={fbx} />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
          />
        </group>
      </>
    );
  };
  
  export default Model;
  