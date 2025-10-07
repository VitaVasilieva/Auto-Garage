import styles from "../ServicesComponentAirConditioning/ServicesComponentAirConditioning.module.css";
import { useState } from "react";
import { SiPicardsurgeles } from "react-icons/si";
import ContactSection from "../ContactSection/ContactSection";
import Table from "../Table/Table";
import { IoCloseOutline } from "react-icons/io5";
const ServicesComponentAirConditioning = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <SiPicardsurgeles size={40} color="white" />
            <p className={styles.buttonText}>Сервіс кондиціонерів</p>
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

              <div>
                <Table />
              </div>

              <div className={styles.border}>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Обслуговування кондиціонера R134a (до 2017) від
                  </p>
                  <p className={styles.text}>220 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>
                    Обслуговування кондиціонера R1234yf (від 2017) від
                  </p>
                  <p className={styles.text}>330 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>
                    Діагностика поломки кондиціонера від
                  </p>
                  <p className={styles.text}>200 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Кондиціонер - видалення грибка від
                  </p>
                  <p className={styles.text}>60 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Кондиціонер - озонування від</p>
                  <p className={styles.text}>60 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна радіатора кондиціонера від
                  </p>
                  <p className={styles.text}>350 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна компресора кондиціонера від
                  </p>
                  <p className={styles.text}>350 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentAirConditioning;
