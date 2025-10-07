import styles from "../Table/Table.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Table = () => {
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
    </div>
  );
};
export default Table;
