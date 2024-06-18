import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

const navItems = [
  { to: 'introduction', label: 'Sobre mi' },
  { to: 'technologies', label: 'Tecnologías' },
  { to: 'proyects', label: 'Proyectos' },
  { to: 'contact', label: 'Contáctame' }
]

export const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg' className='fixed-top'>
      <Container fluid>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-auto' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className='me-auto align-items-end'>
            {navItems.map((item) => (
              <Nav.Link as={Link} to={item.to} smooth duration={100} key={item.to}>
                <p className='navigation'>{item.label}</p>
              </Nav.Link>
            ))}
          </Nav>
          <Nav className='d-flex align-items-end ms-auto'>
            <NavLink
              href='https://www.linkedin.com/in/fernandanunezespinoza/'
              target='_blank'
              rel='noreferrer'
              className='icons'
            >
              <i class='icons fa-brands fa-linkedin fa-lg' />
            </NavLink>
            <Nav.Link
              href='https://github.com/Fernanda553'
              target='_blank'
              rel='noreferrer'
              className='icons'
            >
              <i class='icons fa-brands fa-github fa-lg' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
