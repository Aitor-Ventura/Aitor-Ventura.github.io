
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/aitor.png"
              alt="Aitor Ventura Profile"
              className="shadow-dark"
            />
            <h1>Aitor Ventura</h1>
            <p>Senior Video Game Developer & Designer</p>
            <div className="social-links">
              <a href="https://www.youtube.com/@aitorventura1/featured" target="_blank">
                <i className="fa fa-youtube-play" />
              </a>
              <a href="https://aitorventura.itch.io/" target="_blank">
                <i className="fa fa-gamepad" />
              </a>
              <a href="https://github.com/Aitor-Ventura" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/aitor-ventura/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="mailto:aitorventura00@gmail.com?subject=[CONTACT]" target="_blank">
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
