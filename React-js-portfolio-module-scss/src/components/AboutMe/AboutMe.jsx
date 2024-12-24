import React from "react";
import styles from "./AboutMe.module.scss"; 
import profilePicture1 from "../../images/fatiam.jpg"; 

function AboutMe() {
  return (
    <section id="about-me" className={styles.aboutMe}> {}
      <div className={styles.aboutMeContent}> {}
        <img
          src={profilePicture1}
          alt="Fatimə Bəxşəliyeva"
          className={styles.profileImage} 
        />
        <div className={styles.aboutMeText}> {}
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
