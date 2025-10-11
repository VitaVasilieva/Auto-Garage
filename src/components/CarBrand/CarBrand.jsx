import styles from "../CarBrand/CarBrand.module.css";
import { SiFord } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiFiat } from "react-icons/si";
import { SiOpel } from "react-icons/si";
import { SiVolvo } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiMitsubishi } from "react-icons/si";
import { SiSuzuki } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiKia } from "react-icons/si";
import { SiSkoda } from "react-icons/si";
import { SiHyundai } from "react-icons/si";
import { SiMazda } from "react-icons/si";

const CarBrand = () => {
  const icons = [
    { Icon: SiAudi, color: "#263238", size: 100 },
    { Icon: SiToyota, color: "#455a64", size: 100 },
    { Icon: SiBmw, color: "#455a64", size: 100 },
    { Icon: SiVolkswagen, color: "#000000", size: 100 },
    { Icon: SiOpel, color: "#000000", size: 100 },
    { Icon: SiSuzuki, color: "#969696", size: 100 },
    { Icon: SiMercedes, color: "#263238", size: 100 },
    { Icon: SiFiat, color: "#d32f2f", size: 100 },

    { Icon: SiVolvo, color: "#000000", size: 100 },
    { Icon: SiFord, color: "#0d47a1", size: 200 },
    { Icon: SiNissan, color: "#969696", size: 100 },

    { Icon: SiHonda, color: "#263238", size: 100 },
    { Icon: SiMitsubishi, color: "#d32f2f", size: 100 },
    { Icon: SiKia, color: "#263238", size: 100 },
    { Icon: SiSkoda, color: "#969696", size: 100 },
    { Icon: SiHyundai, color: "#263238", size: 100 },
    { Icon: SiMazda, color: "#000000", size: 100 },
  ];

  const movingIcons = [...icons, ...icons];

  return (
    <div className={styles.container}>
      <div className={styles.iconsWrapper}>
        {movingIcons.map(({ Icon, color, size }, index) => (
          <Icon key={index} size={size} color={color} className={styles.icon} />
        ))}
      </div>
      {/* <motion.div
        className={styles.iconsWrapper}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",

          repeat: Infinity,
        }}
      >
        {movingIcons.map(({ Icon, color, size }, index) => (
          <Icon key={index} size={size} color={color} className={styles.icon} />
        ))}
      </motion.div> */}
    </div>
  );
};
export default CarBrand;
