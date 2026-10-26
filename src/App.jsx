import { useState } from "react";

import "./App.css";
import CoverModal from "./components/CoverModal";
import Home from "./components/Home";

function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const handleOpenInvitation = () => {
    setIsCoverOpen(false);
  };
  return (
    <>
      <CoverModal isOpen={isCoverOpen} onOpen={handleOpenInvitation} />
      <Home />
    </>
  );
}

export default App;
