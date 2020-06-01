import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function ProjectCard({ name, img, url, github, toolUsed }) {
    return (
        <ProjectWrapper>
            <Card.Img variant="top" src={img} style={{ width: '100%' }} />
            <div className="text-center">
                <ButtonContainer
                    onClick={() => {
                        window.location.href = url;
                    }}
                >
                    <i className="fas fa-home"></i>
                </ButtonContainer>
            </div>
            <Card.Body>
                <Card.Title className="text-center">
                    <div>
                        <h1 className="text-capitalize my-3">{name}</h1>
                    </div>
                </Card.Title>

                <Row className="justify-content-center mb-2">
                    {toolUsed.map((tool) => {
                        console.log(typeof tool);
                        return (
                            <ToolElementContainer key={toolUsed.indexOf(tool)}>
                                {tool}
                            </ToolElementContainer>
                        );
                    })}
                </Row>

                {/* {toolEl} */}

                {/* </Card.Text> */}
            </Card.Body>
            <CardFooter>
                <div
                    style={{
                        marginTop: '-0.6rem'
                    }}
                >
                    <Button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'black',
                            marginTop: 'auto'
                        }}
                        onClick={() => {
                            window.location.href = github;
                        }}
                    >
                        <i
                            className="fab fa-github-square"
                            style={{ fontSize: '1.5rem' }}
                        ></i>
                    </Button>
                    <span>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={github}
                            style={{ color: 'black' }}
                        >
                            Source Code
                        </a>
                    </span>
                </div>
            </CardFooter>
        </ProjectWrapper>
    );
}

const ProjectWrapper = styled(Card)`
    width: 28rem;
    height: 35rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border: transparent;
    transition: all 0.3s linear;
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.4);
    &:hover {
        box-shadow: 6px 6px 9px 7px rgba(0, 0, 0, 0.4);
    }
`;

const ButtonContainer = styled(Button)`
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
    margin-top: -2rem;
    color: white;
    font-size: 2rem;
`;

const ToolElementContainer = styled(Card.Text)`
    height: 2rem;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    vertical-align: center;
    border-radius: 0.5rem;
    background: linear-gradient(
        rgba(169, 169, 169, 0.6),
        rgba(169, 169, 169, 0.6)
    );
    margin: 5% 1rem 0px 1rem;
    padding: 2px 10px 2px 10px;
`;

const CardFooter = styled(Card.Footer)`
    height: 2.5rem;
    background: var(--sky);
    text-align: center;
`;
