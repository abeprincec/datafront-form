// export const signInApi = (email, password) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(email, password)
//     }, 500)
//   })
// }

export function signInApi(email, password) {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(async response => {
    const {token} = await response.json()
    if (response.ok) {
      const userToken = token
      if (userToken) {
        return userToken
      } else {
        return Promise.reject(new Error(`Unable to Login`))
      }
    } else {
      return Promise.reject('Unable to login')
    }
  })
}
