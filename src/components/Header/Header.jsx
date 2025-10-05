import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/">
          <img src="./logo.png" className={styles.logo} />
        </a>

        <Link to="/" className={styles.link}>
          Головна
        </Link>
        <Link to="/services" className={styles.link}>
          Послуги
        </Link>
        <Link to="/about" className={styles.link}>
          Про нас
        </Link>
        <Link to="/contacts" className={styles.link}>
          Наші контакти
        </Link>
      </nav>
    </header>
  );
};
export default Header;
