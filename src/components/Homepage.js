import React, { useRef, Suspense, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, animated, a } from "@react-spring/three";
import { useHover } from "react-use-gesture";
import { proxy, useProxy } from "valtio";
import { Physics, usePlane } from "@react-three/cannon";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";
import "../styles/Home.css";
import Navbar from "./Navbar";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[5, 7, 6]}
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
      <meshLambertMaterial attach="material" color="#567d46" />
    </mesh>
  );
};

const HomeModel = (props) => {
  const [axarrow, setAxarrow] = useState(true);
  const [bagarrow, setBagarrow] = useState(true);
  const [zoom, set] = useState(false);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/HomeModels.glb");
  const { actions } = useAnimations(animations, group);

  const dummy = new THREE.Vector3();
  useFrame((state, delta) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 53 : 53,

      step
    );
    state.camera.position.lerp(
      dummy.set(zoom ? 0 : 0, zoom ? 15 : 15, zoom ? 11 : 11),
      step
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  const fireAnimation = () => {
    actions.smallwoodAction.clampWhenFinished = true;
    actions.fireAction.clampWhenFinished = true;
    actions.smallwoodAction.setLoop(THREE.LoopOnce).play();
    actions.fireAction.setLoop(THREE.LoopOnce).play();
    actions.smoke1.play();
    actions.smoke2.play();
    actions.smoke3.play();
    actions.smoke4.play();
    actions.smoke5.play();
    actions.smoke6.play();
    actions.smoke7.play();
    actions.smoke8.play();
    actions.smoke9.play();
    actions.smoke10.play();
    actions.smoke11.play();
    actions.smoke12.play();
    actions.smoke13.play();
    actions.smoke14.play();
  };

  const axwoodAnimation = () => {
    actions.axAction.clampWhenFinished = true;
    actions.rightwoodAction.clampWhenFinished = true;
    actions.leftwoodAction.clampWhenFinished = true;
    actions.axAction.setLoop(THREE.LoopOnce).play();
    actions.rightwoodAction.setLoop(THREE.LoopOnce).play();
    actions.leftwoodAction.setLoop(THREE.LoopOnce).play();
    setAxarrow(false);
  };

  const campingbagAnimation = () => {
    actions.bagAppleAction.clampWhenFinished = true;
    actions.bagBreadAction.clampWhenFinished = true;
    actions.bagCheeseAction.clampWhenFinished = true;
    actions.bagCoverAction.clampWhenFinished = true;
    actions.bagWineAction.clampWhenFinished = true;
    actions.bagAppleAction.setLoop(THREE.LoopOnce).play();
    actions.bagBreadAction.setLoop(THREE.LoopOnce).play();
    actions.bagCheeseAction.setLoop(THREE.LoopOnce).play();
    actions.bagCoverAction.setLoop(THREE.LoopOnce).play();
    actions.bagWineAction.setLoop(THREE.LoopOnce).play();
    setBagarrow(false);
  };

  const campingTableAnimation = () => {
    actions.bread1Action.clampWhenFinished = true;
    actions.bread2Action.clampWhenFinished = true;
    actions.apple1Action.play();
    actions.apple2Action.play();
    actions.breadAction.play();
    actions.bread1Action.play();
    actions.bread2Action.play();
    actions.wineAction.play();
    actions.wine2Action.play();
    actions.winebottleAction.play();
  };

  const barbequeAnimation = () => {
    actions.barbequeMeat1Action.clampWhenFinished = true;
    actions.barbequeMeat2Action.clampWhenFinished = true;
    actions.barbequecoverAction.clampWhenFinished = true;
    actions.barbequeMeat1Action.setLoop(THREE.LoopOnce).play();
    actions.barbequeMeat2Action.setLoop(THREE.LoopOnce).play();
    actions.barbequecoverAction.setLoop(THREE.LoopOnce).play();
    actions.grillsmokeAction.play();
    actions.grillsmoke1.play();
    actions.grillsmoke2.play();
    actions.grillsmoke3.play();
    actions.grillsmoke4.play();
    actions.grillsmoke5.play();
    actions.grillsmoke6.play();
    actions.grillsmoke7.play();
    actions.grillsmoke8.play();
    actions.grillsmoke9.play();
    actions.grillsmoke10.play();
    actions.grillsmoke11.play();
  };

  const OtherAnimation = () => {
    actions.BallAction.play();
    actions.SoHeeAction.play();
    actions.BagarrowAction.play();
    actions.AxarrowAction.play();
  };
  useEffect(() => {
    fireAnimation();
    campingTableAnimation();
    barbequeAnimation();
    OtherAnimation();
  }, []);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Text"
        material={materials["Material.049"]}
        geometry={nodes.Text.geometry}
        position={[-2.07, 0.15, 1.2]}
        rotation={[0, 0.38, 0]}
        scale={[0.7, 0.7, 0.7]}
        receiveShadow
        castShadow
      />
      <group
        name="BAll"
        position={[6.8, 1.34, 1.37]}
        rotation={[-2.9, 0.09, 0.28]}
        scale={[0.34, 0.34, 0.34]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.030"]}
          geometry={nodes.Icosphere029.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.029"]}
          geometry={nodes.Icosphere029_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.038"]}
          geometry={nodes.Icosphere029_2.geometry}
        />
      </group>
      <group
        position={[7.04, 0, 3.66]}
        rotation={[Math.PI / 2, 0, 2.39]}
        scale={[0.007179, 0.007179, 0.007179]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.019"]}
          geometry={nodes.Mesh023.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25.007"]}
          geometry={nodes.Mesh023_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Elf_bush_Map.008"]}
          geometry={nodes.Mesh023_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.016"]}
          geometry={nodes.Mesh023_3.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.015"]}
          geometry={nodes.Mesh023_4.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Elf_bush_Map.013"]}
          geometry={nodes.Mesh023_5.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.013"]}
          geometry={nodes.Mesh023_6.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Mesh023_7.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.003"]}
          geometry={nodes.Mesh023_8.geometry}
        />
      </group>
      <group
        name="apple1"
        position={[-4.52, 1.81, 1.42]}
        rotation={[0, -0.3, 0.45]}
        scale={[0.92, 0.24, 0.85]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.048"]}
          geometry={nodes.Sphere003.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.047"]}
          geometry={nodes.Sphere003_1.geometry}
        />
      </group>
      <group
        name="apple2"
        position={[-4.6, 1.76, 1.18]}
        rotation={[-0.34, -0.29, 0.68]}
        scale={[0.9, 0.25, 0.88]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.048"]}
          geometry={nodes.Sphere001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.047"]}
          geometry={nodes.Sphere001_1.geometry}
        />
      </group>
      <group
        name="bread"
        position={[-5.14, 1.58, 1.62]}
        rotation={[1.78, 1.46, 2.94]}
        scale={[0.54, 0.54, 0.54]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.045"]}
          geometry={nodes.Cylinder052.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.044"]}
          geometry={nodes.Cylinder052_1.geometry}
        />
      </group>
      <group
        name="bread1"
        position={[-5.14, 1.58, 1.88]}
        rotation={[1.62, 1.46, 3.09]}
        scale={[0.54, 0.05, 0.54]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.045"]}
          geometry={nodes.Cylinder051.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.044"]}
          geometry={nodes.Cylinder051_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.043"]}
          geometry={nodes.Cylinder051_2.geometry}
        />
      </group>
      <group
        name="bread2"
        position={[-5.14, 1.58, 1.84]}
        rotation={[1.72, 1.46, 3]}
        scale={[0.54, 0.05, 0.54]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.045"]}
          geometry={nodes.Cylinder004.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.044"]}
          geometry={nodes.Cylinder004_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.043"]}
          geometry={nodes.Cylinder004_2.geometry}
        />
      </group>
      <group
        position={[-4.71, 1.45, 2.24]}
        rotation={[Math.PI, -1.27, Math.PI]}
        scale={[2.64, 0.06, 0.39]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.057"]}
          geometry={nodes.Cube029.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.052"]}
          geometry={nodes.Cube029_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.042"]}
          geometry={nodes.Cube029_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.041"]}
          geometry={nodes.Cube029_3.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.027"]}
          geometry={nodes.Cube029_4.geometry}
        />
      </group>
      <group
        name="wine"
        position={[-5.19, 1.61, 3.23]}
        rotation={[Math.PI, -1.27, Math.PI]}
        scale={[1.77, 1.77, 1.77]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.052"]}
          geometry={nodes.Cylinder046.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.051"]}
          geometry={nodes.Cylinder046_1.geometry}
        />
      </group>
      <group
        name="wine2"
        position={[-5.33, 1.61, 2.3]}
        rotation={[Math.PI, -1.27, Math.PI]}
        scale={[1.77, 1.77, 1.77]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.052"]}
          geometry={nodes.Cylinder045.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.051"]}
          geometry={nodes.Cylinder045_1.geometry}
        />
      </group>
      <group
        name="winebottle"
        position={[-5.11, 1.68, 0.91]}
        rotation={[0, -0.17, 0]}
        scale={[1.68, 1.96, 1.68]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.026"]}
          geometry={nodes.Cylinder047.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.052"]}
          geometry={nodes.Cylinder047_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.051"]}
          geometry={nodes.Cylinder047_2.geometry}
        />
      </group>
      <group
        name="bagapple"
        position={[-0.39, 0.35, 5.26]}
        rotation={[-Math.PI, -1.57, -2.69]}
        scale={[1.15, 0.29, 1.11]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.078"]}
          geometry={nodes.Sphere004.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.077"]}
          geometry={nodes.Sphere004_1.geometry}
        />
      </group>
      <group
        position={[-0.09, 0.27, 5.11]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.59, 0.35, 0.94]}
        onClick={() => {
          campingbagAnimation();
        }}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.075"]}
          geometry={nodes.Cube004.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.074"]}
          geometry={nodes.Cube004_1.geometry}
        />
      </group>
      <group
        name="bagbread"
        position={[0.01, 0.19, 4.96]}
        rotation={[3.04, 0.02, 1.56]}
        scale={[0.54, 0.93, 0.54]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.073"]}
          geometry={nodes.Cylinder010.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.072"]}
          geometry={nodes.Cylinder010_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.071"]}
          geometry={nodes.Cylinder010_2.geometry}
        />
      </group>
      <group
        name="bagcheese"
        position={[0.28, 0.36, 5.24]}
        rotation={[-1.87, 0.01, 1.57]}
        scale={[1.05, 0.43, 1.05]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.034"]}
          geometry={nodes.Cylinder008.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.035"]}
          geometry={nodes.Cylinder008_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.063"]}
          geometry={nodes.Cylinder008_2.geometry}
        />
      </group>
      <group
        name="bagcover"
        position={[0.18, 0.61, 5.12]}
        rotation={[-3.14, 0, 3.14]}
        scale={[0.26, 0.01, 0.35]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.075"]}
          geometry={nodes.Cube001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.074"]}
          geometry={nodes.Cube001_1.geometry}
        />
      </group>
      <group
        name="bagwine"
        position={[-0.12, 0.26, 5.11]}
        rotation={[0.12, 0.05, -1.23]}
        scale={[1.68, 1.96, 1.68]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.032"]}
          geometry={nodes.Cylinder007.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.031"]}
          geometry={nodes.Cylinder007_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.033"]}
          geometry={nodes.Cylinder007_2.geometry}
        />
      </group>
      <group
        position={[3.36, 1.06, -1.92]}
        rotation={[0, -0.3, 0]}
        scale={[0.45, 0.1, 0.45]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.068"]}
          geometry={nodes.Cylinder017.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.066"]}
          geometry={nodes.Cylinder017_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.067"]}
          geometry={nodes.Cylinder017_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.065"]}
          geometry={nodes.Cylinder017_3.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.064"]}
          geometry={nodes.Cylinder017_4.geometry}
        />
      </group>
      <group
        name="barbequecover"
        position={[5.27, 1.27, -2.04]}
        rotation={[-0.01, -0.3, -1.58]}
        scale={[0.57, 0.98, 0.64]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.062"]}
          geometry={nodes.Cylinder016.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.065"]}
          geometry={nodes.Cylinder016_1.geometry}
        />
      </group>
      <group
        name="barbequeMeat1"
        position={[3.29, 1.15, -1.95]}
        rotation={[2.85, -0.92, 2.85]}
        scale={[0.95, 0.7, 0.95]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.066"]}
          geometry={nodes.Cylinder015.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.067"]}
          geometry={nodes.Cylinder015_1.geometry}
        />
      </group>
      <group
        name="barbequeMeat2"
        position={[3.44, 1.27, -1.9]}
        rotation={[-0.12, -1.05, -0.4]}
        scale={[0.95, 0.7, 0.95]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.066"]}
          geometry={nodes.Cylinder014.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.067"]}
          geometry={nodes.Cylinder014_1.geometry}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke"
        material={materials.Material}
        geometry={nodes.grillsmoke.geometry}
        position={[4.62, 0.76, -2.11]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke001"
        material={materials.Material}
        geometry={nodes.grillsmoke001.geometry}
        position={[4.92, 0.76, -2.11]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke002"
        material={materials.Material}
        geometry={nodes.grillsmoke002.geometry}
        position={[4.83, 0.76, -1.91]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke003"
        material={materials.Material}
        geometry={nodes.grillsmoke003.geometry}
        position={[4.83, 0.76, -2.33]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke004"
        material={materials.Material}
        geometry={nodes.grillsmoke004.geometry}
        position={[4.66, 0.76, -2.33]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke005"
        material={materials.Material}
        geometry={nodes.grillsmoke005.geometry}
        position={[5.08, 0.76, -2.08]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke006"
        material={materials.Material}
        geometry={nodes.grillsmoke006.geometry}
        position={[5.58, 0.76, -1.76]}
        rotation={[0, 0.9, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke007"
        material={materials.Material}
        geometry={nodes.grillsmoke007.geometry}
        position={[5.77, 0.76, -1.99]}
        rotation={[0, 0.9, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke008"
        material={materials.Material}
        geometry={nodes.grillsmoke008.geometry}
        position={[5.87, 0.76, -1.8]}
        rotation={[0, 0.9, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke009"
        material={materials.Material}
        geometry={nodes.grillsmoke009.geometry}
        position={[5.54, 0.76, -2.06]}
        rotation={[0, 0.9, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke010"
        material={materials.Material}
        geometry={nodes.grillsmoke010.geometry}
        position={[5.43, 0.76, -1.92]}
        rotation={[0, 0.9, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        receiveShadow
        castShadow
        name="grillsmoke011"
        material={materials.Material}
        geometry={nodes.grillsmoke011.geometry}
        position={[5.89, 0.76, -2.1]}
        rotation={[0, 0.9, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <group
        name="fire"
        position={[3.18, 0.66, 2.94]}
        rotation={[0, 0.48, 0]}
        scale={[2.03, 2.91, 2.04]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.009"]}
          geometry={nodes.Icosphere019.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.008"]}
          geometry={nodes.Icosphere019_1.geometry}
        />
      </group>
      <group
        name="smallwood"
        position={[4.96, 0.36, 2.25]}
        rotation={[1.38, -0.68, 2.85]}
        scale={[1.07, 1.07, 1.07]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Cylinder021.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.004"]}
          geometry={nodes.Cylinder021_1.geometry}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        name="smoke"
        material={materials["Material.002"]}
        geometry={nodes.smoke.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke001"
        material={materials["Material.002"]}
        geometry={nodes.smoke001.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke002"
        material={materials["Material.002"]}
        geometry={nodes.smoke002.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke003"
        material={materials["Material.002"]}
        geometry={nodes.smoke003.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke004"
        material={materials["Material.002"]}
        geometry={nodes.smoke004.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        name="smoke005"
        material={materials["Material.002"]}
        geometry={nodes.smoke005.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke006"
        material={materials["Material.002"]}
        geometry={nodes.smoke006.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke007"
        material={materials["Material.002"]}
        geometry={nodes.smoke007.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke008"
        material={materials["Material.002"]}
        geometry={nodes.smoke008.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke009"
        material={materials["Material.002"]}
        geometry={nodes.smoke009.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke010"
        material={materials["Material.002"]}
        geometry={nodes.smoke010.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke011"
        material={materials["Material.002"]}
        geometry={nodes.smoke011.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke012"
        material={materials["Material.002"]}
        geometry={nodes.smoke012.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="smoke013"
        material={materials["Material.002"]}
        geometry={nodes.smoke013.geometry}
        position={[3.21, 0.6, 3.02]}
        scale={[0.17, 0.17, 0.17]}
      />
      <group
        position={[2.1, -0.02, 3.47]}
        rotation={[0, -0.87, 0]}
        scale={[0.77, 0.64, 0.67]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.001"]}
          geometry={nodes.Icosphere001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Icosphere001_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.004"]}
          geometry={nodes.Icosphere001_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.006"]}
          geometry={nodes.Icosphere001_3.geometry}
        />
      </group>
      <group
        name="ax"
        position={[-0.99, 1.46, -3.37]}
        rotation={[2.44, -0.78, 2.19]}
        scale={[-0.07, -0.41, -0.08]}
        onClick={() => {
          axwoodAnimation();
        }}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.025"]}
          geometry={nodes.Cylinder005.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.028"]}
          geometry={nodes.Cylinder005_1.geometry}
        />
      </group>
      {axarrow && (
        <mesh
          receiveShadow
          castShadow
          name="Axarrow"
          material={materials["Material.012"]}
          geometry={nodes.Axarrow.geometry}
          position={[-1.25, 3.23, -3.4]}
          scale={[0.37, 0.5, 0.07]}
        />
      )}
      <group position={[-3.12, 0.78, -3.04]} rotation={[1.57, 0.09, 3.07]}>
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.022"]}
          geometry={nodes.Cylinder003.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["bigwoodinner.002"]}
          geometry={nodes.Cylinder003_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.017"]}
          geometry={nodes.Cylinder003_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.011"]}
          geometry={nodes.Cylinder003_3.geometry}
        />
      </group>
      <group
        name="smallwood1001"
        position={[-1.4, 1.06, -3.33]}
        rotation={[3.14, -0.06, 3.14]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.022"]}
          geometry={nodes.Cylinder002.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["bigwoodinner.002"]}
          geometry={nodes.Cylinder002_1.geometry}
        />
      </group>
      <group
        name="smallwood1002"
        position={[-1.4, 1.06, -3.33]}
        rotation={[0, 0.06, 0]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.022"]}
          geometry={nodes.Cylinder001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["bigwoodinner.002"]}
          geometry={nodes.Cylinder001_1.geometry}
        />
      </group>
      {bagarrow && (
        <mesh
          receiveShadow
          castShadow
          name="Axarrow001"
          material={materials["Material.012"]}
          geometry={nodes.Axarrow001.geometry}
          position={[0, 2.12, 4.2]}
          scale={[0.37, 0.5, 0.07]}
        />
      )}
    </group>
  );
};

const Homepage = () => {
  return (
    <div className="Homepage">
      <Canvas
        colorManagement
        shadowMap
        style={{
          position: "sticky",
          height: "100vh",
          width: "auto",
        }}
        camera={{ position: [0, 5, 12], fov: 50 }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <Physics>
          <Lights />
          <Plane />
          <Suspense fallback={null}>
            <HomeModel />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
};

export default Homepage;
