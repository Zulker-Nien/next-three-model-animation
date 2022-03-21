import { useAnimations, useFBX } from "@react-three/drei";
import { useEffect, useCallback, useState } from "react";

const model = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const handleAnimate = useCallback(
    async (event) => {
      const { keyCode } = await event;
      if (keyCode === 80) {
        setAnimate(!animate);
      }
    },
    [animate]
  );

  const fbx = useFBX(
    "https://aws-s3-charaktor-mono.s3.amazonaws.com/characters/test.fbx"
  );

  const fbx2 = useFBX("./test_anim.fbx");

  const { animations } = fbx2;
  const { actions, names } = useAnimations(animations, fbx);

  {
    animate
      ? actions[names[names.length - 1]].play()
      : actions[names[names.length - 1]].stop();
  }

  useEffect(() => {
    window.addEventListener("keydown", handleAnimate);

    return () => {
      window.removeEventListener("keydown", handleAnimate);
    };
  }, [handleAnimate, animate]);

  return (
    <>
      <group position={[0, -75, 0]}>
        <primitive object={fbx} />
      </group>
    </>
  );
};

export default model;
