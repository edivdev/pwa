import { Box, Flex } from '@chakra-ui/react'
import SectionsTitle from '../ui/SectionsTitle'
import useTheme from '../../hooks/useTheme'
import MemberCard from './memberCard'

export default function BoardMembers({ isMobile, members, setPopupInfo, setIsPopupShowing }) {
  const theme = useTheme()
  return (
    <section>
      <Box bg={theme.colors.main.babyblue} textAlign="center" py="30px">
        <SectionsTitle title="Board" />
        {!isMobile && <Flex flexWrap="wrap" justifyContent="center">
          {members.map((member) =>
            <MemberCard member={member} key={member.id} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
          )}
        </Flex>}
        {isMobile && <Box display="flex" overflowX="scroll">
          {members.map((member) =>
            <MemberCard minWidth="280px" member={member} key={member.id} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
          )}
        </Box>}
      </Box>
    </section>
  )
}
