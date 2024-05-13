import './App.css'

const App = () => {
  return (
    <>
      <div className='presentacion'>
        <h1>Desarolladora Full Stack</h1>
        <p>Fernanda Nuñez</p>
        <img alt='Fernanda' src='./src/assets/img/fernanda.jpeg' />
      </div>
      <div className='descripcion-websites'>
        <h2>Desarrolladora FullStack con una sólida formación en el Desarrollo de Aplicaciones Web y
          enfocada tanto en la eficiencia del código como en la experiencia del usuario.

          Actualmente busco espacios de desarrollo donde mi creatividad y habilidades técnicas sean
          valoradas, y en las que pueda contribuir a través de la implementación de soluciones
          innovadoras
        </h2>
        <i class='fa-brands fa-linkedin' />
        <i class='fa-brands fa-github' />
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
