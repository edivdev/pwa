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


export default function DonatePage(props) {

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
