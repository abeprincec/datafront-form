import React from 'react'

import './Label.css'

function Label({id, label}) {
  return (
    <label className="label" htmlFor={id}>
      {label}
    </label>
  )
}

export default Label
