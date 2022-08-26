import { useMediaQuery } from "@chakra-ui/media-query";

export default function useViewport() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return isMobile;
}
