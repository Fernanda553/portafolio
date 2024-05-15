import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './components/Navigation'

const App = () => {
  return (
    <>
      <Navigation />
      <div className='presentacion'>
        <h1>Desarolladora Full Stack</h1>
        <h2>Fernanda Nuñez</h2>
        <img alt='Fernanda' src='./src/assets/img/fernanda.jpeg' />
      </div>
      <div className='descripcion-websites'>
        <h3>Desarrolladora FullStack con una sólida formación en el Desarrollo de Aplicaciones Web y
          enfocada tanto en la eficiencia del código como en la experiencia del usuario.

          Actualmente busco espacios de desarrollo donde mi creatividad y habilidades técnicas sean
          valoradas, y en las que pueda contribuir a través de la implementación de soluciones
          innovadoras
        </h3>
        <i class='fa-brands fa-linkedin fa-3x' />
        <i class='fa-brands fa-github fa-3x' />
      </div>
      <div className='stack-tecnologico'>
        <p>Aquí debe ir el stack tecnologico</p>
      </div>
      <div className='proyectos'>
        <p>Aquí deben ir los proyectos</p>
      </div>
      <div className='contacto'>
        <p>contactame</p>
      </div>
    </>
  )
}

export default App
