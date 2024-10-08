import { ErrorMessage, useField } from 'formik'

const MySelect = ({ label, ...props }) => {
  const [field] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}

export default MySelect
