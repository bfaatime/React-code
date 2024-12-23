import React from "react";
import styles from "./AboutMe.module.scss"; // CSS modülünü import et
import profilePicture1 from "../../images/fatiam.jpg"; // Resmi import et

function AboutMe() {
  return (
    <section id="about-me" className={styles.aboutMe}> {/* className ile CSS modülünü kullan */}
      <div className={styles.aboutMeContent}> {/* CSS modülünü kullan */}
        <img
          src={profilePicture1}
          alt="Fatimə Bəxşəliyeva"
          className={styles.profileImage} // CSS modülünü kullan
        />
        <div className={styles.aboutMeText}> {/* CSS modülünü kullan */}
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
