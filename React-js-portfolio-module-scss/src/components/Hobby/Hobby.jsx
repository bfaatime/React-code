import React from "react";
import styles from "./Hobby.module.scss"; 
import { FaCamera } from "react-icons/fa"; 
import img1 from "../../images/hem.jpeg";
import img2 from "../../images/hem1.jpeg";
import img3 from "../../images/hem2.jpeg";
import img4 from "../../images/hem3.jpeg";
import img5 from "../../images/hem4.jpeg";
import img6 from "../../images/hem5.jpeg";
import img7 from "../../images/hem6.jpeg";
import img8 from "../../images/bizon.jpeg";
import img9 from "../../images/maral.jpeg";
import img10 from "../../images/lama.jpeg";
import img11 from "../../images/maral2.jpeg";
import img12 from "../../images/simba.jpeg";
import img13 from "../../images/cilos.jpeg";
import img14 from "../../images/simba1.jpeg";
import img15 from "../../images/baku.jpeg";
import img16 from "../../images/susa.jpeg";
import img17 from "../../images/tele.jpeg";
import img18 from "../../images/xalca.jpeg";


function Hobby() {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18
  ];

  return (
    <section id="hobby" className={styles.hobby}> {}
      <h3 className={styles.hobbyTitle}>Hobbilər</h3> {}
      <p className={styles.hobbyDescription}>Fotoqrafiya mənim əsas hobbilərimdən biridir.</p> {}
      <FaCamera size={50} color="#6a1b9a" className={styles.hobbyIcon} /> {}
      
      <div className={styles.photoGallery}> {}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hobby Image ${index + 1}`}
            className={styles.profileImages} 
          />
        ))}
      </div>
    </section>
  );
}

export default Hobby;
