import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Presentation = () => {
  const nameElement = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(nameElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(nameElement.current, { y: 10, duration: 1, ease: 'bounce.out' })
  }, [])
  return (
    <Container fluid className='py-5 presentation-container'>
      <Row className='align-items-center justify-content-center'>
        <Col xs={12} md={4} className='text-center mb-4 mb-md-0'>
          <Image
            src='./src/assets/img/fernandanunez.jpeg'
            alt='Fernanda Núñez'
            roundedCircle
            fluid
            className='profile-image'
          />
        </Col>
        <Col xs={12} md={6}>
          <h1
            ref={nameElement}
            className='name text-center text-md-start'
          >
            Fernanda Núñez
          </h1>
          <h2
            className='text-muted mb-4 text-center text-md-start'
          >Desarrolladora Full Stack
          </h2>
          <p
            className='lead text-center text-md-start'
          >
            Soy una desarrolladora apasionada, siempre dispuesta a enfrentar nuevos desafíos. Me encanta colaborar y
            comunicarme efectivamente, y estoy comprometida con el aprendizaje continuo, lo que me permite adaptarme
            rápidamente a nuevas tecnologías y metodologías. Mi enfoque está en crear soluciones innovadoras y productos
            de alta calidad que superen las expectativas de los usuarios.
          </p>
        </Col>
      </Row>
    </Container>

  )
}

export default Presentation
