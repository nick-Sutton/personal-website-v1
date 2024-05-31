import React from "react";
import { ReactTyped } from 'react-typed';
import '../styles/Projects.css';
import FadeIn from "./FadeIn";

class Projects extends React.Component {
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
      const projects = {
        "MunchieBot": {
          desc:"",
          link:""
        }
      }
      
      return(
        <div id="projects">
          <FadeIn>
            <div className="section-header">
              <ReactTyped strings={["> projects."]} typeSpeed={100} cursorChar="_"/>
            </div>
            <div className="hline"/>
            <div className="projects-section">

            </div>
          </FadeIn>
        </div>
      )
    }
  }

  export default Projects;