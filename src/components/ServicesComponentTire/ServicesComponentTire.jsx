import styles from "../ServicesComponentTire/ServicesComponentTire.module.css";
import { useState } from "react";
import { PiTireLight } from "react-icons/pi";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
import Table from "../Table/Table";
const ServicesComponentTire = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <PiTireLight size={40} color="white" />
            <p className={styles.buttonText}>Шиномонтаж та заміна шин</p>
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
                    Заміна шин - сталевий диск до 15"
                  </p>
                  <p className={styles.text}>120 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна шин - сталевий диск 16"</p>
                  <p className={styles.text}>140 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна шин - сталевий диск 17"</p>
                  <p className={styles.text}>150 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна шин - алюмінієвий диск до 16"
                  </p>
                  <p className={styles.text}>160 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна шин - алюмінієвий диск 17"
                  </p>
                  <p className={styles.text}>180 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна шин - алюмінієвий диск 18"
                  </p>
                  <p className={styles.text}>200 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна шин - алюмінієвий диск 19"
                  </p>
                  <p className={styles.text}>220 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна шин - алюмінієвий диск 20"
                  </p>
                  <p className={styles.text}>240 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна шин - алюмінієвий диск 21"
                  </p>
                  <p className={styles.text}>250 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна коліс - алюмінієвий диск до 16"
                  </p>
                  <p className={styles.text}>120 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна коліс - алюмінієвий диск 17"
                  </p>
                  <p className={styles.text}>130 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна коліс - алюмінієвий диск 18"
                  </p>
                  <p className={styles.text}>160 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна коліс - алюмінієвий диск 19"
                  </p>
                  <p className={styles.text}>170 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна коліс - алюмінієвий диск 20"
                  </p>
                  <p className={styles.text}>180 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна коліс - алюмінієвий диск 21" і більше
                  </p>
                  <p className={styles.text}>200 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна коліс - сталевий диск</p>
                  <p className={styles.text}>100 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Зберігання шин</p>
                  <p className={styles.text}>120 zł</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentTire;
