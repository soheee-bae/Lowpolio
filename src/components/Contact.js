import React, { useRef, Suspense, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, animated, a } from "@react-spring/three";
import { useHover } from "react-use-gesture";
import { proxy, useProxy } from "valtio";
import { Physics, usePlane } from "@react-three/cannon";
import * as THREE from "three";

const state = proxy({
  current: null,
  items: {
    gmail: "#ffffff",
    linkedin: "#ffffff",
    github: "#ffffff",
  },
});

function ContactModel(props) {
  const group = useRef();
  const snap = useProxy(state);
  const { nodes, materials } = useGLTF("/models/ContactModels.glb");
  const [zoom, set] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  const [springFont, setspringFont] = useSpring(() => ({
    scale: [1.16, 1.16, 1.16],
  }));
  const [springFont1, setspringFont1] = useSpring(() => ({
    scale: [0.17, 0.15, 0.16],
  }));
  const [springFont2, setspringFont2] = useSpring(() => ({
    scale: [1.04, 0.02, 1.04],
  }));
  const [springFont3, setspringFont3] = useSpring(() => ({
    scale: [1.04, 0.02, 1.04],
  }));
  const bindFont = useHover(({ hovering }) =>
    setspringFont({ scale: hovering ? [1.2, 1.2, 1.2] : [1.16, 1.16, 1.16] })
  );
  const bindFont1 = useHover(({ hovering }) =>
    setspringFont1({ scale: hovering ? [0.17, 0.7, 0.16] : [0.17, 0.15, 0.16] })
  );
  const bindFont2 = useHover(({ hovering }) =>
    setspringFont2({ scale: hovering ? [1.04, 0.2, 1.04] : [1.04, 0.02, 1.04] })
  );
  const bindFont3 = useHover(({ hovering }) =>
    setspringFont3({ scale: hovering ? [1.04, 0.2, 1.04] : [1.04, 0.02, 1.04] })
  );
  const dummy = new THREE.Vector3();
  useFrame((state, delta) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 50 :48,
      step
    );
    state.camera.position.lerp(
      dummy.set(zoom ? 0 : 0, zoom ? 1 : 1, zoom ? 12 : 12),
      step
    );
    state.camera.lookAt(0, 0, -10);
    state.camera.updateProjectionMatrix();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[3.3, -1, 0.03]}
        rotation={[3.14, 0, 0.05]}
        scale={[0.011, 0.011, 0.01]}
      >
        <mesh
          material={materials["Material #25.002"]}
          geometry={nodes.Mesh003.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Elf_bush_Map.001"]}
          geometry={nodes.Mesh003_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.022"]}
          geometry={nodes.Mesh003_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Elf_bush_Map.004"]}
          geometry={nodes.Mesh003_3.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.023"]}
          geometry={nodes.Mesh003_4.geometry}
        />
      </group>
      <animated.group
        position={[0.9, 1.44, 0.14]}
        rotation={[1.57, -0.15, 0]}
        {...springFont}
        {...bindFont()}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.025"]}
          geometry={nodes.Text004.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.024"]}
          geometry={nodes.Text004_1.geometry}
        />
      </animated.group>
      <group
        position={[2.22, 0, 0.35]}
        rotation={[0, 0, 1.56]}
        scale={[0.52, 0.52, 0.04]}
      >
        <mesh
          material-color="#000000"
          material={materials["Material.030"]}
          geometry={nodes.Cube006.geometry}
        />
        <mesh
          material={materials["Material.031"]}
          geometry={nodes.Cube006_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.032"]}
          geometry={nodes.Cube006_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.026"]}
          geometry={nodes.Cube006_3.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.027"]}
          geometry={nodes.Cube006_4.geometry}
        />
        <mesh
          material-color="#bb001b"
          material={materials["Material.028"]}
          geometry={nodes.Cube006_5.geometry}
        />
        <mesh
          material={materials["Material.029"]}
          geometry={nodes.Cube006_6.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.033"]}
          geometry={nodes.Cube006_7.geometry}
        />
        <mesh
          material-color="#01496e"
          material={materials["Material.034"]}
          geometry={nodes.Cube006_8.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.035"]}
          geometry={nodes.Cube006_9.geometry}
        />
      </group>
      <animated.group
        onClick={() => alert("Email me at baesohee28@gmail.com !")}
        position={[-3.2, -2.4, 0.04]}
        rotation={[1.57, 0, 0]}
        onPointerOver={() => {
          state.items.gmail = "#bb001b";
          setHovered(true);
        }}
        onPointerOut={() => {
          state.items.gmail = "#ffffff";
          setHovered(false);
        }}
        {...springFont1}
        {...bindFont1()}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.038"]}
          geometry={nodes.Text006.geometry}
        />
        <mesh
          material-color={snap.items.gmail}
          receiveShadow
          castShadow
          material={materials["Material.036"]}
          geometry={nodes.Text006_1.geometry}
        />
        <mesh
          material={materials["Material.037"]}
          geometry={nodes.Text006_2.geometry}
        />
      </animated.group>
      <animated.group
        onClick={() => (window.location.href = "https://github.com/sohee28")}
        position={[2.3, -1.6, 0.04]}
        rotation={[1.57, 0, 0]}
        onPointerOver={() => {
          state.items.linkedin = "#000000";
          setHovered(true);
        }}
        onPointerOut={() => {
          state.items.linkedin = "#ffffff";
          setHovered(false);
        }}
        {...springFont2}
        {...bindFont2()}
      >
        <mesh
          material-color={snap.items.linkedin}
          receiveShadow
          castShadow
          material={materials["Material.039"]}
          geometry={nodes.Cube008.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.040"]}
          geometry={nodes.Cube008_1.geometry}
        />
      </animated.group>
      <animated.group
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/sohee-bae-b37a9a166/")
        }
        position={[0, -1.6, 0.04]}
        rotation={[1.57, 0, 0]}
        onPointerOver={() => {
          state.items.github = "#0e56ff";
          setHovered(true);
        }}
        onPointerOut={() => {
          state.items.github = "#ffffff";
          setHovered(false);
        }}
        {...springFont3}
        {...bindFont3()}
      >
        <mesh
          material-color={snap.items.github}
          receiveShadow
          castShadow
          material={materials["Material.041"]}
          geometry={nodes.Cube009.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.042"]}
          geometry={nodes.Cube009_1.geometry}
        />
      </animated.group>
    </group>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-5, -5, 10]}
        intensity={1.2}
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
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial attach="material" color="#567d46" />
    </mesh>
  );
};

const Contact = () => {
  return (
    <div className="contact-container">
      <Canvas
        colorManagement
        shadowMap
        style={{
          position: "sticky",
          height: "100vh",
          width: "auto",
        }}
        camera={{ position: [0, 1, 12], fov: 50 }}
        onCreated={({ camera }) => camera.lookAt(0, 0, -10)}
      >
        <Physics>
          <Lights />
          <Plane />
          <Suspense fallback={null}>
            <ContactModel />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
};

export default Contact;
