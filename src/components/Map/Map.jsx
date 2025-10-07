import styles from "../Map/Map.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Map = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/fnr7dfar1p6Xvcbd9";
  return (
    <div className={styles.con}>
      <div className={styles.mapCard}>
        <div className={styles.mapContainer}>
          <h3 className={styles.mapTitle}>Ми знаходимося за адресою!</h3>
          <div>
            <div className={styles.cont}>
              <div className={styles.telSection}>
                <div className={styles.circle}>
                  <IoCallOutline className={styles.tel} size={30} />
                </div>
                <p className={styles.sectionText}>+380667946763</p>
              </div>
              <div className={styles.timeSection}>
                <div className={styles.circleTime}>
                  <IoTimeOutline size={35} className={styles.timeSectionOut} />
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
                    <IoLocationOutline className={styles.mapIcon} size={30} />
                  </div>
                  <p className={styles.sectionText}>
                    Місто Лубни,вулиця Шевченка, 4
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.buttonFormContainer}>
            <ContactForm />
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1856.2121113069943!2d33.00462231093203!3d50.01179677139287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d65dd963e1521d%3A0x5bd28c9004641e64!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60LAsIDQsINCb0YPQsdC90LgsINCf0L7Qu9GC0LDQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMzc1MDE!5e1!3m2!1suk!2spl!4v1758821655462!5m2!1suk!2spl"
        className={styles.mapStyle}
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;
