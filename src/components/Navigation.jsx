import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='home'><i class='fa-brands fa-linkedin fa-3x' />
            <i class='fa-brands fa-github fa-3x' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
