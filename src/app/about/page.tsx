import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Oh! I am Aitor Ventura, a <span>Senior Video Game Developer & Designer</span>
                  </h2>
                  <p>
                    I am a dedicated and passionate video game developer hailing
                    from the sun-kissed shores of the Canary Islands, Spain. I infuse
                    every pixel with the warmth of the Atlantic breeze. My passion is to
                    craft games that tell a story and touch the heart!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website: <span><a href="https://www.aitorventura.com/" target="_blank">www.aitorventura.com</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span><a href="mailto:aitorventura00@gmail.com?subject=[CONTACT]" target="_blank">aitor.ventura00@gmail.com</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>Bachelor in Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Address: <span>38430, Tenerife, Spain</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>Master in Game Development</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Status: <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a 
                        href="mailto:aitorventura00@gmail.com?subject=[OFFER]"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Unity</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Godot</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Unreal Engine</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>GameMaker</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dogandcat">
                  <Image src="https://media.tenor.com/yoAqeriAJnIAAAAi/bugcat-bugcatsticker.gif" alt="Bugcat" width={345} height={273} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
