import styles from "../About/About.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";

import { SiCoffeescript } from "react-icons/si";
import { FaCouch } from "react-icons/fa";

import { GiWaterBottle } from "react-icons/gi";
const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Auto Garage</h1>

        <p className={styles.titleText}>
          Auto Garage – це сучасний автосервіс, де ваш автомобіль отримує
          надійний догляд та професійний ремонт.
        </p>
        <p className={styles.titleText}>
          Ми поєднуємо багаторічний досвід майстрів із новітнім обладнанням, щоб
          забезпечити високу якість обслуговування для кожного клієнта.
        </p>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.checkMarkSection}>
          <h2 className={styles.titlesText}>
            Наша команда спеціалізується на:
          </h2>
          <div>
            <div className={styles.checkMarkContainer}>
              <IoCheckmarkOutline className={styles.checkMark} />
              <p className={styles.titleTexts}>
                Шиномонтажі та балансуванні коліс;
              </p>
            </div>
            <div className={styles.checkMarkContainer}>
              <IoCheckmarkOutline className={styles.checkMark} />
              <p className={styles.titleTexts}>
                Діагностиці та ремонті автомобілів будь-яких марок;
              </p>
            </div>
            <div className={styles.checkMarkContainer}>
              <IoCheckmarkOutline className={styles.checkMark} />
              <p className={styles.titleTexts}>
                Ремонті ходової частини, гальмівної системи та підвіски;
              </p>
            </div>
            <div className={styles.checkMarkContainer}>
              <IoCheckmarkOutline className={styles.checkMark} />
              <p className={styles.titleTexts}>
                Комп’ютерній діагностиці електроніки;
              </p>
            </div>
            <div className={styles.checkMarkContainer}>
              <IoCheckmarkOutline className={styles.checkMark} />
              <p className={styles.titleTexts}>Підготовці авто до сезону.</p>
            </div>
          </div>
        </div>
        <div className={styles.checkMarkSection}>
          <h2 className={styles.titlesText}>
            Ми цінуємо довіру клієнтів, тому гарантуємо:
          </h2>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.titleTexts}>
              Чесні ціни та прозору вартість робіт;
            </p>
          </div>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.titleTexts}>
              Швидке та якісне обслуговування;
            </p>
          </div>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.titleTexts}>
              Індивідуальний підхід до кожного автомобіля;
            </p>
          </div>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.titleTexts}>
              Використання сертифікованих запчастин та матеріалів.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.comfortTitle}>
          У Auto Garage ми дбаємо не лише про ваш автомобіль, а й про ваш
          комфорт.
        </h3>
        <div className={styles.comfort}>
          <div className={styles.img}>
            <FaWifi size={50} color="" />
            <SiCoffeescript size={50} />
            <FaCouch size={50} />
          </div>
          <div className={styles.comfortText}>
            <p className={styles.text}>
              Поки ми працюємо, ви можете відпочити в зоні очікування з Wi-Fi та
              кавою та чаєм.
            </p>
            <p className={styles.text}>
              Наша мета – щоб кожен клієнт виїжджав від нас із упевненістю у
              своєму авто та повертався лише для планового технічного огляду.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
