import { useState } from "react";

import "./App.css";
import CoverModal from "./components/CoverModal";

function App() {
  return (
    <>
      <CoverModal isOpen={true} onOpen={() => console.log("Modal opened")} />
    </>
  );
}

export default App;
