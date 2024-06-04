import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

export const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' className='fixed-top'>
      <Container fluid>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='introduccion' smooth duration={100}>
            <p className='navigation'>Sobre mi</p>
          </Nav.Link>
          <Nav.Link as={Link} to='tecnologias' smooth duration={100}>
            <p className='navigation'>Tecnologías</p>
          </Nav.Link>
          <Nav.Link as={Link} to='proyectos' smooth duration={100}>
            <p className='navigation'>Proyectos</p>
          </Nav.Link>
          <Nav.Link as={Link} to='contactame' smooth duration={100}>
            <p className='navigation'>Contáctame</p>
          </Nav.Link>
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link
            href='https://www.linkedin.com/in/fernandanunezespinoza/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='icons fa-brands fa-linkedin fa-lg' />
          </Nav.Link>
          <Nav.Link
            href='https://github.com/Fernanda553'
            target='_blank'
            rel='noreferrer'
          >
            <i class='icons fa-brands fa-github fa-lg' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
