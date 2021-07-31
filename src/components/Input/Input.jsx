import React from 'react'

import './Input.css'

function Input({label, id, type, name, required = false, ...props}, ref) {
  return (
    <input
      autoComplete={type === 'email' ? 'email' : null}
      id={id}
      type={type}
      ref={ref}
      name={name}
      required={required}
      {...props}
    />
  )
}

const WrappedInput = React.forwardRef(Input)

export default WrappedInput
