import React from 'react'

import { ErrorMessage, useField } from 'formik'

const MyCheckBox = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}

export default MyCheckBox
