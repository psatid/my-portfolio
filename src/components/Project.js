import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { projectData } from '../ProjectData';

export default class Project extends Component {
    state = {
        projects: projectData
    };

    render() {
        return (
            <Row className="home-project justify-content-cente" id="project">
                <Row className="mt-5">
                    <Col>
                        <h1
                            className="project-header"
                            style={{ color: 'white' }}
                        >
                            Latest Projects
                        </h1>
                        <div className="underline mx-auto" />
                    </Col>
                </Row>
                <Row className="justify-content-center mx-auto mt-4 mb-5">
                    {this.state.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            img={project.img}
                            url={project.url}
                            github={project.github}
                            toolUsed={project.toolUsed}
                        />
                    ))}
                </Row>
            </Row>
        );
    }
}
