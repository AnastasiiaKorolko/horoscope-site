import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarrySky = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 2]}
        frameloop="demand"
        performance={{ min: 0.1 }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.9} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={8}
          saturation={0}
          fade
        />
      </Canvas>
    </div>
  );
};

export default StarrySky;
