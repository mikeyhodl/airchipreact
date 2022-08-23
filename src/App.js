import "./styles.css";
import mypic from "./airreact.png";

export default function App() {
  return (
    <div className="grid-2">
      <div className="section-1">
        {/* <i class="fas fa-code fa-5x white"></i> */}
        <img src={mypic} height={250} alt="mysel{logo}f" />
        <h2>Cyril Mwambeyu</h2>
        <p>Eldoret,Uasin Gishu.</p>
        {/* <a href="#"><i class="fab fa-email"></i></a> */}
        <a href="https://snapchat.com/add/serilreus" target="-blank">
          <i className="fab fa-snapchat" />
        </a>
        <a href="https://github.com/Airchip66" target="-blank">
          <i className="fab fa-github" />
        </a>
      </div>
      <div className="section-2">
        {/* About */}
        <h2>About</h2>
        <p>
          <b>
            Hi there, Welcome to this website all about me, feel free to scroll
            through, learn about me and my qualifications, contact me through
            the snapchat and github icons under my name
          </b>
        </p>
        <p></p>
        <p>I am 15 years of age</p>
        <p>Currently schooling at Gulab Lochab Academy, Eldoret </p>
        <p>I am aspiring web Developer</p>
        {/* Experience */}
        <h2>Experience</h2>
        <p>
          I have done Edexcel Igcse's Ict curriculum upto Yr 10 at GLA, Eldoret{" "}
        </p>
        <p>
          I have participated in a work experience program for two weeks at{" "}
          <a href="https://lancolatech.co.ke/" target="_blank" rel="noreferrer">
            Lancolatech Company
          </a>{" "}
        </p>
        {/* <a href="https://lancolatech.co.ke" target="_blank">LancolatechLimited</a>  */}
        {/* Skills */}
        <h2>Skills</h2>
        <p>
          I Can assemble simple websites using github repositories (templates)
        </p>
        <p>
          I am very fluent with the workings of all office applications and thus
          can work a a virtual office assistant{" "}
        </p>
        <p>
          i am a junior graphics designer with the help of{" "}
          <a href="https://www.canva.com/" target="_blank" rel="noreferrer">
            Canva
          </a>{" "}
        </p>
        <p>
          I have learnt to design websites with <b>html</b>
        </p>
        {/* Projects */}
        <h2>Projects</h2>
        <p>
          I have only managed to build one website so far (for now), you're
          looking at it!
        </p>
        <a href="https://airchip66.netlify.app/">My portfolio so far</a>
        {/* How to Contact me */}
        <h2>
          <b>How To Contact me</b>
        </h2>
        <p>You can reach out to me using the the social icons under my name</p>
      </div>
    </div>
  );
}
