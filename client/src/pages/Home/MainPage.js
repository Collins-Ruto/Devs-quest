import React from 'react'
import HomeNav from '../../pages/Home/HomeNav'
import '../../styles/Home/HomeMain.css'
import aboutImg from '../../images/bot.png'

export default function MainPage() {
  return (
    <div className="trans">
      <HomeNav />
      <section className="main-home">
        <div className="main-intro">
          <div className="welcome-txt">
            <h1>Welcome to DevsQuest</h1>
            <h3>
              We provide you access to considerable ammounts of resources,
              ability to collaborate with other developers to complete your
              projects challenges some of which we provide here to sharpen your
              skills.
            </h3>
            <div className="mail-sub">
              <label htmlFor="email">Join our mailing list</label>
              <br />
              <input id="email" placeholder="Email Address"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <section className="about-dev">
        <div className="tsp about-info grid grid-flow-col grid-cols-3">
          <div className="about-text tsp col-span-2">
            <h1 className="tsp font-bold text-7xl text-green-300 font">
              A platform for team building and team work
            </h1>
            <h3 className="tsp text-2xl text-slate-500 font-sans">
              This platform builds the definitive collection of coding,
              collaboration, networking and knowledge sharing. It is
              community-based space to find and contribute to your projects and
              that of others. We provide a means for problem solving by means of
              remote collaboration.
            </h3>
          </div>
          <div className="tsp about-img col-start-3 md:hidden">
            <img className="tsp w-13" src={aboutImg} alt=""></img>
          </div>
        </div>
          <div className="tsp">
            <button className="btn text-2xl h-10 py-1 px-6 font-semibold rounded-md bg-primary text-white">
              Collabs {">"}
            </button>
          </div>
      </section>
    </div>
  );
}
