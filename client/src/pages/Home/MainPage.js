import React from 'react'
import HomeNav from '../../pages/Home/HomeNav'
import '../../styles/Home/HomeMain.css'

export default function MainPage() {
  return (
    <div className='trans'>
      <HomeNav />
        <section className='main-home'>
          <div className='main-intro'>
            <div className='welcome-txt'>
              <h1>Welcome to DevsQuest</h1>
              <h3>We provide you access to considerable ammounts of resources,
                ability to collaborate with other developers to complete
                your projects challenges some of which we provide here to sharpen 
                your skills.
              </h3>
              <div className='mail-sub'>
                <label htmlFor='email'>Join our mailing list</label><br/>
                <input id='email' placeholder='Email Address'></input>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
            
        </section>
    </div>
  )
}
