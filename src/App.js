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
        <div className="header-home-menu">
          <div className="header-div-2-left">
            <a className="pure-menu-heading" href="">Welcome, My Friend!</a>
          </div>
          <div className="header-div-2-right">
            <ul className="haeder-ul">
              <li onClick={() => this._changeBodyContent('aboutMe')}><a href="#" >About Me</a></li>
              <li onClick={() => this._changeBodyContent('projects')}><a href="#">Projects</a></li>
              <li onClick={() => this._changeBodyContent('blogs')}><a href="#">Blog(s)</a></li>
              <li onClick={() => this._changeBodyContent('fitness')}><a href="#">Fitness</a></li>
            </ul>
          </div>
          
        </div>
       
        {this._getBodyContent()}
      </div>
    );
  }
}

export default App;
