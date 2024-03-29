import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>My services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Game Design and Development</h4>
          <p>Including concept development, gameplay design, coding and testing!</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Multiplayer</h4>
          <p>Create a stunning online presence with our custom web design services. Wel will tailor a website that
            not only
            looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
