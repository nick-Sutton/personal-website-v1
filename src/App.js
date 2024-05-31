import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import "./styles/Colors.css";
//Maybe add a guestbook with auth
//Ideas for home section
//  -SM64 style physics sphere that people can 
//    deform
//Add download cv/resume to home section as a button
//Make the Nicholas Sutton have a sort of logo designe
//and as you scroll the name goes away and leaves just the logo
//!!!!Add live chat feature with moderation!!!

//Add page load animation 

//ADD SCROLLSPY
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
