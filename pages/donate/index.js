import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MembershipPlan from "../../components/donate/MembershipPlan";
import PagesHeader from "../../components/ui/PagesHeader";
import Text from "../../components/ui/Text";
import useViewport from "../../hooks/useViewport";
import { donateDepartments2 } from "../../components/data/initialState";
import Link from "next/link";
import BankDetails from "../../components/donate/BankDetails";
import Head from "next/head";

export default function DonatePage(props) {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  return (
    <>
      <Head>
        <title>Donate</title>
      </Head>
      <Box>
        <PagesHeader
          background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
          text0="Educación Diversa"
          text1="DONATE"
        />
        <Box
          w={isMobile ? "auto" : "1000"}
          position="relative"
          mt={isMobile ? "30px" : "-150px"}
        >
          <Box display="flex" justifyContent="space-evenly" >
            <iframe
              src="https://www.gvrapp.au/embed/art-based-education-1765893034507"
              width="100%"
              height="893"
              title="Art Based Education"
              style={{
                border: 'none',
                borderRadius: "16px",
                maxWidth: '500px',
                margin: '0 auto',
                display: 'block'
              }}
            />
          </Box>

        </Box>

        {/* TODO: Trensform all the process of donation in a simple component not depending on the "Donation section",
should be movable to the new website.  */}

        <Box display="flex" justifyContent="space-evenly">
          <Box mt="2em" w={isMobile ? "90%" : "41%"}>
            <Text fontSize="22px" textAlign="center" fontWeight="600">
              Or you can contact us using the contact form on{" "}
              <Link href="/contact">
                <a>
                  <span style={{ color: "#658AC8", fontWeight: "900" }}>
                    Contact Page
                  </span>
                </a>
              </Link>{" "}
              {""}
              and select the option &quot;Want to make a donation&quot;.
            </Text>
          </Box>
        </Box>

        <Box>
          <BankDetails isMobile={isMobile} />
        </Box>

        <MembershipPlan isMobile={isMobile} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projs: donateDepartments2,
    },
  };
}
