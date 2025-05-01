import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useThree, extend } from '@react-three/fiber';
import { useEffect } from 'react';

extend({ OrbitControls });

export function useCameraControls() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.5;
    return () => controls.dispose();
  }, [camera, gl]);
}
