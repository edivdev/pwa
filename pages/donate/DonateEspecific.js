import SectionsTitle from "../../components/ui/SectionsTitle"
import { Box } from "@chakra-ui/react"
import Department from "./Department"

export default function DonateEspecific() {
  const title = 'Donate to specific departments'
  return (
    <section>
      <Box textAlign="center" my="5%">
        <SectionsTitle title={title} />
      </Box>
      <Department />
      <Department />
      <Department />
    </section>
  )
}
