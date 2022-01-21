import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Admins = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      "email":email,
      "password":password
    }
    
    axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/admins/signin',
      data: payload
    })
    .then(({ data }) => {
      localStorage.setItem( 'token', data.token )
      router.push('/admins')
    })
    .catch(function(err){
      console.log(err)
    }) 
  }

  return (
    <div>
      admin login page

      <form id="login-form" onSubmit={handleSubmit}>
          <fieldset>
            <input className="login-input" onChange={(event) => setEmail(event.target.value) } type="email"  name="email" placeholder="Email" autoComplete="on" />
          </fieldset>
          <fieldset>
            <input className="login-input" onChange={(event) => setPassword(event.target.value) } type="password" name="password" placeholder="Password" autoComplete="current-password" />
          </fieldset>
          <fieldset>
            <button className="green-button button">Enter</button>
          </fieldset>
        </form>
    </div>
  )
}

export default Admins

