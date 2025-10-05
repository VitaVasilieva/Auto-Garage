import styles from "../ServicesComponentDiesel/ServicesComponentDiesel.module.css";
import { useState } from "react";
import { GiCandleSkull } from "react-icons/gi";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
const ServicesComponentDiesel = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <GiCandleSkull size={40} color="white" />
            <p className={styles.buttonText}>Паливна система</p>
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
                  <p className={styles.text}>Ремонт ТНВД</p>
                  <p className={styles.text}>1300 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Ремонт форсунок Common Rail</p>
                  <p className={styles.text}>700 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentDiesel;
