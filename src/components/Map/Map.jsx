import styles from "../Map/Map.module.css";
import ContactSection from "../ContactSection/ContactSection";
const Map = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/fnr7dfar1p6Xvcbd9";
  return (
    <div className={styles.mapCard}>
      <div className={styles.mapContainer}>
        <h3 className={styles.mapTitle}>Ми знаходимося за адресою!</h3>
        <div>
          <ContactSection />
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1856.2121113069943!2d33.00462231093203!3d50.01179677139287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d65dd963e1521d%3A0x5bd28c9004641e64!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60LAsIDQsINCb0YPQsdC90LgsINCf0L7Qu9GC0LDQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMzc1MDE!5e1!3m2!1suk!2spl!4v1758821655462!5m2!1suk!2spl"
          className={styles.mapStyle}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
export default Map;
