import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarCompo from "./components/navbar";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import ResourcePage from "./components/ResourcePage";
import FooterPage from "./components/FooterPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarCompo />
      <div className="">
        <section id="home" className="h-screen  items-center justify-center">
          <HomePage />
        </section>
        <section
          id="features"
          className="h-screen  flex items-center justify-center"
        >
          <FeaturesPage />
        </section>
        <section
          id="resources"
          className="h-screen  flex items-center justify-center"
        >
          <ResourcePage />
        </section>
        <section id="team">
          <FooterPage />
        </section>
      </div>
    </>
  );
}

export default App;
