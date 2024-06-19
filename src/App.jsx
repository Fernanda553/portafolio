import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './components/Navigation'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Container fluid className='p-0'>
      <Navigation />
      <section id='presentacion' className='presentation'>
        <img alt='Fernanda fotografía' src='./src/assets/img/fernandanunez.jpeg' />
        <div>
          <h1>Fernanda Nuñez</h1>
          <h2>Desarolladora Full Stack</h2>
          <p>
            Apasionada y siempre dispuesta a enfrentar nuevos desafíos, amante de la colaboración,
            la comunicación y el aprendizaje continuo, lo que me permine adaptarme rápidamente a nuevas tecnologías
            y metodologías. Estoy comprometida con la creación de soluciones innovadoras y productos
            de alta calidad que superen las expectativas de los usuarios.
          </p>
        </div>
      </section>
      <section id='technologies' className='technologies'>
        <p>Aquí debe ir el stack tecnologico</p>
      </section>
      <section id='proyects' className='proyects'>
        <p>Aquí deben ir los proyectos</p>
      </section>
      <section id='contact' className='contact'>
        <p>contactame</p>
      </section>
      <Footer />
    </Container>
  )
}

export default App
