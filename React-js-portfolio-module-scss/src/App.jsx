import React from "react";
import Header from "./components/header";
import Skills from "./components/skills";
import AboutMe from "./components/aboutme";
import Certifications from "./components/Certifications";
import SocialPlatforms from "./components/SocialPlatforms";
import Hobby from "./components/Hobby";
import ContactMe from "./components/ContactMe"; 
import "./App.scss"; // Stil faylı

function App() {
  return (
    <div className="App">
      {/* Başlıq hissəsi */}
      <Header />

      {/* Haqqımda Bölməsi */}
      <AboutMe />

      {/* Bacarıqlar Bölməsi */}
      <Skills />
      {<Certifications />}

      {/* Sosial Media Platformaları */}
      <SocialPlatforms />

      {/* Hobby Bölməsi */}
      <Hobby />

      {/* Əlaqə Bölməsi */}
      <ContactMe />
    </div>
  );
}

export default App;
