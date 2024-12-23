import React from "react";
import styles from "./Skills.module.scss"; // Doğru CSS modülünü import et

function Skills() {
  return (
    <section id="skills" className={styles.skills}> {/* CSS modülünü className ile kullan */}
      <h3 className={styles.skillsTitle}>Bacarıqlar</h3> {/* className ile CSS modülünü kullan */}
      <ul className={styles.skillsList}> {/* className ile CSS modülünü kullan */}
        <li>HTML5 & CSS</li>
        <li>JavaScript & React</li>
        <li>Social Media Marketing</li>
        <li>SEO optimizasyonu</li>
        <li>Business Manager</li>
        <li>İnfluence Marketing</li>
        <li>Google Search Console</li>
        <li>Google My Business</li>
        <li>SEO services</li>
        <li>Azerbaijan</li>
        <li>Microsoft Powerpoint</li>
        <li>Microsoft Word</li>
        <li>Turkish</li>
        <li>Photographer</li>
        <li>Digital marketing</li>
        <li>Instagram</li>
        <li>Push Notification</li>
        <li>Reporting</li>
        <li>Marketer</li>
        <li>English</li>
        <li>Google Ads</li>
        <li>Google Tag Manager</li>
        <li>Event Manager</li>
        <li>Email Marketing</li>
      </ul>
    </section>
  );
}

export default Skills;
