import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';


class AboutMe extends Component {
	render() {
		return (
		<div>
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

          <Footer />
        </div>
       </div>
       )
	}
}
export default AboutMe;