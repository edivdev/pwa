import { useState } from 'react'
import Input from '../../ui/Input'
import { Select } from '@chakra-ui/react'
import Button from '../../ui/Button'
import { Textarea } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'

export default function ContactForm({ isMobile }) {

  function handleSubmit(e) {
    e.preventDefault()
    console.log('connectme')
  }

  const [sentEmail, setSentEmail] = useState(false)
  const [fullname, setFullname] = useState('')
  const [typeOrganization, setTypeOrganization] = useState('')
  const [nameOrganization, setNameOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [help, setHelp] = useState('')
  const [message, setMessage] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    setSentEmail(true)
    emailjs.send(process.env.newsletterService,process.env.contactFormTemplate, templateParams, process.env.newsletterKey)
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
}

const templateParams = {
  full_name: fullname,
  type_organization: typeOrganization,
  email: email,
  name_organization: nameOrganization,
  phone: phone,
  contact_phone: phone,
  can_we_help: help,
  message: message
};

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box>
        <Box className={isMobile ? "contact-form-wrapper-mobile" : "contact-form-wrapper"}>
          <Box className="form-name">
            <Input placeholder="Full Name*" type="text" required name="name" onChange={(e) => setFullname(e.target.value)} />
          </Box>

          <Box className="form-email">
            <Input placeholder="Email*" type="email" required name="email" onChange={(e) => setEmail(e.target.value)}/>
          </Box>

          <Box className="form-organization">
            <Select required placeholder="Type of organization*" onChange={(e) => setTypeOrganization(e.target.value)}>
              <option>Individual</option>
              <option>Community / Organization non for profit</option>
              <option>Company / Business</option>
              <option>Local goverment </option>
              <option>Federal goverment </option>
              <option>Foundation / Charity</option>
              <option>Other </option>
            </Select>
          </Box>

          <Box className="phone">
            <Input placeholder="phone" type="number" name="phone" onChange={(e) => setPhone(e.target.value)}/>
          </Box>

          <Box className="form-school">
            <Input placeholder="School or organization*" type="text" required onChange={(e) => setNameOrganization(e.target.value)} />
          </Box>

          <Box className="form-help">
            <Select required placeholder="How can we help you?*" onChange={(e) => setHelp(e.target.value)}>
              <option>General inquiry</option>
              <option>Become a volunteer</option>
              <option>Become a member</option>
              <option>Apply for project sponsorship</option>
              <option>Want to make a donation</option>
            </Select>
          </Box>

          <Box className="form-message">
            <Textarea placeholder="Message*" rows="5" required onChange={(e) => setMessage(e.target.value)}/>
          </Box>

          <Box className="form-send">
            <Button size="banner" variant="fillBlue" type="submit" disabled={ sentEmail ? true : false }>
              { sentEmail ? 'Sent!' : 'Send' }
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
    { 
      sentEmail && 
        <Box color="black">
          Thank you! your information has been sent. Soon we will contact you!
        </Box>
    }
    </>
  )
}
