import React, { Component } from 'react';
import './App.css';
import github from './Github-icon.png';
import linkedin from './linkedin.png';
import email from './gmail.png';
import Footer from './Footer';
import spotify_one from './spotify-one.png';
import spotify_two from './spotify-two.png';
import spotify_three from './spotify-three.png';
import almonds_1 from './almonds-1.png';
import almonds_2 from './almonds-2.png';
import almonds_3 from './almonds-3.png';
import koala_1 from './koala-1.png';
import koala_2 from './koala-2.png'
import koala_3 from './koala-3.png'

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="project-container">
            <h1 className="splash-head">
              <div className="project-name">Vee</div>
                <img src={spotify_one} alt="" className="img-projects"/>
                <img src={spotify_two} alt="" className="img-projects"/>
                <img src={spotify_three} alt="" className="img-projects"/>
              <div className="project-description">
                Workout App that allows users to track and time exercises while
                listening to their Spotify playlists.
                </div>
                <div className="project-description">
                Implemented using React Native and Parse Server.
              </div>
            </h1>
            <h1 className="splash-head">
              <div className="project-name">
                Almonds & Cashews
                <a href="https://github.com/willyyang/almondsandcashews">
                  <img className="small-icon" src={github} alt=''/>
                </a>
              </div> 
                <img src={almonds_1} alt="" className="img-projects"/>
                <img src={almonds_2} alt="" className="img-projects"/>
                <img src={almonds_3} alt="" className="img-projects"/>
              <div className="project-description">
                Interactive, multiplayer game where players try to vote out an odd player within a limited number of rounds.
              </div>
              <div className="project-description">
                Implemented using MeteorJS.
              </div>
            </h1>
            <h1 className="splash-head">
              <div className="project-name">
                Koala
                <div className="project-name-description"> 
                  UofT Hacks Top 10
                  </div>
              </div> 
                <img src={koala_1} alt="" className="img-projects"/>
                <img src={koala_2} alt="" className="img-projects"/>
                <img src={koala_3} alt="" className="img-projects"/>
              <div className="project-description">
                Tool that analyzes Twitter Tweets and determines personality traits.
              </div>
              <div className="project-description">
                Implemented using React Native, Twitter API, IBM Watson, AWS API Gateway, & AWS Lambda.
              </div>
            </h1>
            <Footer />
          </div>

      </div>
    )
  }
}
export default Projects;
