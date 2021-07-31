import React from 'react'

import './Checkbox.css'

function Checkbox({id, name, label, ...props}, ref) {
  return (
    <label className="checkbox" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        name={name}
        ref={ref}
        {...props}
      />

      <span className="checkbox-label">{label}</span>
    </label>
  )
}

const WrappedCheckbox = React.forwardRef(Checkbox)

export default WrappedCheckbox
