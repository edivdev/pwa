import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MembershipPlan from '../../components/donate/MembershipPlan'
import PagesHeader from '../../components/ui/PagesHeader'
import Image from 'next/image'
import Text from '../../components/ui/Text'
import DonateEspecific from './DonateEspecific'
import useViewport from '../../hooks/useViewport'
import { donateDepartments } from '../../components/data/initialState'
import SectionsTitle from '../../components/ui/SectionsTitle'
import Link from 'next/link'

export default function DonatePage(props) {

  const qrdata = `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`

  const { projs } = props

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (
    <Box>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="Educación Diversa"
        text1="DONATE"
      />
      <Box w={isMobile ? "auto" : "1000"} h={isMobile ? "200px" : "666"} position="relative" mt={isMobile ? "30px" : "-150px"}>
        <Image src="/images/static/donate/donatevideo.png" alt=".." layout='fill' objectFit='contain' />
      </Box>
      <Box my="5%" mx={isMobile ? "4%" : "8%"} textAlign="justify">
        <Box className="donate-block">
          <p>Educación Diversa would provide schools and community foundations with access to free educational resources and the opportunity to engage and learn from teachers in developed countries to implement educative classes and projects about diverse topics in classrooms and communities in underdeveloped countries. More specifically, the organization provides free art-based diverse education in three areas: human rights, elimination of violence and bullying, and sexual and reproductive health.</p>
          <p>So our main objective is to contribute to the development of healthy, inclusive and respectful communities through educational workshops that are fun and effective.</p>
          <p>We need your help to finance the operations of the organisation and fund projects like the development of our learning platform and also small financial scholarships for people in need of opportunities and income. Lower socio-economic community foundations and organisations will always have access to this platform for FREE and we hope that the education provided via the platform will contribute to equality in education and the information that people need to make good decisions about their lives and bodies.  By becoming a member of Educacion Diversa, you can be part of this journey and help us help others.  Lastly, we hope to build the learning platform with a group of women who are undergraduate coders from underdeveloped countries, in order for them to learn as well as contribute to this bigger thing in itself.</p>
          <h2>Why should you contribute</h2>
          <p>One thing our end users have in common is having each other, and the power of learning is in the power of people too. You can actually empower these kids through education. They just needed someone to believe in them and give them opportunities.</p>
          <p>We believe with education we can make a difference and we would like for you to be part of this.</p>
          <h2>Membership Program</h2>
          <p>Educacion Diversa Inc. has been structured as an Incorporated Association according to the legislation of the Australian Capital Territory. In this system, a group of people decide to register as an association and in return, it receives recognition as a legal entity separate from its members, providing a mechanism for associations to establish a corporate identity with limited liability for its members and office bearers. Another important characteristic of being an Incorporated Association is that all proceeds from memberships or other activities undertaken by the association can’t be distributed among its members as profits, but rather need to be re-invested in the pursue of the goals and objectives set out by the organisation.</p>
            <p>Becoming a member of Educacion Diversa Inc. gives you the chance to contribute to the on-going financial sustainability and operations of the organisation, projects, campaigns and the development of educational packages in the areas of diverse topics.  You also are given the chance to participate in the strategic decision-making process of Educacion Diversa Inc and you will be able to nominate yourself or other qualified members to fill any vacancies advertised in the Board of Directors. Your membership contribution also will help to create small scholarship opportunities for academics and adolescents from underdeveloped countries to ensure they also have access to opportunities to gain experience in their sector but also to ensure they can be paid for their contribution, as they really do need it to break the cycle of poverty.  Lastly, any surplus funding received will be used to fund the development of learning resources to support our educational activities on the ground.</p>
        </Box>
      </Box>
      <Box display="flex">
      
          <Box width="45%" display="flex" flexDirection="column" alignItems="center">
          <Text>Click Here to get you Membership</Text>
              <Link href="https://www.paypal.com/instantcommerce/checkout/RYZH4VQY7ETD2" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Box display="flex" flexDirection="column" >
                  <Box width="180px" height="180px" position="relative">
                    <Image alt="membership-program-payment-button" src="/images/static/donate/with-white-outline.png" layout="fill" />
                  </Box>
                </Box>
                </a>
              </Link>
            </Box> 

            <Box w="5%">OR</Box>

            <Box width="45%" display="flex" flexDirection="column" alignItems="center">
            <Text>Scan this QR code to get your Membership</Text>
              
                <Box display="flex" flexDirection="column" >
                  <Box width="180px" height="180px" position="relative">
                    <Image alt="membership-program-payment-button" src={`data:image/png;base64,${qrdata}`} layout="fill" />
                  </Box>
                </Box>
            </Box>

      </Box>
      <MembershipPlan isMobile={isMobile} />
      <Box display="flex" flexWrap="wrap" margin="auto" maxWidth="900px" p="50px 0">
        <Box textAlign="center" width="100%">
        <SectionsTitle title="Donate to a specific project" />
        </Box>
        {projs.map((project)=>{
          return(
              <Box key={project.id} m="25px 10px">
                <Text textAlign="center"><b>{project.name}</b></Text>
                <Text textAlign="justify">{project.content}</Text>
              </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export async function getStaticProps() {

  return {
    props: {
      projs: donateDepartments
    }
  }
}
