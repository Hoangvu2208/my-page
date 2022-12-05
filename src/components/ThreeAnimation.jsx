import { Canvas, extend, useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import React from "react";
import logo from "../images/avatar.jpg";

import { Cloud, Edges, Effects, OrbitControls, Sparkles } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";


extend({UnrealBloomPass})



const CanvasAnimation = () => {
    const repeatX = 1;
    const repeatY =1;
    const base = useLoader(THREE.TextureLoader, logo);
    base.wrapS = THREE.RepeatWrapping;
    base.wrapT = THREE.RepeatWrapping;
    base.repeat.set(repeatX, repeatY);



    return(
         //code here
         <Canvas shadow gl = {{antialias :false}}>
            <color attach="background" args={["#202030"]}  />
            {/* set mesh */}
            <mesh scale={1.5}>
                <boxGeometry />
                <meshPhysicalMaterial map={base} />

                {/* stoke arounf\d cube  */}

                {/* <Edges
                    scale={1.1}
                    threshold= {2}
                    color="#000000"
                /> */}

            </mesh>
            <directionalLight intensity={1} position={[10,10,10]} />
            <OrbitControls autoRotate enableZoom={false} />
            <orthographicCamera makeDefault far={500} position={[-10,2,-10]} zoom={100} />
            <hemisphereLight intensity={1} color="grey" groundColor="pink" />
            {/* galaxy effect */}
            <Sparkles count={1000} scale={[20, 35,10]} size={1} speed={0.02}  />

            <fog attach={"fog"} args = {["#202030",5,25] } />
            
            {/* cloud effect  */}
            <Cloud 
                opacity={0.12}
                speed={0.1}
                width={30}
                depth={0.1}
                segments={40}

            />
            {/* effect galema  */}
            <Effects disableGamma>
                <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
            </Effects>
           


         </Canvas>
    )
       
    
}
export default CanvasAnimation;