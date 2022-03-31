import Input from '../ui/Input'
import Button from '../ui/Button'

export default function MemberForm() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('conect me')
  }
  return (
    <form id="footer-form" onSubmit={handleSubmit}>
      <Input my="3%" placeholder="First Name" required type="text" />
      <Input my="3%" placeholder="Last Name" required type="text" />
      <Input my="3%" placeholder="Email" required type="email" name="email" />
      <Button type="submit" variant="SignUp">SIGN UP</Button>
    </form>
  )
}
