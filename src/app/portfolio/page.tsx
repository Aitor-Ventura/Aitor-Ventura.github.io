import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.png" alt="portfolio" />
                </div>
                <a href="https://www.youtube.com/watch?v=WDw54muUcec" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>Guayota's Land</h4>
                    <h5>
                      Survive in the lands of Guayota and protect yourself from all the dangers!
                      This is a prototytpe of a farming videogame based in the Canary Islands' mythology.
                      Developed using Unity.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.png" alt="portfolio" />
                </div>
                <a href="https://www.youtube.com/watch?v=LBM3Q3AK3bQ" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>NBody Simulation</h4>
                    <h5>
                      Designed to simulate gravitational interactions between multiple bodies 
                      in a two-dimensional space. Gamification is introduced to make the simulation 
                      interactive and engaging, affecting it in real time.
                      Developed using Unreal Engine.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.png" alt="portfolio" />
                </div>
                <a href="https://www.youtube.com/watch?v=vjoZtKMVdJE" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>Delivery</h4>
                    <h5>
                      Deliver the souls to their destiny! Developed using Unity.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.png" alt="portfolio" />
                </div>
                <a href="https://www.youtube.com/watch?v=XEAqY9fpgbM" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>Pew Pew!</h4>
                    <h5>
                      Destroy galactic asteroids to save the world of Moñeco! Developed using Unity.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.png" alt="portfolio" />
                </div>
                <a href="https://www.youtube.com/watch?v=wsVqyn3iNh0" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>Elevator System</h4>
                    <h5>
                      An elevator system that handles multiple elevators: some with different "first" and "top" 
                      levels; options for different behaviors. Developed using Unity.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.png" alt="portfolio" />
                </div>
                <a href="https://www.youtube.com/watch?v=WDw54muUcec" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>Input Field Recreation</h4>
                    <h5>
                      A system that tries to simulate the Unity's standard input field. It has a placeholder, a caret, 
                      and a text selection system. Developed using Unity.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/7.png" alt="portfolio" />
                </div>
                <a href="https://mda-clicker.vercel.app/" target="_blank" className="link">
                  <div className="portfolio-info">
                    <h4>Idle Paper Clicker</h4>
                    <h5>
                      Includes an achievement system, a customization system, an upgrade system, a cookie-save system, 
                      and Big Numbers are supported. Developed using Vue and TailwindCSS.
                    </h5>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
