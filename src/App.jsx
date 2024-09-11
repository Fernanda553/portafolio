import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './components/Navigation'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'
import { Contact, Presentation, Proyects, Technologies } from './pages'

const App = () => {
  return (
    <Container fluid className='p-0'>
      <Navigation />
      <section id='presentacion'>
        <Presentation />
      </section>
      <section id='technologies'>
        <Technologies />
      </section>
      <section id='proyects'>
        <Proyects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </Container>
  )
}

export default App
