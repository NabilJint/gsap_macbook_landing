import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const StudioLight = () => {
  return (
    // A "Studio Light" setup for nice, clean lighting in R3F
    <group name="light">
      {/* 
    ENVIRONMENT LIGHT 
    - Creates soft global light around the entire scene
    - The Lightformers inside it act like big glowing panels
    - Makes objects look evenly lit and reflective
  */}
      <Environment resolution={256}>
        {/* 
      This group simply organizes the two Lightformers 
      (like putting them in a small folder)
    */}
        <group>
          {/* 
        LIGHTFORMER #1 (Left Side Soft Light)
        - A big glowing rectangle
        - Gives soft, smooth lighting from the left
        - Helps reduce harsh shadows
        - Great for reflections on shiny surfaces
      */}
          <Lightformer
            form="rect" // Make this light a rectangle panel
            intensity={10} // How bright the panel glows
            position={[-10, 5, -5]} // Put it left, a bit up, and slightly behind
            scale={10} // Make the panel big (bigger = softer light)
            rotation-y={Math.PI / 2} // Rotate to face the object
          />

          {/* 
        LIGHTFORMER #2 (Right Side Soft Light)
        - Same idea as above, but placed on the right side
        - Balances the lighting so one side isn't too dark
      */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]} // Put it on the right side
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/* 
    SPOTLIGHT #1 (Main / Key Light)
    - Like a flashlight shining from above-left
    - Adds shape and makes the object look 3D
  */}
      <spotLight
        position={[-2, 10, 5]} // Above and slightly left
        angle={0.15} // Narrow beam of light
        decay={0} // Light doesn't fade (keeps scene bright)
        intensity={Math.PI * 0.2} // Medium brightness
      />

      {/* 
    SPOTLIGHT #2 (Bottom Fill Light)
    - Shines from below the object
    - Fills in dark shadows from underneath
    - Makes lighting look cleaner and more professional
  */}
      <spotLight
        position={[0, -25, 10]} // Put this light below the object
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2} // Medium brightness
      />

      {/* 
    SPOTLIGHT #3 (Highlight / Accent Light)
    - Shines from above and front
    - Adds bright highlights and contrast
    - Makes the object pop and look premium
  */}
      <spotLight
        position={[0, 15, 5]} // Above and in front
        angle={0.15}
        decay={0.1} // Slight realistic fade
        intensity={Math.PI * 1} // Bright highlight light
      />
    </group>
  );
};

export default StudioLight;
