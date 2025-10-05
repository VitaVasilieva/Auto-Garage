import { IoCheckmarkOutline } from "react-icons/io5";
import styles from "../MainSection/Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imageMain}></div>
      <div className={styles.checkSection}>
        <div className={styles.checkMarkSection}>
          <h4 className={styles.checkMarkTitle}>Ми пропонуємо:</h4>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.checkMarkText}>
              Ремонт автомобілів усіх марок.
            </p>
          </div>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.checkMarkText}>
              Лише сертифіковані запчастини з гарантією.
            </p>
          </div>
          <div className={styles.checkMarkContainer}>
            <IoCheckmarkOutline className={styles.checkMark} />
            <p className={styles.checkMarkText}>
              Професійне обладнання, кваліфікованих механіків .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
