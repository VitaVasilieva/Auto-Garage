import { RiOilLine } from "react-icons/ri";
import styles from "../ServicesComponentOil/ServicesComponentOil.module.css";
import { useState } from "react";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
import Table from "../Table/Table";
const ServicesComponentOil = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <RiOilLine size={40} color="white" />
            <p className={styles.buttonText}>Заміна масла</p>
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
                  <p className={styles.text}>Заміна моторного масла від</p>
                  <p className={styles.text}>130 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentOil;
