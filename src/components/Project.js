import React, { useRef, Suspense, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, animated } from "@react-spring/three";
import { useHover } from "react-use-gesture";
import { Physics, usePlane } from "@react-three/cannon";
import * as THREE from "three";
import "../styles/Project.css";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-10, 10, 15]}
        intensity={1.7}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={1000}
        shadow-camera-near={0.01}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
    </>
  );
};

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const [ref2] = usePlane(() => ({ position: [0, 0, -30], ...props }));
  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshLambertMaterial attach="material" color="#514945" />
      </mesh>
      <mesh ref={ref2} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshLambertMaterial attach="material" color="#413a37" />
      </mesh>
    </>
  );
};

const ProjectModels = (props) => {
  const {
    setreusdRight,
    reusdRight,
    bakedLeft,
    setbakedLeft,
    bakedRight,
    setbakedRight,
    fireLeft,
    setfireLeft,
  } = props;

  const group = useRef();
  const { nodes, materials } = useGLTF("/models/ProjectModels.glb");
  const [hovered, setHovered] = useState(false);

  const [reusdRightpo, setreusdRightpo] = useState([-20.3, 0.05, 5]);
  const [fireferretLeftpo, setfireferretLeftpo] = useState([20.8, 0.05, 4.49]);
  const [bakedLeftpo, setbakedLeftpo] = useState([-1, 0.05, 4.49]);
  const [bakedRightpo, setbakedRightpo] = useState([1, 0.05, 4.49]);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const dummy = new THREE.Vector3();
  useFrame((state, delta) => {
    const step = 0.05;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 58, step);
    state.camera.position.lerp(
      dummy.set(
        bakedRight ? 22 : fireLeft ? 0 : bakedLeft ? -21 : reusdRight ? 1 : 0,
        bakedRight ? 5 : fireLeft ? 5 : bakedLeft ? 5 : reusdRight ? 5 : 5,
        bakedRight ? 12 : fireLeft ? 12 : bakedLeft ? 12 : reusdRight ? 12 : 12
      ),
      step
    );
    state.camera.lookAt(
      bakedRight ? 22 : fireLeft ? 0 : bakedLeft ? -21 : reusdRight ? 0 : 0,
      bakedRight ? 2 : fireLeft ? 2 : bakedLeft ? 2 : reusdRight ? 2 : 2,
      bakedRight ? 0 : fireLeft ? 0 : bakedLeft ? 0 : reusdRight ? 0 : 0
    );
    state.camera.updateProjectionMatrix();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0.58, 2.77, -2.46]}
        rotation={[0, -0.22, 0]}
        scale={[5.02, 2.75, -0.34]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.002"]}
          geometry={nodes.Cube001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.003"]}
          geometry={nodes.Cube001_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Screen Shot 2021-04-11 at 12.34.29 PM"]}
          geometry={nodes.Cube001_2.geometry}
        />
      </group>
      <group
        position={[-4.52, 0.01, -0.31]}
        rotation={[1.57, 0, 0.22]}
        scale={[0.63, 0.63, 0.63]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25.005"]}
          geometry={nodes.Text_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials.Material}
          geometry={nodes.Text_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.006"]}
          geometry={nodes.Text_3.geometry}
        />
      </group>
      <group
        position={[22.31, 2.77, -2.58]}
        rotation={[0, -0.23, 0]}
        scale={[5.02, 2.75, -0.34]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.002"]}
          geometry={nodes.Cube002.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.003"]}
          geometry={nodes.Cube002_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Screen Shot 2021-04-11 at 12.35.49 PM"]}
          geometry={nodes.Cube002_2.geometry}
        />
      </group>
      <group
        position={[18.37, 0.01, -0.71]}
        rotation={[1.57, 0, 0.23]}
        scale={[0.63, 0.63, 0.63]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text007.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25.005"]}
          geometry={nodes.Text007_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials.Material}
          geometry={nodes.Text007_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Text007_3.geometry}
        />
      </group>
      <group
        position={[-20.81, 2.77, -2.56]}
        rotation={[0, -0.27, 0]}
        scale={[5.02, 2.75, -0.34]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.002"]}
          geometry={nodes.Cube003.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.003"]}
          geometry={nodes.Cube003_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Screen Shot 2021-04-11 at 1.29.31 PM"]}
          geometry={nodes.Cube003_2.geometry}
        />
      </group>
      <group
        position={[-24.84, 0.01, -0.85]}
        rotation={[1.57, 0, 0.27]}
        scale={[0.63, 0.63, 0.63]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text014.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25.005"]}
          geometry={nodes.Text014_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials.Material}
          geometry={nodes.Text014_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.008"]}
          geometry={nodes.Text014_3.geometry}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.001"]}
        geometry={nodes.reusdright.geometry}
        position={reusdRightpo}
        rotation={[1.57, 0, -0.01]}
        scale={[0.55, 0.29, 0.14]}
        onPointerOver={() => {
          setHovered(true);
          setreusdRightpo([-20.3, 0.3, 5]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setreusdRightpo([-20.3, 0.05, 5]);
        }}
        onClick={() => {
          setfireLeft(!fireLeft);
          setbakedRight(false);
          setreusdRight(false);
          setbakedLeft(false);
        }}
      />
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.001"]}
        geometry={nodes.fireferretleft.geometry}
        position={fireferretLeftpo}
        rotation={[1.57, 0, -Math.PI]}
        scale={[0.55, 0.29, 0.14]}
        onPointerOver={() => {
          setHovered(true);
          setfireferretLeftpo([20.8, 0.3, 4.49]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setfireferretLeftpo([20.8, 0.05, 4.49]);
        }}
        onClick={() => {
          setfireLeft(!fireLeft);
          setbakedRight(false);
          setreusdRight(false);
          setbakedLeft(false);
        }}
      />
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.001"]}
        geometry={nodes.bakedleft.geometry}
        position={bakedLeftpo}
        rotation={[1.57, 0, -Math.PI]}
        scale={[0.55, 0.29, 0.14]}
        onPointerOver={() => {
          setHovered(true);
          setbakedLeftpo([-1, 0.3, 4.49]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setbakedLeftpo([-1, 0.05, 4.49]);
        }}
        onClick={() => {
          setbakedLeft(!bakedLeft);
          setbakedRight(false);
          setfireLeft(false);
          setreusdRight(false);
        }}
      />
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.001"]}
        geometry={nodes.bakedright.geometry}
        position={bakedRightpo}
        rotation={[1.57, 0, -0.01]}
        scale={[0.55, 0.29, 0.14]}
        onPointerOver={() => {
          setHovered(true);
          setbakedRightpo([1, 0.3, 4.49]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setbakedRightpo([1, 0.05, 4.49]);
        }}
        onClick={() => {
          setbakedRight(!bakedRight);
          setbakedLeft(false);
          setfireLeft(false);
          setreusdRight(false);
        }}
      />
    </group>
  );
};

const Project = () => {
  const [reusdRight, setreusdRight] = useState(false);
  const [bakedLeft, setbakedLeft] = useState(false);
  const [bakedRight, setbakedRight] = useState(false);
  const [fireLeft, setfireLeft] = useState(false);
  const bakedBreadLink = (e) => {
    e.preventDefault();
    window.open("https://bakedbread-385c4.web.app", "_blank");
  };

  return (
    <div className="Project">
      <section className="Project_left">
        {!reusdRight && !bakedLeft && !bakedRight && !fireLeft && (
          <div className="Project_bakedbread">
            <h1>BakedBread</h1>
            <p>
              The BakedBread is a personal project that I created to experiment
              with visual and user interactions. I am a big bread lover and
              always enjoy visiting bakeries. I imagine being the bakery owner
              and built this website to allow customers to get a good idea of
              this bakery.
            </p>
            <button onClick={bakedBreadLink}>Visit The Site</button>
          </div>
        )}
        {reusdRight && (
          <div className="Project_bakedbread">
            <h1>BakedBread</h1>
            <p>
              The BakedBread is a personal project that I created to experiment
              with visual and user interactions. I am a big bread lover and
              always enjoy visiting bakeries. I imagine being the bakery owner
              and built this website to allow customers to get a good idea of
              this bakery.
            </p>
            <button onClick={bakedBreadLink}>Visit The Site</button>
          </div>
        )}
        {bakedLeft && (
          <div className="Project_reusd">
            <h1>Reusd</h1>
            <h4>
              The Reusd is a project that I was part of in 2020 as university
              capstone project.
            </h4>
            <p>
              This web application allow people to buy and sell used stuff
              online. It allow people to sell or buy their used stuff with their
              neighbors by meeting each other in person. This app also ask the
              buyers to start the private chat within the website to contact the
              sellers instead of sellers posting their phone number or email
              address to the public.{" "}
            </p>
            {/* <button>Visit The Site</button> */}
          </div>
        )}
        {bakedRight && (
          <div className="Project_fireferret">
            <h1>FireFerrets</h1>
            <h4>
              The FireFerrets is a project I was part of in 2020 with 2
              university team member as group project.
            </h4>
            <p>
              The primary goal of this app is to provide a summary of
              information related to travelling to states during the COVID-19
              pandemic. Though intended for travellers, this app can also be
              used to track changes in policy for one’s own state.
            </p>
            {/*  <button>Visit The Site</button>*/}
          </div>
        )}
        {fireLeft && (
          <div className="Project_bakedbread">
            <h1>BakedBread</h1>
            <p>
              The BakedBread is a personal project that I created to experiment
              with visual and user interactions. I am a big bread lover and
              always enjoy visiting bakeries. I imagine being the bakery owner
              and built this website to allow customers to get a good idea of
              this bakery.
            </p>
            <button onClick={bakedBreadLink}>Visit The Site</button>
          </div>
        )}
      </section>
      <section className="Project_right">
        <Canvas
          colorManagement
          shadowMap
          style={{
            position: "sticky",
            height: "100vh",
            width: "auto",
          }}
          camera={{ position: [1, 2, 5], fov: 80 }}
          onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        >
          <Physics>
            <Lights />
            <Plane />
            <Suspense fallback={null}>
              <ProjectModels
                reusdRight={reusdRight}
                setreusdRight={setreusdRight}
                bakedLeft={bakedLeft}
                setbakedLeft={setbakedLeft}
                bakedRight={bakedRight}
                setbakedRight={setbakedRight}
                fireLeft={fireLeft}
                setfireLeft={setfireLeft}
              />
            </Suspense>
          </Physics>
        </Canvas>
      </section>
    </div>
  );
};

export default Project;
