import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Footer from "../../footer";
import Header from "../../header";
import useViewport from "../../../hooks/useViewport";
import MobileMenu from "../../header/MobileMenu";

export default function Layout(props) {
  const result = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(result[0]);
  }, [isMobile, result]);

  return (
    <Box>
      {!isMobile && <Header />}
      {isMobile && <MobileMenu />}
      <main>
        <Box mt={isMobile ? "70px" : ""}>{props.children}</Box>
      </main>
      <Footer />
    </Box>
  );
}
