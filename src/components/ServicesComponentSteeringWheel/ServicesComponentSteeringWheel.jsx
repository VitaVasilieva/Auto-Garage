import { GiSteeringWheel } from "react-icons/gi";
import styles from "../ServicesComponentSteeringWheel/ServicesComponentSteeringWheel.module.css";
import { useState } from "react";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
import Table from "../Table/Table";
const ServicesComponentSteeringWheel = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <GiSteeringWheel size={40} color="white" />
            <p className={styles.buttonText}>Ремонт рульових систем</p>
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
                  <p className={styles.text}>Ремонт рульових механізмів від</p>
                  <p className={styles.text}>1000 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Діагностика та ремонт ГУР від</p>
                  <p className={styles.text}>500 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentSteeringWheel;
