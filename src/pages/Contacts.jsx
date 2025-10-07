import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";
const Contacts = () => {
  return (
    <section>
      <h1 className="address">Наша адреса</h1>
      <div className="addressContainer">
        <Map />
      </div>
      <Footer />
    </section>
  );
};
export default Contacts;
