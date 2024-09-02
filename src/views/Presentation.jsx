import { Container } from 'react-bootstrap'

export const Presentation = () => {
  return (
    <Container fluid className='presentation'>
      <img alt='Fernanda fotografía' src='./src/assets/img/fernandanunez.jpeg' />
      <h1>Fernanda Nuñez</h1>
      <h2>Desarolladora Full Stack</h2>
      <p>
        Apasionada y siempre dispuesta a enfrentar nuevos desafíos, amante de la colaboración,
        la comunicación y el aprendizaje continuo, lo que me permine adaptarme rápidamente a nuevas tecnologías
        y metodologías. Estoy comprometida con la creación de soluciones innovadoras y productos
        de alta calidad que superen las expectativas de los usuarios.
      </p>
    </Container>
  )
}
