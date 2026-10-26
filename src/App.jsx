import { useState } from "react";

import "./App.css";
import CoverModal from "./components/CoverModal";
import Home from "./components/Home";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsCoverOpen(false);
    setIsPlaying(true);
  };
  return (
    <>
      <CoverModal isOpen={isCoverOpen} onOpen={handleOpenInvitation} />
      <Home />
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  );
}

export default App;
