import { Col, Container, Row } from 'react-bootstrap'

const Technologies = () => {
  return (
    <Container fluid className='technologies-section'>
      <h2 className='technologies-title'>😄 Habilidades</h2>

      <Row className='mb-5'>
        <Col xs={12}>
          <h3 className='technology-category'>Front-end Technologies</h3>
        </Col>
        <Col xs={12} className='technology-icons'>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='HTML5' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='CSS3' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='JavaScript' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt='TypeScript' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' alt='Sass' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' alt='Bootstrap' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='React' className='technology-icon' />
        </Col>
      </Row>

      <Row className='mb-5'>
        <Col xs={12}>
          <h3 className='technology-category'>Back-end Technologies</h3>
        </Col>
        <Col xs={12} className='technology-icons'>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='Node.js' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='Express' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' alt='PostgreSQL' className='technology-icon' />
          <img src='https://cdn.simpleicons.org/jsonwebtokens/000000' alt='JWT' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' alt='Docker' className='technology-icon' />
        </Col>
      </Row>

      <Row className='mb-5'>
        <Col xs={12}>
          <h3 className='technology-category'>Version Control & Collaboration</h3>
        </Col>
        <Col xs={12} className='technology-icons'>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt='Git' className='technology-icon' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt='GitHub' className='technology-icon' />
        </Col>
      </Row>

      <Row className='contact-links'>
        <Col xs={12}>
          <h3 className='technology-category'>🌍 Puedes encontrarme en:</h3>
        </Col>
        <Col xs={12} className='technology-icons'>
          <a href='https://www.linkedin.com/in/fernandanunezespinoza/' target='_blank' rel='noreferrer'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' alt='LinkedIn' className='contact-link-icon' />
          </a>
          <a href='mailto:fernanda.nunez55@gmail.com'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' alt='Email' className='contact-link-icon' />
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Technologies
