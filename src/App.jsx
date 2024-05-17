import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './components/Navigation'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Navigation />
      <Container fluid className='p-0'>
        <section className='presentacion'>
          <h1>Desarolladora Full Stack</h1>
          <h2>Fernanda Nuñez</h2>
          <img alt='Fernanda' src='./src/assets/img/fernanda.jpeg' />
          <h3>Desarrolladora FullStack con una sólida formación en el Desarrollo de Aplicaciones Web y
            enfocada tanto en la eficiencia del código como en la experiencia del usuario.

            Actualmente busco espacios de desarrollo donde mi creatividad y habilidades técnicas sean
            valoradas, y en las que pueda contribuir a través de la implementación de soluciones
            innovadoras
          </h3>
        </section>
        <section id='tecnologias' className='stack-tecnologico'>
          <p>Aquí debe ir el stack tecnologico</p>
        </section>
        <section id='proyectos' className='proyectos'>
          <p>Aquí deben ir los proyectos</p>
        </section>
        <section id='contactame' className='contacto'>
          <p>contactame</p>
        </section>
      </Container>
    </>
  )
}

export default App
