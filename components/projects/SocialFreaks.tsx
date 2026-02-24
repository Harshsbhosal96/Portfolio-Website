import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const SocialFreaks = () => {
  const [sfModel, mfModel, fsModel] = useGLTF(
    ["/models/ss6.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={SFScreen}
      position={[-120, 0, -10]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Social-Freaks"
      model={sfModel}
      modelLeft={mfModel}
      modelRight={fsModel}
      scale={3}
    />
  );
};

export default SocialFreaks;

const SFScreen: React.FC = () => (
  <PlateScreen
    title="Bid-Mate"
    description=""
    visitLink=""
    codeLink=""
  />
);
