import { Form, Formik } from 'formik'
import { Container } from 'react-bootstrap'
import * as Yup from 'yup'

import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'

const initialValues = {}
const requiredFields = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }

    if (rule.type === 'minLength') {
      schema = schema.min(rule.value || 2, `Mínimo de ${rule.value || 2} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Debe ser un formato valido')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

const Contact = () => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (

          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'email' || type === 'input' || type === 'password') {
                return (
                  <MyTextInput
                    key={name}
                    type={type}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >

                    <option value=''>Select an option</option>
                    {
            options?.map(({ id, label }) => (
              <option key={id} value={label}>{label}</option>
            ))
          }

                  </MySelect>
                )
              }
              return null
            })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
export default Contact
