import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' className='fixed-top'>
      <Container fluid>
        <Nav className='ms-auto'>
          <Nav.Link
            href='https://www.linkedin.com/in/fernandanunezespinoza/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='navigation fa-brands fa-linkedin fa-lg' />
          </Nav.Link>
          <Nav.Link
            href='https://github.com/Fernanda553'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='navigation fa-brands fa-github fa-lg' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
