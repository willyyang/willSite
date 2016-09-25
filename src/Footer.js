import github from './Github-icon.png';
import linkedin from './linkedin.png';
import email from './gmail.png';
import React, { Component } from 'react';
import './App.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer l-box is-center">
				<a href="https://github.com/willyyang">
         <img src={github} alt="" className="img-content"/>
        </a>
        <a href="https://www.linkedin.com/in/will-yang-00551b60">
         <img src={linkedin} alt="" className="img-content"/>
        </a>
        <a href="mailto:willyyang604@gmail.com?Subject=Hello%20Will">
         <img src={email} alt="" className="img-content"/>
        </a>
       </div>
		)
	}
}
