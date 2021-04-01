import React, { useRef, Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, animated } from "@react-spring/three";
import { useHover } from "react-use-gesture";
import { Physics, usePlane } from "@react-three/cannon";
import "../styles/Skills.css";
import * as THREE from "three";

function SkillModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/SkillModels.glb");

  const [springFont, setspringFont] = useSpring(() => ({
    scale: [0.01, 0.01, 0.01],
  }));
  const bindFont = useHover(({ hovering }) =>
    setspringFont({
      scale: hovering ? [0.013, 0.013, 0.013] : [0.01, 0.01, 0.01],
    })
  );

  const [zoom, set] = useState(false);

  const dummy = new THREE.Vector3();
  useFrame((state, delta) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 65 : 60,
      step
    );
    state.camera.position.lerp(
      dummy.set(zoom ? 0 : 0, zoom ? 9 : 12, zoom ? 9 : 0),
      step
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return (
    <group ref={group} position={[1, 0, 0]} {...props} dispose={null}>
      <group
        name="Css"
        position={[-5.59, 0.06, -1.99]}
        rotation={[0, -0.01, -0.01]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.042"]}
          geometry={nodes.Text001_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text001_2.geometry}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        name="Fense_1001"
        material={materials["lambert37.034"]}
        geometry={nodes.Fense_1001.geometry}
        position={[1.57, 0, 5.46]}
        rotation={[Math.PI / 2, 0, -1.59]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.013"]}
        geometry={nodes.floor.geometry}
        position={[0.64, 0, 0.33]}
        scale={[3.2, 5.2, 4.47]}
      />
      <group
        name="Html"
        position={[-5.57, 0.06, -3.05]}
        rotation={[0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.042"]}
          geometry={nodes.Text_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text_2.geometry}
        />
      </group>
      <group
        name="JS"
        position={[-5.58, 0.06, -1.04]}
        rotation={[0, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text002.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.008"]}
          geometry={nodes.Text002_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Text002_2.geometry}
        />
      </group>
      <group
        name="Mongodb"
        position={[-5.59, 0.06, 3.9]}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text005.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.009"]}
          geometry={nodes.Text005_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.039"]}
          geometry={nodes.Text005_2.geometry}
        />
      </group>
      <group
        name="Node"
        position={[-5.57, 0.06, 0.92]}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text004.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.009"]}
          geometry={nodes.Text004_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.039"]}
          geometry={nodes.Text004_2.geometry}
        />
      </group>
      <group
        name="React"
        position={[-5.59, 0.06, -0.02]}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text003.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.042"]}
          geometry={nodes.Text003_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text003_2.geometry}
        />
      </group>
      <group
        name="sketch"
        position={[-5.58, 0.06, 2.9]}
        rotation={[0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text007.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.008"]}
          geometry={nodes.Text007_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Text007_2.geometry}
        />
      </group>
      <group
        name="UI"
        position={[-5.57, 0.06, 1.91]}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text006.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.008"]}
          geometry={nodes.Text006_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Text006_2.geometry}
        />
      </group>
      <animated.group
        position={[-7.5, 0, 4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        {...springFont}
        {...bindFont()}
        onClick={() => set(!zoom)}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.002"]}
          geometry={nodes.Mesh032.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert37.032"]}
          geometry={nodes.Mesh032_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.003"]}
          geometry={nodes.Mesh032_2.geometry}
        />
      </animated.group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25"]}
          geometry={nodes.Mesh.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25.005"]}
          geometry={nodes.Mesh_1.geometry}
        />
      </group>
      <group
        position={[-7.2, 0, -2.42]}
        rotation={[Math.PI / 2, 0, -2.89]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert37.004"]}
          geometry={nodes.Mesh033.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.002"]}
          geometry={nodes.Mesh033_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.001"]}
          geometry={nodes.Mesh033_2.geometry}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.014"]}
        geometry={nodes.clickme.geometry}
        position={[-8.7, 0.02, 5.3]}
        scale={[0.41, 0.41, 0.41]}
      />
    </group>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-6, 8, 3]}
        intensity={1.4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial attach="material" color="#81523d" />
    </mesh>
  );
};

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skill-left">
        <h1 className="skill-title">SKILLS</h1>
        <p className="skill-para">
          The main area of my expertise is front-end web development.
        </p>
      </div>
      <div className="skill-right">
        <Canvas
          colorManagement
          shadowMap
          style={{
            position: "sticky",
            height: "90vh",
            width: "auto",
          }}
          camera={{ position: [0, 12, 0], fov: 60 }}
          onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        >
          <Physics>
            <Lights />
            <Plane />
            <Suspense fallback={null}>
              <SkillModel />
            </Suspense>
          </Physics>
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
