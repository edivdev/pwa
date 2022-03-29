import { Box, Flex } from '@chakra-ui/react'
import SectionsTitle from '../ui/SectionsTitle'
import useTheme from '../../hooks/useTheme'
import MemberCard from './MemberCard'

export default function BoardMembers({ members, setPopupInfo, setIsPopupShowing }) {
  const theme = useTheme()
  return (
    <section>
      <Box bg={theme.colors.main.babyblue} textAlign="center" py="30px">
        <SectionsTitle title="Board" />
        <Flex flexWrap="wrap" justifyContent="center">
          {members.map((member) =>
            <MemberCard member={member} key={member.id} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
          )}
        </Flex>
      </Box>
    </section>
  )
}
