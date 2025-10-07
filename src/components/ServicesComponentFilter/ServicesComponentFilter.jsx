import { MdFilterFrames } from "react-icons/md";
import styles from "../ServicesComponentFilter/ServicesComponentFilter.module.css";
import { useState } from "react";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
import Table from "../Table/Table";
const ServicesComponentFilter = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <MdFilterFrames size={40} color="white" />
            <p className={styles.buttonText}>Заміна фільтрів</p>
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
                  <p className={styles.text}>Заміна салонного фільтра від</p>
                  <p className={styles.text}>70 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна паливного фільтра від</p>
                  <p className={styles.text}>100 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна повітряного фільтра від</p>
                  <p className={styles.text}>70 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentFilter;
