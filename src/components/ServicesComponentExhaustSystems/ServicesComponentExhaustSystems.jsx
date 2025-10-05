import styles from "../ServicesComponentExhaustSystems/ServicesComponentExhaustSystems.module.css";
import { useState } from "react";
import { FaCarOn } from "react-icons/fa6";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
const ServicesComponentExhaustSystems = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <FaCarOn size={40} color="white" />
            <p className={styles.buttonText}>Ремонт вихлопних систем</p>
          </div>
        </button>
        {visible && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button
                className={styles.buttonClose}
                onClick={() => setVisible(false)}
              >
                <IoCloseOutline className={styles.close} size={30} />
              </button>
              <div className={styles.servicesContainer}>
                <h3 className={styles.servicesTitle}>
                  Ми знаходимося за адресою!
                </h3>
                <div>
                  <ContactSection />
                </div>
              </div>
              <div className={styles.border}>
                <div className={styles.services}>
                  <p className={styles.text}>Зварювання, ремонт глушника</p>
                  <p className={styles.text}>150 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Заміна каталізатора</p>
                  <p className={styles.text}>330 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Заміна глушника</p>
                  <p className={styles.text}>200 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentExhaustSystems;
