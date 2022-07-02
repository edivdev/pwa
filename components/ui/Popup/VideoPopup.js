import { Box, Flex } from "@chakra-ui/react";
import Text from "../Text";

export default function VideoPopup({
  isPopupShowing,
  closePopUp,
  popupInfo,
  isMobile,
}) {
  return (
    <Box
      className="modal"
      display={isPopupShowing ? "flex" : "none"}
      onClick={closePopUp}
    >
      <Flex
        className=""
        display="flex"
        w="654px"
        h="452px"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Flex justifyContent="flex-end">
          <Flex w="25px" h="25px" justifyContent="center" alignItems="center">
            <Text
              fontSize="35px"
              color="gray"
              className="hoverable"
              onClick={closePopUp}
            >
              &times;
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around" alignItems="center">
          <Box w="100%" dangerouslySetInnerHTML={{ __html: popupInfo }} />
        </Flex>
      </Flex>
    </Box>
  );
}
