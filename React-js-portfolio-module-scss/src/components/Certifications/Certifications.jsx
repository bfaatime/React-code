import React from "react";
import styles from "./Certifications.module.scss";  // CSS Modülünü import et
import img111 from "../../images/1.jpeg";  // Resimler
import img222 from "../../images/2.jpeg";

const images = [
  img111, img222,
];

function Certifications() {
  return (
    <section className={styles.certifications}> {/* className ile CSS modülünü kullan */}
      <h2>Sertifikatlar</h2>

      {/* Sertifikalar Listesi */}
      <ul>
        <li>SMM (Sosial Media Menecer) – Salia Media Təlimi</li>
        <li>HTML & CSS Sertifikatı – HTML5 Certiport Beynəlxalq Sertifikat</li>
        <li>Frontend Full Stack Developer – Code Academy</li>
      </ul>

      {/* Sertifikalar Resimleri */}
      <div className={styles.certificationImages}> {/* className ile doğru sınıfı kullan */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Certification ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
