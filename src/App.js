import React, { Component } from 'react';
import './App.css';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Blogs from './Blogs';
import Fitness from './Fitness';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bodyContent: 'aboutMe',
    };
  }

  _getBodyContent() {
    let bodyContent;
    if (this.state.bodyContent === 'aboutMe') {
      bodyContent = (<AboutMe />)
    } else if (this.state.bodyContent === 'projects') {
      bodyContent = (<Projects />)
    } else if (this.state.bodyContent === 'blogs' ) {
      bodyContent = (<Blogs />)
    } else if (this.state.bodyContent === 'fitness') {
      bodyContent = (<Fitness />)
    }
    return bodyContent
  }

  _changeBodyContent(bodyContent) {
    this.setState({...this.state, bodyContent})
  }

  render() {
    return (
      <div className='App'>
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
           <a className="pure-menu-heading" href="">Welcome, My Friend!</a>
           <ul className="pure-menu-list">
              <li onClick={() => this._changeBodyContent('aboutMe')} className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">About Me</a></li>
              <li onClick={() => this._changeBodyContent('projects')} className="pure-menu-item"><a href="#" className="pure-menu-link">Projects</a></li>
              <li onClick={() => this._changeBodyContent('blogs')} className="pure-menu-item"><a href="#" className="pure-menu-link">Blog(s)</a></li>
              <li onClick={() => this._changeBodyContent('fitness')} className="pure-menu-item"><a href="#" className="pure-menu-link">Fitness</a></li>
            </ul>
        </div>
        {this._getBodyContent()}
      </div>
    );
  }
}

export default App;
