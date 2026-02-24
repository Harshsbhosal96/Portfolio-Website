import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const Chat = () => {
  const chatModel = useGLTF("/models/Untitled.glb", true);

  return (
    <Project
      ScreenComponent={ChatScreen}
      position={[-120, 0, -70]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Huffman Coding"
      model={chatModel}
      scale={[2, 1.8, 2]}
    />
  );
};

export default Chat;

const ChatScreen: React.FC = () => (
  <PlateScreen
    title="Huffman Coding"
    description="A data structure based project used to reduce the size of the files. Any type of file input is turned as a small file as output"
    visitLink="https://whats-clone-1c76b.web.app/"
    codeLink="https://github.com/Harshsbhosal96/Huffman-Coding"
  />
);
