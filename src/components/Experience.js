import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/Experience.css';
import { ReactTyped } from 'react-typed';
import FadeIn from "./FadeIn";

class Experience extends React.Component {
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
        <div id="experience">
          <FadeIn>
            <div className="section-header">
              <ReactTyped strings={["> experience."]} typeSpeed={100} cursorChar="_"/>
            </div>
            <div className="hline"/>
            <div className="experience-content"></div>
            </FadeIn>
        </div>
      )
    }
  }

  export default Experience;