import Input from '../../ui/Input'
import { Select } from '@chakra-ui/react'
import Button from '../../ui/Button'
import { Textarea } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('connectme')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Box className="contact-form-wrapper">
          <Box className="form-name">
            <Input placeholder="Full Name" type="text" />
          </Box>

          <Box className="form-email">
            <Input placeholder="Email" type="email" required />
          </Box>

          <Box className="form-organization">
            <Select required>
              <option value="" disabled selected>Type of organization</option>
              <option>asd</option>
              <option>asd</option>
            </Select>
          </Box>

          <Box className="phone">
            <Input placeholder="phone" type="number" />
          </Box>

          <Box className="form-school">
            <Input placeholder="School or organization" type="text" />
          </Box>

          <Box className="form-help">
            <Select required>
              <option value="" disabled selected>How can we help you?</option>
              <option>asd</option>
              <option>asd</option>
            </Select>
          </Box>

          <Box className="form-message">
            <Textarea placeholder="Message" rows="5" />
          </Box>

          <Box className="form-send">
            <Button size="banner" variant="fillBlue" type="submit">
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  )
}
