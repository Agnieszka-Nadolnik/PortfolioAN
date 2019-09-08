import React, {Component} from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Technologies from './components/Technologies.js';
import Skills from './components/Skills.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import './style/main.scss';
import 'aos/dist/aos.css';
import techData from './components/data/tech_data';
import projectData from './components/data/projects_data';


class App extends Component {
  
  state = {
    techData,
    projectData
  }
  
    render() {
      
    return (
      <div className="wrapper">
        <Header/>
        <Banner/>
        <About/>
        <Technologies tech={this.state.techData}/>
        <Skills/>
        <Portfolio project={this.state.projectData}/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
 export default App;