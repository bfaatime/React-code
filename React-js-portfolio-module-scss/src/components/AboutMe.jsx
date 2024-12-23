import React from "react";
import profilePicture from "../images/fatiam.jpg";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me-content">
        <img
          src={profilePicture}
          alt="Fatimə Bəxşəliyeva"
          className="profile-image"
        />
        <div className="about-me-text">
          <h2>Haqqımda</h2>
          <p>
            Mən Bəxşəliyeva Fatimə. Azərbaycan Memarlıq və İnşaat Universitetində
            Marketinq ixtisası üzrə təhsil alıram. Hazırda əlavə olaraq Front-end əsaslı
            Full Stack təhsili alıram Code Academy-də.
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default AboutMe;
