import React, { Component } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Media } from 'react-breakpoints';
import profilePic from '../img/profile2.png';
import MyResume from '../Satid-Resume.pdf';
import styled from 'styled-components';

export default class About extends Component {
    render() {
        return (
            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                        <Row className="home-about mb-3" id="about">
                            <Col>
                                <ImageContainer
                                    src={profilePic}
                                    style={{ marginLeft: '8rem' }}
                                    roundedCircle
                                ></ImageContainer>
                            </Col>
                            <Col
                                className="mt-4 mb-3"
                                style={{ marginRight: '2rem' }}
                            >
                                <h1>About Me</h1>
                                <div className="underline" />
                                <div style={{ display: 'inline-block' }}>
                                    <h1 style={{ fontSize: '1.5rem' }}>
                                        Name:&ensp;
                                    </h1>
                                </div>

                                <div style={{ display: 'inline-block' }}>
                                    <h4>Satid Tachatanitanont</h4>
                                </div>

                                <br />

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    Education
                                </h1>

                                <h4>
                                    Information and Communication Engineering,
                                    Chulalongkorn University
                                </h4>

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    Frontend Skills
                                </h1>

                                <h4>React, Redux, Next.js</h4>

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    UI Library
                                </h1>

                                <h4>Material-UI, Bootstrap</h4>

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    Programming Skills
                                </h1>

                                <h4>Java, Javascript, R, Python, Typescript</h4>

                                <ButtonContainer className="mt-2">
                                    <a
                                        href={MyResume}
                                        download="SatidResume"
                                        style={{ color: 'white' }}
                                    >
                                        My Resume
                                    </a>
                                </ButtonContainer>
                            </Col>
                        </Row>
                    ) : (
                        <Row className="home-about mb-3" id="about">
                            <Col
                                className="mt-4 mb-3 mx-auto"
                                style={{ marginRight: '2rem' }}
                            >
                                <h1 className="text-center">About Me</h1>
                                <div className="underline mx-auto" />
                                <div style={{ display: 'inline-block' }}>
                                    <h1 style={{ fontSize: '1.5rem' }}>
                                        Name:&ensp;
                                    </h1>
                                </div>

                                <div style={{ display: 'inline-block' }}>
                                    <h4>Satid Tachatanitanont</h4>
                                </div>

                                <br />

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    Education
                                </h1>

                                <h4>
                                    Information and Communication Engineering,
                                    Chulalongkorn University
                                </h4>

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    Frontend Skills
                                </h1>

                                <h4>React, Redux, Next.js</h4>

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    UI Library
                                </h1>

                                <h4>Material-UI, Bootstrap</h4>

                                <h1 style={{ fontSize: '1.5rem' }}>
                                    Programming Skills
                                </h1>

                                <h4>Java, Javascript, R, Python, Typescript</h4>

                                <div className="text-center">
                                    <ButtonContainer className="mt-2">
                                        <a
                                            href={MyResume}
                                            download="SatidResume"
                                            style={{ color: 'white' }}
                                        >
                                            My Resume
                                        </a>
                                    </ButtonContainer>
                                </div>
                            </Col>
                        </Row>
                    )
                }
            </Media>
        );
    }
}

const ImageContainer = styled(Image)`
    width: 23rem;
    height: 20rem;
`;

const ButtonContainer = styled(Button)`
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    border: var(--mainYellow);
    border-radius: 0.5rem;
    transition: all 0.5s;
    justify-content: center;
    padding: 0.5rem 1rem;
`;
