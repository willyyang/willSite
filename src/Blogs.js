import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';

export default class Blogs extends Component {
	render() {
		return (
			<div>
        <div className="project-container">
            <h1 className="splash-head">
              <a href="https://medium.com/eventmobi/the-perfect-recipe-automating-scaling-end-to-end-testing-in-your-ci-pipeline-9b1785040ab3#.rzolhjh89" className="project-description">
               The Perfect Recipe — Automating & Scaling End-to-End Testing in your CI Pipeline
              </a>
            </h1>
            <Footer />
          </div>
      </div>
		)
	}
}
