import React, { Component } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import contactBanner from '../img/contact-page-banner.png';
import * as emailjs from 'emailjs-com';
import { Media } from 'react-breakpoints';

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, message } = this.state;
        let templateParams = {
            from_name: name,
            from_email: email,
            message_html: message
        };
        emailjs.send(
            'default_service',
            'my_portfolio',
            templateParams,
            'user_8tN80u81uvDdt0ie0bwRc'
        );

        console.log(this.state);
        this.resetForm();
    };

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                        <Row
                            id="contact"
                            style={{
                                width: '100vw',
                                height: '75vh',
                                background: 'var(--sky)'
                            }}
                        >
                            <Col
                                style={{
                                    width: '50vw',
                                    marginTop: '3rem',
                                    marginLeft: '2rem'
                                }}
                            >
                                <h1 className="mx-auto">Contact Me</h1>
                                <div className="underline" />
                                <Form>
                                    <Form.Row className="ml-0">
                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="name"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                placeholder="Name"
                                                style={{
                                                    width: '20vw',
                                                    marginRight: '2rem'
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Email
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                placeholder="Enter email"
                                                style={{ width: '20vw' }}
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group>
                                        <Form.Label
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            Message
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            id="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            placeholder="Message.."
                                            style={{
                                                width: '30vw',
                                                height: '10rem'
                                            }}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col style={{ width: '50vw' }}>
                                <div style={{ marginTop: '6rem' }}>
                                    {/* img ref: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.comsyscx.com%2Fcontact-us%2F&psig=AOvVaw3P2qMtgwgvEaTkBqDQi7_y&ust=1590765117900000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID3rJDs1ukCFQAAAAAdAAAAABAZ */}
                                    <Image src={contactBanner} />
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <Row
                            id="contact"
                            style={{
                                width: '100vw',
                                height: '75vh',
                                background: 'var(--sky)'
                            }}
                        >
                            <Col
                                style={{
                                    width: '50vw',
                                    marginTop: '3rem',
                                    marginLeft: '2rem'
                                }}
                            >
                                <h1 className="mx-auto">Contact Me</h1>
                                <div className="underline" />
                                <Form>
                                    <Form.Row className="ml-0">
                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="name"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                placeholder="Name"
                                                style={{
                                                    width: '35vw',
                                                    marginRight: '2rem'
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Email
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                placeholder="Enter email"
                                                style={{ width: '35vw' }}
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group>
                                        <Form.Label
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            Message
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            id="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            placeholder="Message.."
                                            style={{
                                                width: '50vw',
                                                height: '5rem'
                                            }}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                        className="justify-content-center"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    )
                }
            </Media>
        );
    }
}
