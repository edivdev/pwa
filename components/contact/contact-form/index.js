import Input from '../../ui/Input'
import { Select } from '@chakra-ui/react'
import Button from '../../ui/Button'
import { Textarea } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function ContactForm({ isMobile }) {

  function handleSubmit(e) {
    e.preventDefault()
    console.log('connectme')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Box className={isMobile ? "contact-form-wrapper-mobile" : "contact-form-wrapper"}>
          <Box className="form-name">
            <Input placeholder="Full Name*" type="text" />
          </Box>

          <Box className="form-email">
            <Input placeholder="Email*" type="email" required />
          </Box>

          <Box className="form-organization">
            <Select required defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Type of organization*</option>
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
            <Input placeholder="phone*" type="number" />
          </Box>

          <Box className="form-school">
            <Input placeholder="School or organization*" type="text" />
          </Box>

          <Box className="form-help">
            <Select required defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>How can we help you?*</option>
              <option>General inquiry</option>
              <option>Become a volunteer</option>
              <option>Become a member</option>
              <option>Apply for project sponsorship</option>
              <option>Want to make a donation</option>
            </Select>
          </Box>

          <Box className="form-message">
            <Textarea placeholder="Message*" rows="5" />
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
