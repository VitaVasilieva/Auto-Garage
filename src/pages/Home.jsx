import React from "react";
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Map from "../components/Map/Map.jsx";
import Main from "../components/MainSection/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <main>
      <section className="main-section">
        <div className="car">
          <h2 className="title-header">Мультибрендовий автосервіс</h2>
          <div className="contact">
            <ContactSection />
          </div>
        </div>
        <h3 className="main-title">
          Наш автосервіс, пропонуємо найкращий та комплексний підхід в
          обслуговуванні вашого автомобіля!
        </h3>
        <Main />
        <Map />
      </section>
      <Footer />
    </main>
  );
};
export default Home;
