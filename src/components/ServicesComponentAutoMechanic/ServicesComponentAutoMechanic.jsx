import styles from "../ServicesComponentAutoMechanic/ServicesComponentAutoMechanic.module.css";
import { useState } from "react";
import ContactSection from "../ContactSection/ContactSection";
import { IoCloseOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";

const ServicesComponentAutoMechanic = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button
          className={styles.buttonOpen}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.container}>
            <GiAutoRepair size={40} color="white" />
            <p className={styles.buttonText}>Автомеханік</p>
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
                  <p className={styles.text}>Заміна гальмівної рідини від</p>
                  <p className={styles.text}>200 zł</p>
                </div>

                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна гальмівних дисків та колодок від
                  </p>
                  <p className={styles.text}>300 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Очищення EGR від </p>
                  <p className={styles.text}>400 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Регенерація гальмівних супортів від
                  </p>
                  <p className={styles.text}>300 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна амортизатора від </p>
                  <p className={styles.text}>200 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна гальмівних барабанів від</p>
                  <p className={styles.text}>300 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна радіатора від </p>
                  <p className={styles.text}>350 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна інтеркулера від </p>
                  <p className={styles.text}>500 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна гальмівних колодок від</p>
                  <p className={styles.text}>150 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна двомасового маховика від</p>
                  <p className={styles.text}>1500 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна троса ручника від </p>
                  <p className={styles.text}>250 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна ланцюга ГРМ від </p>
                  <p className={styles.text}>950 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна тяги стабілізатора від</p>
                  <p className={styles.text}>75 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна підшипника колеса від</p>
                  <p className={styles.text}>250 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна клинового ременя від</p>
                  <p className={styles.text}>150 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна ременя ГРМ від </p>
                  <p className={styles.text}>700 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна охолоджуючої рідини від</p>
                  <p className={styles.text}>200 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна опори двигуна від </p>
                  <p className={styles.text}>100 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна бензонасоса від </p>
                  <p className={styles.text}>400 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна півосі від </p>
                  <p className={styles.text}>350 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна шарніра приводу від </p>
                  <p className={styles.text}>250 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна гальмівного шланга від</p>
                  <p className={styles.text}>200 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна лямбда зонда від </p>
                  <p className={styles.text}>150 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна пружини підвіски від</p>
                  <p className={styles.text}> 150 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>Заміна зчеплення від </p>
                  <p className={styles.text}>700 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна штифта поворотного важеля від
                  </p>
                  <p className={styles.text}> 130 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Заміна наконечника рульової тяги від
                  </p>
                  <p className={styles.text}>150 zł</p>
                </div>
                <div className={styles.services}>
                  <p className={styles.text}>
                    Ремонт форсунок, регенерація від
                  </p>
                  <p className={styles.text}> 300 zł </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesComponentAutoMechanic;
