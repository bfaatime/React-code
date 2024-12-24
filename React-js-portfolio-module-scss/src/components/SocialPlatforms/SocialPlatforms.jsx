import React from "react";
import styles from "./SocialPlatforms.module.scss";
import { FaInstagram, FaGithub } from "react-icons/fa"; 
import profilePicture1 from "../../images/fatiam.jpg";  
import profilePicture2 from "../../images/images.png"; 

function SocialPlatforms() {
  return (
    <section id="social-platforms" className="social-platforms">
      <div className="platforms">
        <h3>Sosial Media</h3>
        <a href="https://www.instagram.com/bfaatime" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
        <a href="https://github.com/bfaatime" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
      </div>
      <div className="my-business">
        <h3>Biznes</h3>
        <a href="https://www.instagram.com/fatiacosmeticshop" target="_blank" rel="noopener noreferrer">
          <img
            src={profilePicture2}  
            alt="Fatimə Bəxşəliyeva"
            className="profile-images"
          />
        </a>
      </div>
    </section>
  );
}

export default SocialPlatforms;
