import ServicesComponentLaptopMac from "../components/ServicesComponentLaptopMac/ServicesComponentLaptopMac.jsx";
import ServicesComponentSteeringWheel from "../components/ServicesComponentSteeringWheel/ServicesComponentSteeringWheel.jsx";
import ServicesComponentAutoMechanic from "../components/ServicesComponentAutoMechanic/ServicesComponentAutoMechanic.jsx";
import ServicesComponentAirConditioning from "../components/ServicesComponentAirConditioning/ServicesComponentAirConditioning.jsx";
import ServicesComponentOil from "../components/ServicesComponentOil/ServicesComponentOil.jsx";
import ServicesComponentFilter from "../components/ServicesComponentFilter/ServicesComponentFilter.jsx";
import ServicesComponentTire from "../components/ServicesComponentTire/ServicesComponentTire.jsx";
import ServicesComponentExhaustSystems from "../components/ServicesComponentExhaustSystems/ServicesComponentExhaustSystems.jsx";
import ServicesComponentDiesel from "../components/ServicesComponentDiesel/ServicesComponentDiesel.jsx";

import Map from "../components/Map/Map.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Services = () => {
  return (
    <main>
      <section>
        <div>
          <h1 className="titleServices">Послуги автосервісу</h1>
        </div>
        <div className="componentServices">
          <ServicesComponentLaptopMac />
          <ServicesComponentSteeringWheel />
          <ServicesComponentAutoMechanic />
          <ServicesComponentAirConditioning />
          <ServicesComponentOil />
          <ServicesComponentFilter />
          <ServicesComponentTire />
          <ServicesComponentExhaustSystems />
          <ServicesComponentDiesel />
        </div>

        <div>
          <Map />
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default Services;
