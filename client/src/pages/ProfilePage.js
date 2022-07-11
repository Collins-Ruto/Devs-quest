import '../styles/profile.css'
import collinsImg1 from '../images/collins11.jpg'
import collinsImg2 from '../images/collins2.jpg'
import collinsImg3 from '../images/collins3.jpg'
import collinsImg4 from "../images/collins4.jpeg";
import collinsImg5 from "../images/collins5.jpg";
import MainNavigation from '../components/Navigation';



export default function ProfilePage() {

  return (
    <div className="tsp">
      <MainNavigation />
      <div className="port-cont tsp">
      <div className="port-card">
        <div className="port-title ">
          <h3>
            <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
          </h3>
          <a href="https://www.linkedin.com/in/collins-ruto">
            <span>View Profile</span>
          </a>
        </div>
        <img src={collinsImg5} alt="collins"></img>
        <h1>Collins Ruto</h1>
        <h2>Web and Android developer</h2>
        <p>
          Collins is a self taught developer who is also studying marine
          engineering at Techniacal university of Mombasa
        </p>
      </div>
      <div className="port-card">
        <div className="port-title">
          <h3>
            <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
          </h3>
          <a href="https://twitter.com/ruto_collins_">
            <span>View Profile</span>
          </a>
        </div>
        <img src={collinsImg1} alt="collins"></img>
        <h1>Collins Ruto</h1>
        <h2>@Ruto_Collins_</h2>
        <p>
          Self taught Web designer & developer, Front end dev and software
          engineering Currently studying Marine Engineering at The Technical
          University of Mombasa.
        </p>
      </div>
      <div className="port-card">
        <div className="port-title">
          <h3>
            <i className="fa fa-github" aria-hidden="true"></i> GitHub
          </h3>
          <a href="https://github.com/Collins-Ruto">
            <span>View Profile</span>
          </a>
        </div>
        <img src={collinsImg2} alt="collins"></img>
        <h1>Collins Ruto</h1>
        <h2>Web and Android developer</h2>
        <p>
          Marine Engineering student, with great interest in computer and
          programming. Currently conversant with Javascript, HTML, CSS and
          studying Python.
        </p>
      </div>
      <div className="port-card">
        <div className="port-title">
          <h3>
            <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
          </h3>
          <a href="https://www.instagram.com/colins_ruto/">
            {" "}
            <span>View Profile</span>
          </a>
        </div>
        <img src={collinsImg3} alt="collins"></img>
        <h1>Collins Ruto</h1>
        <h2>Web and Android developer</h2>
        <p>
          Web developer & designer, Software Developer and Marine Engineering
          Student. I hope to inspire and mentor upcoming developers and
          programers around the world.
        </p>
      </div>
      <div className="port-card">
        <div className="port-title">
          <h3>
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>{" "}
            StackOverflow
          </h3>
          <a href="https://stackoverflow.com/users/17242991/collins-ruto">
            {" "}
            <span>View Profile</span>
          </a>
        </div>
        <img src={collinsImg4} alt="collins"></img>
        <h1>Collins Ruto</h1>
        <h2>Web and Android developer</h2>
        <p>
          I'm a self taught developer currently well experienced in web design
          and software development. I am fluent in Python, Javascript, CSS, HTML
          , and still learning more.
        </p>
      </div>
    </div>
    </div>
    
  );
}
