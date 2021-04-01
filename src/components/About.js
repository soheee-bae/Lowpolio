import React, { useRef, Suspense, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Physics, usePlane } from "@react-three/cannon";
import "../styles/About.css";
import * as THREE from "three";
import { useAnimations } from "@react-three/drei";
import earths from "../img/earth.png";
import books from "../img/book.png";
import puz from "../img/puzzel.png";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-5, 7, 5]}
        intensity={1.7}
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
      <meshLambertMaterial attach="material" color="#DA821E" />
    </mesh>
  );
};

function AboutModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/AboutModels.glb");
  const { actions } = useAnimations(animations, group);

  const AboutAnimation = () => {
    actions.BookAction.play();
    actions.puz2Action.play();
    actions.earthAction.play();
  };

  useEffect(() => {
    AboutAnimation();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="earth"
        position={[1.07, 2.09, -2.14]}
        rotation={[2.2, -1.08, -0.74]}
        scale={[0.496, 0.496, 0.496]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.006"]}
          geometry={nodes.Icosphere004.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.007"]}
          geometry={nodes.Icosphere004_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.008"]}
          geometry={nodes.Icosphere004_2.geometry}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.009"]}
        geometry={nodes.puz1.geometry}
        position={[-2.11, 1.99, -1.35]}
        rotation={[0, 0.41, 0]}
        scale={[0.25, 0.25, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        name="puz2"
        material={materials["Material.010"]}
        geometry={nodes.puz2.geometry}
        position={[-1.42, 1.42, -1.07]}
        rotation={[1.56, 0, -1.42]}
        scale={[0.25, 0.25, 0.17]}
      />
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.011"]}
        geometry={nodes.puz3.geometry}
        position={[-2.35, 1.5, -1.25]}
        rotation={[0, -1.17, -1.57]}
        scale={[0.12, 0.17, 0.13]}
      />
      <mesh
        receiveShadow
        castShadow
        material={materials["Material.012"]}
        geometry={nodes.puz4.geometry}
        position={[-1.64, 1.74, -1.55]}
        rotation={[1.57, 0, -0.41]}
        scale={[0.13, 0.17, 0.12]}
      />
      <group
        position={[0.39, 0.3, 0.83]}
        rotation={[0, 0.83, 0]}
        scale={[1, 0.298, 1]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.001"]}
          geometry={nodes.Cylinder003.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.003"]}
          geometry={nodes.Cylinder003_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.018"]}
          geometry={nodes.Cylinder003_2.geometry}
        />
      </group>
      <group
        name="Book"
        position={[2.11, 1.16, 1.1]}
        rotation={[0, -0.05, 0]}
        scale={[0.27, 0.05, 0.35]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.013"]}
          geometry={nodes.Cube001.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.004"]}
          geometry={nodes.Cube001_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Cube001_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.015"]}
          geometry={nodes.Cube001_3.geometry}
        />
      </group>
      <group
        position={[0.98, 0.56, 0.59]}
        rotation={[Math.PI / 2, 0, 2.72]}
        scale={[0.00342, 0.00342, 0.00342]}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.017"]}
          geometry={nodes.Mesh024.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material #25.005"]}
          geometry={nodes.Mesh024_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert37.035"]}
          geometry={nodes.Mesh024_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.021"]}
          geometry={nodes.Mesh024_3.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.002"]}
          geometry={nodes.Mesh024_4.geometry}
        />
      </group>
    </group>
  );
}

const About = () => {
  const [puzzel, setPuzzel] = useState(false);
  const [earth, setEarth] = useState(false);
  const [book, setBook] = useState(false);

  const handlePuzzel = () => {
    setPuzzel(!puzzel);
    setEarth(false);
    setBook(false);
  };
  const handleEarth = () => {
    setPuzzel(false);
    setEarth(!earth);
    setBook(false);
  };
  const handleBook = () => {
    setPuzzel(false);
    setEarth(false);
    setBook(!book);
  };
  return (
    <div className="about-container">
      <section className="first-section">
        <div className="about-split-left">
          <h1 className="about-para-title">ABOUT ME</h1>
          <div className="about-para">
            <p className="about-para-first">
              I have recently graduated from the University of Alaska Anchorage
              and ready to begin the next chapter of my life.
            </p>
            <p className="about-para-second">
              I spend my days crafting websites, learning web technologies, and
              keeping up-to-date with the freshest web design trends. I am
              passionate about learning new things and always willing to humble
              myself to continue growing.
            </p>
            {puzzel && (
              <div className="aboutitem">
                <p className="about-mini-item-para-title">Sociable</p>
                <p className="about-mini-item-para-area">
                  I have established myself as a team player throughout my
                  university, knowing how to effectively communicate and work
                  with other people.
                </p>
              </div>
            )}
            {earth && (
              <div className="aboutitem">
                <p className="about-mini-item-para-title">Adaptable</p>
                <p className="about-mini-item-para-area">
                  I have lived in several countries, and I can quickly acclimate
                  to different environments. I am open to new processes and
                  technologies.
                </p>
              </div>
            )}
            {book && (
              <div className="aboutitem">
                <p className="about-mini-item-para-title">Responsible</p>
                <p className="about-mini-item-para-area">
                  I always put responsibility as a primary priority. I ensure a
                  task is completed on time with high attention to detail.
                </p>
              </div>
            )}
          </div>
          <div className="about-icons">
            <img
              onClick={handlePuzzel}
              className="puzzel"
              src={puz}
              alt="puzzel"
              height="50px"
              width="auto"
            />
            <img
              onClick={handleEarth}
              className="earth"
              src={earths}
              alt="earth"
              height="50px"
              width="auto"
            />
            <img
              onClick={handleBook}
              className="book"
              src={books}
              alt="book"
              height="50px"
              width="auto"
            />
          </div>
        </div>
        <div className="about-split-right">
          <Canvas
            colorManagement
            shadowMap
            style={{
              position: "sticky",
              height: "90vh",
              width: "auto",
            }}
            camera={{ position: [0, 6, 8], fov: 45 }}
            onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
          >
            <Physics>
              <Lights />
              <Plane />
              <Suspense fallback={null}>
                <AboutModel />
              </Suspense>
            </Physics>
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default About;
