import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#trains">View Trains</Nav.Link>
    <Nav.Link href="#create-train">Add Train</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#/">Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="light" variant="light" expand="md">
    <Navbar.Brand>
      Where is my Train
      <svg style={{ margin: '8px 5px' }} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 198 36.91016">    <path fill="#1c1e23" d="m18 34.4a16.4 16.4 0 1 1 16.4-16.4 16.34585 16.34585 0 0 1 -16.4 16.4zm0-34.4a18 18 0 1 0 18 18 18.05292 18.05292 0 0 0 -18-18"></path>    <path fill="#1c1e23" d="m6.6 15.7h8.6v14h5.6v-14h8.6v-5.7h-22.8z"></path>    <text fontFamily="Helvetica-Bold, Helvetica" fontSize="13.38351" fontWeight="700" transform="translate(41.6001 14.41357)">        Massachusetts Bay<tspan x="0" y="16.06006" letterSpacing="-.05469em">T</tspan><tspan x="7.44336" y="16.06006" letterSpacing="-.00004em">ransportation</tspan><tspan x="93.69775" y="16.06006" letterSpacing="-.03663em"></tspan> <tspan x="96.92627" y="16.06006">Authority</tspan>    </text></svg>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Well hello there, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
