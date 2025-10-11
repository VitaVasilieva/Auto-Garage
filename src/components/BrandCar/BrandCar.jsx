import {
  SiFord,
  SiAudi,
  SiToyota,
  SiBmw,
  SiVolkswagen,
  SiMercedes,
  SiFiat,
  SiOpel,
  SiVolvo,
  SiNissan,
  SiMitsubishi,
  SiSuzuki,
  SiHonda,
  SiKia,
  SiSkoda,
  SiHyundai,
  SiMazda,
} from "react-icons/si";

import styles from "../BrandCar/BrandCar.module.css";

const BrandCar = () => {
  const icons = [
    { Icon: SiToyota, color: "#455a64" },
    { Icon: SiBmw, color: "#455a64" },
    { Icon: SiVolkswagen, color: "#000000" },
    { Icon: SiAudi, color: "#263238" },
    { Icon: SiFord, color: "#0d47a1" },
    { Icon: SiOpel, color: "#000000" },

    { Icon: SiSuzuki, color: "#969696" },
    { Icon: SiMercedes, color: "#263238" },
    { Icon: SiFiat, color: "#d32f2f" },
    { Icon: SiVolvo, color: "#000000" },

    { Icon: SiNissan, color: "#969696" },
    { Icon: SiHonda, color: "#263238" },
    { Icon: SiMitsubishi, color: "#d32f2f" },
    { Icon: SiKia, color: "#263238" },
    { Icon: SiSkoda, color: "#969696" },
    { Icon: SiHyundai, color: "#263238" },
    { Icon: SiMazda, color: "#000000" },
  ];

  const movingIcons = [...icons];
  return (
    <div className={styles.container}>
      <div className={styles.iconsWrapper}>
        {movingIcons.map(({ Icon, color, size }, index) => (
          <div>
            <Icon
              key={index}
              size={150}
              color={color}
              className={styles.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BrandCar;
