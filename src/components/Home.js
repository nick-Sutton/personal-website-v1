import React from "react";
import { ReactTyped } from 'react-typed';
import "../styles/Home.css";
import FadeIn from "./FadeIn";

//Make a date+time thing similar to Hobonichi journal (Hello, I'm Nick.)

class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1",
        visible: true,
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey,
      });
    }
    render () {
      return(
        <div id="home">
          <FadeIn>
              <div className="home-content">
                <div className="home-hello-container">
                  <div className="home-hello">Nicholas Sutton</div>
                </div>
                <div className="home-intro-container">
                  <div className="home-intro-item">Computer Scientist</div>
                  <div className="home-intro-item">Software Engineer</div>
                </div>
              </div>
            </FadeIn>
        </div>
      )
    }
  }

  export default Home;