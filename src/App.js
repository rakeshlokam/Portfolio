import React, { Component } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";
import Nav from "./components/Nav/nav";
import Project from "./components/Projects/Projects";

class App extends Component {
    state = {
        toggleMenu: false
    };

    handleNavChange = () => {
        this.setState(state => ({
            toggleMenu : !state.toggleMenu 
                            ? 'active': 
                            state.toggleMenu === 'deactive' 
                            ? 'active':
                              'deactive'
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Menu handleNavChange={this.handleNavChange} showMenu={this.state.toggleMenu}/>
                <Nav handleNavChange={this.handleNavChange} showMenu={this.state.toggleMenu}/>
                <Header />
                <About />
                <Project />
                <Contact />
               
            </React.Fragment>
        );
    } 
}

export default App;