import React from "react";
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Map from "../components/Map/Map.jsx";
import Main from "../components/MainSection/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CarBrand from "../components/CarBrand/CarBrand.jsx";
const Home = () => {
  return (
    <main>
      <section className="main-section">
        <div className="car">
          <h1 className="title-header">Мультибрендовий автосервіс</h1>
          <div className="contact">
            <ContactSection />
          </div>
        </div>
        <h3 className="main-title">
          Наш автосервіс, пропонуємо найкращий та комплексний підхід в
          обслуговуванні вашого автомобіля!
        </h3>
        <Main />
        <CarBrand />
        <Map />
      </section>
      <Footer />
    </main>
  );
};
export default Home;
