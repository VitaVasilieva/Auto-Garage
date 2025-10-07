import { MdOutlineLaptopMac } from "react-icons/md";
import styles from "../ServicesComponentLaptopMac/ServicesComponentLaptopMac.module.css";
import { useState } from "react";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
import ContactForm from "../ContactForm/ContactForm";
import Table from "../Table/Table";
const ServicesComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <MdOutlineLaptopMac size={40} color="white" />
            <p className={styles.buttonText}>Комп'ютерна діагностика</p>
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
                  <p className={styles.text}>Комп'ютерна діагностика від </p>
                  <p className={styles.text}>130 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Огляд перед виїздом від </p>
                  <p className={styles.text}>130 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>Перевірка перед купівлею від </p>
                  <p className={styles.text}>130 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Невеликий періодичний огляд від{" "}
                  </p>
                  <p className={styles.text}>200 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>
                    Огляд перед виїздом докладний від{" "}
                  </p>
                  <p className={styles.text}>350 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>
                    Перевірка перед купівлею докладний від{" "}
                  </p>
                  <p className={styles.text}>800 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponent;
