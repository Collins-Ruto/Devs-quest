import React from 'react'
import HomeNav from '../../pages/Home/HomeNav'
import '../../styles/Home/HomeMain.css'
import aboutImg from '../../images/bot.png'
import hacksImg from '../../images/team.png'
import HomeFooter from './HomeFooter'

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
            <h1 className="tsp font-bold text-7xl text-green-200 font">
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
          <button className="btn text-2xl h-10 py-1 px-6 font-semibold rounded-md bg-green-500 text-white">
            Collabs {">"}
          </button>
        </div>
      </section>
      <section className="hacks-page">
        <div className="tsp about-info grid grid-flow-col grid-cols-3">
          <div className="tsp about-img md:hidden">
            <img className="tsp w-13" src={hacksImg} alt=""></img>
          </div>
          <div className="about-text tsp col-start-2 col-span-2">
            <h1 className="tsp font-bold text-6xl text-red-200 font">
              Stuck somewhere or have a project too big for just you ?
            </h1>
            <h3 className="tsp text-2xl text-slate-500 font-sans">
              Well, strap up we got you covered. DevsQuest now allows you to
              find like minded developers from whatever end of this world and
              collaborate on projects. You can now join a team or create one for
              your project. We simply help you find inerested parties and link
              them up using GitHub where one will be added as a contributor and
              voila`, there you go !
            </h3>
          </div>
        </div>
        <div className="tsp">
          <h2 className="text-xl w-28 text-center h-10 font-medium underline cursor-pointer underline-offset-2 text-green-300">
            Try it out
          </h2>
        </div>
      </section>
      <section className="footer">
        <HomeFooter/>
      </section>
    </div>
  );
}
