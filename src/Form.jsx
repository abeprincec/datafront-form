import React from 'react'
import './Form.css'
import {Alert} from 'components/Alert'
import {Input} from 'components/Input'
import {Label} from 'components/Label'
import {Checkbox} from 'components/Checkbox'
import {Button} from 'components/Button'

import {useForm} from 'react-hook-form'

function Form({signInApi}) {
  const [userToken, setUserToken] = React.useState(null)
  const [error, setError] = React.useState(null)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'test@datafront.com',
      password: '',
      rememberMe: false,
    },
  })
  const apiSignUp = ({email, password}) => {
    return signInApi(email, password).then(
      userToken => {
        setError(null)
        setUserToken(userToken)
      },
      error => {
        if (userToken) setUserToken(null)
        setError(error)
      },
    )
  }

  const onSubmit = data => {
    return apiSignUp(data)
  }

  return (
    <div className="form">
      <h1 title="Sign in">Sign in</h1>
      {userToken && <Alert type="success">Successfully logged in!</Alert>}
      {error && <Alert type="danger">{error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <Label id="email" label="Email" />
          <Input
            type="email"
            id="email"
            required={true}
            {...register('email', {
              required: 'required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
          />
          <div className="error" role="alert">
            {errors.email?.type === 'required' && 'Email is required'}
          </div>
        </div>
        <div className="field">
          <Label id="password" label="Password" />
          <Input
            type="password"
            label="Password"
            id="password"
            required={true}
            {...register('password', {
              required: 'required',
            })}
          />
          <div className="error" role="alert">
            {errors.password?.type === 'required' && 'Password is required'}
          </div>
        </div>
        <div className="field">
          <Checkbox
            label="Remember me?"
            id="rememberMe"
            {...register('rememberMe')}
          />
        </div>
        <div className="field">
          <Button type="submit">Sign in</Button>
        </div>
        <footer className="form-footer">
          <a href="/#">Forgot your password?</a>
          <p>
            Don't have an account? <a href="/#">Sign up</a>
          </p>
          <a href="/#">Resend email confirmation</a>
        </footer>
      </form>
    </div>
  )
}

export default Form
