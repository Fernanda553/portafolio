import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './components/Navigation'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'
import { Presentation } from './views/Presentation'
import { Technologies } from './views/Technologies'
import { Proyects } from './views/Proyects'

const App = () => {
  return (
    <Container fluid className='p-0'>
      <Navigation />
      <section id='presentacion'>
        <Presentation />
      </section>
      <section id='technologies' className='technologies'>
        <Technologies />
      </section>
      <section id='proyects' className='proyects'>
        <Proyects />
      </section>
      <section id='contact' className='contact'>
        <p>contactame</p>
      </section>
      <Footer />
    </Container>
  )
}

export default App
