import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './components/Navigation'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Container fluid className='p-0'>
      <Navigation />
      <section id='introduction' className='presentation'>
        <img alt='Fernanda fotografía' src='./src/assets/img/fernandanunez.jpeg' />
        <article>
          <h1>Fernanda Nuñez</h1>
          <h2>Desarolladora Full Stack</h2>
          <p>Desarrolladora FullStack con una sólida formación en el Desarrollo de Aplicaciones Web y
            enfocada tanto en la eficiencia del código como en la experiencia del usuario.

            Actualmente busco espacios de desarrollo donde mi creatividad y habilidades técnicas sean
            valoradas, y en las que pueda contribuir a través de la implementación de soluciones
            innovadoras
          </p>
        </article>
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
