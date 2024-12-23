import React from "react";
import Header from "./components/Header/Header"; 
import Skills from "./components/Skills/Skills";  
import AboutMe from "./components/AboutMe/AboutMe";  
import Certifications from "./components/Certifications/Certifications";  
import SocialPlatforms from "./components/SocialPlatforms/SocialPlatforms";  
import Hobby from "./components/Hobby/Hobby"; 
import ContactMe from "./components/ContactMe/ContactMe";  
import "./App.scss"; 

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Certifications />
      <SocialPlatforms />
      <Hobby />
      <ContactMe />
    </div>
  );
}

export default App;
