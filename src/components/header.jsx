import React from 'react'

import style from '../css/header.module.scss'
import {Navbar} from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return <div>
            <Navbar expand="lg" variant="light" bg="info" sticky="top">
                <div className="container justify-content-center">
                    <Navbar.Brand href="#">Contacts</Navbar.Brand>
                </div>

            </Navbar>
        </div>
    }
}