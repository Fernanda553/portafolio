import { Form, Formik } from 'formik'
import { Container } from 'react-bootstrap'
import * as Yup from 'yup'

import formJson from '../data/custom-form.json'

const initialValues = {}

const Contact = () => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formik) => (

          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              <></>
            })}
          </Form>
        )}
      </Formik>
    </Container>
  )
}
export default Contact
