import { useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import emailjs from '@emailjs/browser'

export default function MemberForm() {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [sentEmail, setSentEmail] = useState(false)
  
  async function handleSubmit(e) {
    e.preventDefault()
    setSentEmail(true)
    emailjs.send(process.env.newsletterService,process.env.newsletterTemplate, templateParams, process.env.newsletterKey)
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
}

  const templateParams = {
    first_name: fname,
    last_name: lname,
    email_address: email
};

  


  if (sentEmail){
    return (
      <p>Registered Sucesfully!</p>
    )
  }

  return (
    <form id="footer-form" onSubmit={handleSubmit}>
      <Input my="3%" placeholder="First Name"  type="text" onChange={(e)=>setFname(e.target.value)}/>
      <Input my="3%" placeholder="Last Name"  type="text" onChange={(e)=>setLname(e.target.value)} />
      <Input my="3%" placeholder="Email"  type="text" name="email" onChange={(e)=>setEmail(e.target.value)} />
      <Button type="submit" variant="SignUp">REGISTER</Button>
    </form>
  )
}
