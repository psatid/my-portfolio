import React from 'react'
import styled from 'styled-components'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SideBar({ sideBarOpen }) {

    if (sideBarOpen == false) {
        return null
    } else {
        return (
            <SidebarContainer>
                <Button style={{
                    background: "transparent",
                    border: "transparent",
                    fontSize: "3rem",
                    color: "black"
                }} onClick={() => {
                    sideBarOpen = false
                    console.log(sideBarOpen)
                }}>
                    <i className="fas fa-times"> </i>
                </Button>
                <div>
                    <Row>
                        <Link to='/'>Home</Link>
                    </Row>
                    <Row>
                        <Link to='project'>Projects</Link>
                    </Row>
                </div>
            </SidebarContainer>
        )
    }
}


const SidebarContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: var(--neutral);
`