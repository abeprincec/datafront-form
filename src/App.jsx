import React from 'react'
import Form from './Form'
import {signInApi} from './signInApi'

import './App.css'

function App() {
  return (
    <div className="max-width-wrapper">
      <Form signInApi={signInApi} />
    </div>
  )
}

export default App
