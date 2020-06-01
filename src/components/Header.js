import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import background from '../img/background2.jpeg';
import { Link as scrollLink } from 'react-scroll';

export default class Header extends Component {
    render() {
        return (
            <Banner id="header">
                <Row>
                    <Col className="my-auto ml-5">
                        <h1
                            className="banner-sub-header"
                            style={{ color: 'white' }}
                        >
                            Hello, I'm
                        </h1>
                        <h1 className="banner-main-header">Satid T.</h1>
                        <div className="underline" />
                        <h1
                            className="banner-sub-header"
                            style={{ color: 'white' }}
                        >
                            Welcome to My Personal Site
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0'
                        }}
                    >
                        <ScrollDownBtn
                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            <i className="fas fa-chevron-down"></i>
                        </ScrollDownBtn>
                    </div>
                </Row>
            </Banner>
        );
    }
}

const Banner = styled(Row)`
    width: 100vw;
    height: 100vh;
    background-color: white;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ScrollDownBtn = styled(scrollLink)`
    background: none;
    border: none;
    font-size: 3rem;
    color: var(--sky) !important;
    transition: all 1s;
    outline: 0 !important;
    &:hover {
        text-shadow: 6px 6px 100px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        background: none;
        border: none;
        box-shadow: none;
        font-size: 4rem;
    }
    &:active {
        background: none !important;
        box-shadow: none;
    }
    &:focus {
        background: none !important;
        box-shadow: none;
    }
`;
