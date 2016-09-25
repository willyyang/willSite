import React, { Component } from 'react';
import './App.css';
import fitness_joke from './fitness.jpg';
import Footer from './Footer';

export default class Fitness extends Component {
	render() {
		return (
			<div>
        <div className="project-container">
            <h1 className="splash-head">
              <img src={fitness_joke} alt="" className="img-projects"/>
            </h1>
            <Footer />
          </div>
      </div>
		)
	}
}
