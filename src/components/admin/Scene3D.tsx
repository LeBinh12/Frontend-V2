"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  useGLTF, 
  useAnimations, 
  Environment, 
  Center, 
  Stars, 
  Points, 
  PointMaterial, 
  Float,
  PerspectiveCamera
} from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

const Model = ({ url }: { url: string }) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, group);

  // Play first animation if available
  React.useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      actions[names[0]]?.play();
    }
  }, [actions, names]);

  useFrame((state) => {
    if (!group.current) return;
    
    // Mouse tracking - rotate entire model
    const mX = state.mouse.x * 0.4;
    const mY = -state.mouse.y * 0.4;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mX, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mY, 0.1);
  });

  return (
    <group ref={group} dispose={null}>
      <Center>
        <primitive object={scene} scale={1.2} />
      </Center>
    </group>
  );
};

const CosmicParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(3000), { radius: 10 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={['#020617']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#f97316" />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={[0, 0.5, 0]}>
            <Model url="/3D/robot_playground.glb" />
          </Float>
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <CosmicParticles />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
