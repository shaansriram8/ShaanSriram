import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
function App() {
  return (
    <div>
      <Header />
      <Container />
      <Experience />
      <Resume />
    </div>
  );
}

export default App;
