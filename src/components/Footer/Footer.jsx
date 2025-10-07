import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/fnr7dfar1p6Xvcbd9";
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.imgContainer}>
          <img src="./logo.png" className={styles.logo} />
          <div>
            <a href="https://www.tiktok.com/@11vita24" target="_blank">
              <FaTiktok className={styles.telegram} size={25} color="white" />
              {/* <BsTelegram className={styles.telegram} size={35} color="white" /> */}
            </a>
            <a target="_blank">
              <BsInstagram size={25} color="white" />
            </a>
          </div>
        </div>

        <nav className={styles.nav}>
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
            Контакти
          </Link>
        </nav>
        <div>
          <div className={styles.timeSection}>
            <div className={styles.circleTime}>
              <IoTimeOutline size={23} className={styles.timeSectionOut} />
            </div>
            <div>
              <p className={styles.sectionText}>Пн-Пт з 07:00 - 19:00 </p>
              <p className={styles.sectionText}>Субота з 08:00 - 16:00</p>
            </div>
          </div>

          <div className={styles.mapSection}>
            <a
              className={styles.map}
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.circle}>
                <IoLocationOutline className={styles.mapIcon} size={20} />
              </div>
              <p className={styles.sectionText}>
                Місто Лубни,вулиця Шевченка, 4
              </p>
            </a>
          </div>
          <div className={styles.telSection}>
            <div className={styles.circle}>
              <IoCallOutline className={styles.tel} size={20} />
            </div>

            <p className={styles.sectionText}>+380667946763</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
