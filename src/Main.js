import React, { Component } from 'react';
import HeaderSection from './components/Header';
import ProjectSection from './components/Project';
import AboutSection from './components/About';
import ContactSecton from './components/Contact';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderSection />
                <ProjectSection />
                <AboutSection />
                <ContactSecton />
            </React.Fragment>
        );
    }
}
