import styles from "./index.module.scss"



const Header = () => {
    console.log(styles);
    
  return (
    <nav>
    <div className={styles.navbar}>
      <ul>
        <li>About Us</li>
        <li>Features</li>
        <li>Our Blog</li>
        <li>Dowlands</li>
      </ul>
      <h1 className={styles.logo}>Quickly</h1>
      <button className={styles["sign"]}>Sign Up</button>
      <button className={styles["login"]}>Login</button>
    </div>
  </nav>
  )
}

export default Header