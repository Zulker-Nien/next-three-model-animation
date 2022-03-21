import { useFBX, useAnimations } from "@react-three/drei"
import { useCallback, useEffect, useState } from "react";

const animation = (props) => {
  const [animate, setAnimate] = useState<boolean>(false);
  const handleAnimate = useCallback(
     (event) => {
      const { keyCode } = event;
      if (keyCode === 80) {
        setAnimate(!animate);
      }
      console.log(keyCode)
    },
    [animate]
  );
  
  const fbx = props.fbx
  const fbx2 = useFBX("./test_anim.fbx");
    console.log(fbx)
  const { animations } = fbx2;
  const { actions, names } = useAnimations(animations, fbx);

  useEffect(() => {
    window.addEventListener("keydown", handleAnimate);

    return () => {
      window.removeEventListener("keydown", handleAnimate);
    };
  }, [handleAnimate, animate]);
  return (
    <>
      {animate
        ? actions[names[names.length - 1]].play()
        : actions[names[names.length - 1]].stop()}
    </>
  );
};

export default animation;
