import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const InnovationCounsel = () => {
  const [iicModel, eventsModel, loginModel] = useGLTF(
    ["/models/ss2.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={ICScreen}
      position={[-60, 0, -40]}
      title="Bid-Mate"
      rotation={[0, -Math.PI / 2, 0]}
      model={iicModel}
      modelRight={eventsModel}
      modelLeft={loginModel}
    />
  );
};

export default InnovationCounsel;

const ICScreen: React.FC = () => (
  <PlateScreen
    title="Bid-Mate"
    description="The Web Application for the purpose of conducting auctions for various products.The auctioneer can conduct the auction and the bidder can bid for the respective product.Utilised React-JS for the frontend and Nodejs for the backend."
    visitLink=""
    codeLink="https://github.com/Harshsbhosal96/Bid-Mate"
  />
);
