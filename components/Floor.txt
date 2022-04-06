const Floor = (props:any) => {
    return (
      <mesh {...props} recieveShadow={true} position={[0,-2,0]}>
        <boxBufferGeometry args={[10,0.5,10]}   />
        <meshPhysicalMaterial color='brown' />
      </mesh>
    );
  }
  
  export default Floor;
  