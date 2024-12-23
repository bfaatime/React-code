import React from "react";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";

const images = [
  img1, img2, 
];

function Certifications() {
  return (
    <section className="certifications">
      <h2>Sertifikatlar</h2>
      
      {}
      <ul>
        <li>SMM (Sosial Media Menecer) – Salia Media Təlimi</li>
        <li>HTML & CSS Sertifikatı – HTML5 Certiport Beynəlxalq Sertifikat</li>
        <li>Frontend Full Stack Developer – Code Academy</li>
      </ul>

      {}
      <div className="certification-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Certification ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
