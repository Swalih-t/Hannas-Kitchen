import React, { Component } from 'react'
import '../Styles/Header.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class Header extends Component {
    constructor() {
        super()
        this.state = {
            hoverdHome: false,
            hoverdBlog: false,
            hoverdAbout: false
        }
    }

    hoverHome = () => {

        this.setState((prevState, prop) => ({
            hoverdHome: true
        }))

    }
    notHoverHome = () => {
        this.setState((prevState, prop) => ({
            hoverdHome: false
        }))

    }
    hoverBlog = () => {

        this.setState((prevState, prop) => ({
            hoverdBlog: true
        }))

    }
    notHoverBlog = () => {
        this.setState((prevState, prop) => ({
            hoverdBlog: false
        }))

    }
    hoverAbout = () => {

        this.setState((prevState, prop) => ({
            hoverdAbout: true
        }))

    }
    notHoverAbout = () => {
        this.setState((prevState, prop) => ({
            hoverdAbout: false
        }))

    }
    render() {

        return (
            <div className="header">
                <div class="row">
                    <div className="col-md-12">
                        <h1 className="header-name">HANNA'S KITCHEN</h1>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Navbar bg="light" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto " >
                                    <Link to="/" className="mx-5" onMouseOver={this.hoverHome} onMouseOut={this.notHoverHome} style={this.state.hoverdHome ? { textDecoration: 'none', color: 'rgb(239 62 152 / 89%)', transition: 'all 0.3s', fontFamily: 'monospace' } : { textDecoration: 'none', color: 'black', fontFamily: 'monospace' }}>Home</Link>
                                    <Link to="/blog" className="mx-5" onMouseOver={this.hoverBlog} onMouseOut={this.notHoverBlog} style={this.state.hoverdBlog ? { textDecoration: 'none', color: 'rgb(239 62 152 / 89%)', transition: 'all 0.3s', fontFamily: 'monospace' } : { textDecoration: 'none', color: 'black', fontFamily: 'monospace' }}>Blog</Link>
                                    <Link to="/about" className="mx-5" onMouseOver={this.hoverAbout} onMouseOut={this.notHoverAbout} style={this.state.hoverdAbout ? { textDecoration: 'none', color: 'rgb(239 62 152 / 89%)', transition: 'all 0.3s', fontFamily: 'monospace' } : { textDecoration: 'none', color: 'black', fontFamily: 'monospace' }}>About</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header
