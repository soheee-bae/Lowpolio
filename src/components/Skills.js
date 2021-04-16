import React, { useRef, Suspense, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from "@react-spring/three";
import { useHover } from "react-use-gesture";
import { Physics, usePlane } from "@react-three/cannon";
import "../styles/Skills.css";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";

function SkillModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/SkillModels.glb");
  const [hovered, setHovered] = useState(false);
  const { actions } = useAnimations(animations, group);

  const [zoom, set] = useState(false);
  const actionPlay = () => {
    actions.Arrow3Action.play();
    actions.Arrow2Action.play();
    actions.ArrowAction.play();
  };
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  useEffect(() => {
    actionPlay();
  }, []);

  const [Cssposition, setCss] = useState([-2.26, 0.06, -2.69]);
  const [Htmlposition, setHtml] = useState([-2.25, 0.06, -3.74]);
  const [JSposition, setJS] = useState([-2.25, 0.06, -1.74]);
  const [MongoDBposition, setMongoDB] = useState([-2.26, 0.06, 3.2]);
  const [Nodeposition, setNode] = useState([-2.24, 0.06, 0.23]);
  const [Reactposition, setReact] = useState([-2.26, 0.06, -0.71]);
  const [Sketch, setSketch] = useState([-2.25, 0.06, 2.2]);
  const [UIposition, setUI] = useState([-2.25, 0.06, 1.21]);
  const [Clickme, setClickme] = useState([0.01, 0.01, 0.01]);

  const dummy = new THREE.Vector3();
  useFrame((state, delta) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 65 : 60,
      step
    );
    state.camera.position.lerp(
      dummy.set(zoom ? 0 : 0, zoom ? 9 : 14, zoom ? 9 : 0),
      step
    );
    state.camera.lookAt(0, 0, -0.5);
    state.camera.updateProjectionMatrix();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Css"
        position={Cssposition}
        rotation={[0, -0.01, -0.01]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setCss([-2.26, 0.5, -2.69]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setCss([-2.26, 0.06, -2.69]);
        }}
      >
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.014"]}
          geometry={nodes.Text001_1.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["lambert18.042"]}
          geometry={nodes.Text001_2.geometry}
        />
        <mesh
          receiveShadow
          castShadow
          material={materials["Material.005"]}
          geometry={nodes.Text001_3.geometry}
        />
      </group>
      <mesh
        name="Fense_1001"
        material={materials["lambert37.034"]}
        geometry={nodes.Fense_1001.geometry}
        position={[4.89, 0, 4.76]}
        rotation={[Math.PI / 2, 0, -1.59]}
        scale={[0.01, 0.01, 0.01]}
        receiveShadow
        castShadow
      />
      <mesh
        material={materials["Material.013"]}
        geometry={nodes.floor.geometry}
        position={[3.97, 0, -0.37]}
        scale={[3.2, 5.2, 4.47]}
        receiveShadow
        castShadow
      />
      <group
        name="Html"
        position={Htmlposition}
        rotation={[0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setHtml([-2.25, 0.5, -3.74]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setHtml([-2.25, 0.06, -3.74]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.042"]}
          geometry={nodes.Text_2.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.005"]}
          geometry={nodes.Text_3.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        name="JS"
        position={JSposition}
        rotation={[0, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setJS([-2.25, 0.5, -1.74]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setJS([-2.25, 0.06, -1.74]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text002.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.008"]}
          geometry={nodes.Text002_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.007"]}
          geometry={nodes.Text002_2.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        name="Mongodb"
        position={MongoDBposition}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setMongoDB([-2.26, 0.5, 3.2]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setMongoDB([-2.26, 0.06, 3.2]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text005.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.009"]}
          geometry={nodes.Text005_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.039"]}
          geometry={nodes.Text005_2.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        name="Node"
        position={Nodeposition}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setNode([-2.24, 0.5, 0.23]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setNode([-2.24, 0.06, 0.23]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text004.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.009"]}
          geometry={nodes.Text004_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.039"]}
          geometry={nodes.Text004_2.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        name="React"
        position={Reactposition}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setReact([-2.26, 0.5, -0.71]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setReact([-2.26, 0.06, -0.71]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text003.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.042"]}
          geometry={nodes.Text003_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.005"]}
          geometry={nodes.Text003_2.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        name="sketch"
        position={Sketch}
        rotation={[0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setSketch([-2.25, 0.5, 2.2]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setSketch([-2.25, 0.06, 2.2]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text007.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.008"]}
          geometry={nodes.Text007_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.007"]}
          geometry={nodes.Text007_2.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        name="UI"
        position={UIposition}
        rotation={[-0.01, -0.01, 0]}
        scale={[0.504, 1, 0.537]}
        onPointerOver={() => {
          setHovered(true);
          setUI([-2.25, 0.5, 1.21]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setUI([-2.25, 0.06, 1.21]);
        }}
      >
        <mesh
          material={materials["Material.014"]}
          geometry={nodes.Text006.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.008"]}
          geometry={nodes.Text006_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material.007"]}
          geometry={nodes.Text006_2.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <group
        position={[3.19, 0, -1.2]}
        rotation={[Math.PI / 2, 0, 0.01]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh
          material={materials["Material #25"]}
          geometry={nodes.Mesh.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["Material #25.005"]}
          geometry={nodes.Mesh_1.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        material={materials["Material.001"]}
        geometry={nodes.Text008.geometry}
        position={[-9.71, 0.1, -0.13]}
        rotation={[0, 0, 0]}
        scale={[0.76, 1.51, 0.81]}
        receiveShadow
        castShadow
      />
      <mesh
        material={materials["Material.008"]}
        geometry={nodes.Text.geometry}
        position={[-2.3, 0.04, 5.66]}
        scale={[0.4, 0.4, 0.4]}
        receiveShadow
        castShadow
      />
      <mesh
        name="Arrow"
        material={materials["Material.008"]}
        geometry={nodes.Arrow.geometry}
        position={[-1.59, -0.41, 5]}
        rotation={[0, -0.77, 0]}
        scale={[0.1, 0.07, 0.1]}
        receiveShadow
        castShadow
      />
      <mesh
        name="Arrow2"
        material={materials["Material.008"]}
        geometry={nodes.Arrow2.geometry}
        position={[-1.59, -0.4, 4.59]}
        rotation={[0, -0.77, 0]}
        scale={[0.1, 0.07, 0.1]}
        receiveShadow
        castShadow
      />
      <mesh
        name="Arrow3"
        material={materials["Material.008"]}
        geometry={nodes.Arrow3.geometry}
        position={[-1.59, -0.42, 4.17]}
        rotation={[0, -0.77, 0]}
        scale={[0.1, 0.07, 0.1]}
        receiveShadow
        castShadow
      />
      <group
        position={[-4.73, 0, -3.88]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh
          material={materials["lambert18.001"]}
          geometry={nodes.Mesh029.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials["lambert18.002"]}
          geometry={nodes.Mesh029_1.geometry}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        material={materials["lambert18.001"]}
        geometry={nodes.wheat1001.geometry}
        position={[9.32, 0, 4.5]}
        rotation={[Math.PI / 2, 0, -1.17]}
        scale={Clickme}
        receiveShadow
        castShadow
        onPointerOver={() => {
          setHovered(true);
          setClickme([0.011, 0.01, 0.011]);
        }}
        onPointerOut={() => {
          setHovered(false);
          setClickme([0.01, 0.01, 0.01]);
        }}
        onClick={() => set(!zoom)}
      />
      <mesh
        material={materials["Material.008"]}
        geometry={nodes.Text001.geometry}
        position={[8.6, 0.04, 5.66]}
        scale={[0.4, 0.4, 0.4]}
        receiveShadow
        castShadow
      />
    </group>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[-6, 8, 5]}
        intensity={1}
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
      <meshLambertMaterial attach="material" color="#7D5646" />
    </mesh>
  );
};

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skill-right">
        <Canvas
          colorManagement
          shadowMap
          style={{
            position: "sticky",
            height: "100vh",
            width: "auto",
          }}
          camera={{ position: [0, 14, 0], fov: 100 }}
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
