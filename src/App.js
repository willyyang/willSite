import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import github from './Github-icon.png';
import linkedin from './linkedin.png';
import email from './gmail.png';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
           <a className="pure-menu-heading" href="">Welcome, My Friend!</a>
           <ul className="pure-menu-list">
              <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">About Me</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Projects</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog(s)</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Fitness</a></li>
            </ul>
        </div>

        <div className="splash-container">
          <div className="splash-container-image">
            <h1 className="splash-head">
              <div className="greeting">-- Hi, I'm -- </div>
              <div className="name"> Will Yang!</div>
            </h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <h2 className="content-head is-center">Learn. Internalize. Master.</h2>

            <div className="pure-g">
              <div className="l-box pure-u-1 pure-u-md-2-3 pure-u-lg-2-6">
                <h3 className="content-subhead">
                  Born in the 886, Raised in the 604, Finding myself in the 6ix
                </h3>
                <p>
                  Computer Engineering 1T6 + PEY student from the University of Toronto.
                </p>
                <p>
                  Passions lie in creating responsive web applications and mobile applications.
                </p>
                <p>
                 Interested in CI/CD pipelines of various companies. How are they testing? How are they being optomized? How fast is their feedback loop?
                </p>
              </div>
            </div>
          </div>

          <div className="footer l-box is-center">
             <img src={github} alt="" className="img-content"/>
             <img src={linkedin} alt="" className="img-content"/>
             <img src={email} alt="" className="img-content"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
