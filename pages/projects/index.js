import { useState, useEffect } from "react";
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import ProjectTile from "../../components/homepage/HomeProjects/ProjectTile";
import PagesHeader from "../../components/ui/PagesHeader";
import useTheme from "../../hooks/useTheme";
import Button from "../../components/ui/Button";
import Image from "next/image";
import Text from "../../components/ui/Text";
import useViewport from "../../hooks/useViewport";
import ProjectsIntro from "../../components/homepage/HomeProjects/ProjectsIntro";
import { getProjects } from "../../lib/cmsClient";
import Head from "next/head";

const Projects = (props) => {
  const EmpowermentText = `Our empowerment projects engage children, young people and adults with the aim of giving them the resources, ideas and creative space to really reflect on the topics we are teaching about, whilst at the same time, healing and finding a therapeutic space due to the nature of the activities being art-based.  
  <br/><br/>
  Many of our projects result in resources for people to support their learning.  These learning resources are sold through our website to raise money for educational projects in underdeveloped countries.  We do however, also understand that it can be extremely hard to empower people who live in a cycle of poverty, so we also believe that we can contribute to empowering people from underdeveloped communities by generating accessible educational resources which help people navigate important life decisions.
  <br/><br/>
  Do you want to create a resource with us or be part of one of our projects?  Sign up to volunteer!
  `;

  const EducationText = `Our educational packages and matrixes of activities are designed to give guidance and ideas that are fun and engaging for children and young people and also to provide adults with a starting point and some resources to begin conversations with  children and young people in their communities and families.
  <br/><br/>
  These projects have been developed by volunteers experienced in these fields and all content has been quality checked by appropriate subject matter experts.  The opinions on this website are opinions but the education is based on facts and science.
  <br/><br/>
  If you're a teacher or professional who wants to work with us or donate educational content, articles or resources, sign up below and we'll schedule a meeting to get you onboard!
  `;

  const ActivismText = `Our activism campaigns engage children, young people and adults with the aim to provide ideas, methodologies and campaigns that they can use to engage in learning about these topics in a fun and interesting way.
  <br/><br/>
  As part of learning in a circular way, activism is exercising and practising what you have learnt and, in most countries, having your voice heard respectfully.  We do know that it’s not always easy to be an activist, but we do believe that through activism, there’s always a way to deliver education that is impactful and meaningful to communities at local, national and international levels.
  <br/><br/>
  Do you want to join one of our campaigns?  Become an ED Ambassador by signing up below! 
  `;

  const theme = useTheme();

  const [projects, setProjects] = useState(props.projects);
  const [original, setOriginal] = useState(props.projects);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [branchText, setBranchText] = useState("");

  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  // useEffect(() => {
  //   fetch(
  //     "https://cms.educaciondiversa.com/api/projects?populate=*,mainPicture,project_category,department.picture,project_template,campaignPicture,pictures,sustainable_dev_goals.picture,resources,contentDownload"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOriginal(data.data);
  //       setProjects(data.data);
  //       setLoading(false);
  //     });
  // }, []);

  const colorBlue = theme.colors.main.blue;

  const filterEducation = () => {
    let filtered = original.filter(
      (el) =>
        el.attributes.project_category.data.attributes.title === "EDUCATION"
    );

    setProjects(filtered);
    setFilteredProjects("EDUCATION");
    setBranchText(EducationText);
  };

  const filterEmpowerment = () => {
    let filtered = original.filter(
      (el) =>
        el.attributes.project_category.data.attributes.title === "EMPOWERMENT"
    );

    setProjects(filtered);
    setFilteredProjects("EMPOWERMENT");
    setBranchText(EmpowermentText);
  };

  const filterActivism = () => {
    let filtered = original.filter(
      (el) =>
        el.attributes.project_category.data.attributes.title === "ACTIVISM"
    );

    setProjects(filtered);
    setFilteredProjects("ACTIVISM");
    setBranchText(ActivismText);
  };

  function filterByEducation() {
    if (filteredProjects !== "EDUCATION") {
      filterEducation();
    } else {
      setProjects(original);
      setFilteredProjects(null);
      setBranchText("");
    }
  }

  function filterByEmpowerment() {
    if (filteredProjects !== "EMPOWERMENT") {
      filterEmpowerment();
    } else {
      setProjects(original);
      setFilteredProjects(null);
      setBranchText("");
    }
  }

  function filterByActivism() {
    if (filteredProjects !== "ACTIVISM") {
      filterActivism();
    } else {
      setProjects(original);
      setFilteredProjects(null);
      setBranchText("");
    }
  }

  if (false) {
    return (
      <Flex h="80vh" alignItems="center" justifyContent="center">
        <Image
          unoptimized={true}
          width={25}
          height={25}
          src="/images/static/assets/loader.gif"
          alt="loading..."
        />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <section>
        <PagesHeader
          background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
          text0="educación diversa"
          text1="PROJECTS"
        />

        <Flex pt="50px" px="10%" justifyContent="center">
          <Box textAlign="center">
            <Text as="h1" variant="h1" pb="4%">
              Our Projects
            </Text>

            <ProjectsIntro
              filteredProjects={filteredProjects}
              branchText={branchText}
            />
          </Box>
        </Flex>

        <Box pt="5%" display="flex" justifyContent="center">
          <Text textAlign="center" variant="normal">
            <b>
              Stay tuned into the website to see all of our projects launch over
              the next 12 months!
            </b>
          </Text>
        </Box>

        <Box my="50px" textAlign="center" fontSize="12px">
          FILTER BY CATEGORY
        </Box>

        <Box p="5% 10% 2%">
          <Flex justifyContent="center">
            <Button
              minWidth={isMobile ? "100px" : "200px"}
              variant={
                filteredProjects === "EDUCATION"
                  ? "projectsButtonActive"
                  : "projectsButton"
              }
              onClick={filterByEducation}
            >
              <Flex
                w="100%"
                justifyContent="space-evenly"
                alignItems="center"
                h="100%"
                flexDirection={isMobile ? "column" : "row"}
              >
                <Box
                  position="relative"
                  width={isMobile ? "25px" : "40px"}
                  height={isMobile ? "25px" : "40px"}
                >
                  <Image
                    src="/images/static/assets/icon_education_blue.png"
                    alt="education"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Text mt="10px" variant="projectsButton" color={colorBlue}>
                  EDUCATION
                </Text>
              </Flex>
            </Button>

            <Button
              minWidth={isMobile ? "100px" : "200px"}
              variant={
                filteredProjects === "ACTIVISM"
                  ? "projectsButtonActive"
                  : "projectsButton"
              }
              onClick={filterByActivism}
            >
              <Flex
                w="100%"
                justifyContent="space-evenly"
                alignItems="center"
                h="100%"
                flexDirection={isMobile ? "column" : "row"}
              >
                <Box
                  position="relative"
                  width={isMobile ? "25px" : "40px"}
                  height={isMobile ? "25px" : "40px"}
                >
                  <Image
                    src="/images/static/assets/icon_activism_blue.png"
                    alt="education"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Text mt="10px" variant="projectsButton" color={colorBlue}>
                  ACTIVISM
                </Text>
              </Flex>
            </Button>

            <Button
              minWidth={isMobile ? "100px" : "200px"}
              variant={
                filteredProjects === "EMPOWERMENT"
                  ? "projectsButtonActive"
                  : "projectsButton"
              }
              onClick={filterByEmpowerment}
            >
              <Flex
                w="100%"
                justifyContent="space-evenly"
                alignItems="center"
                h="100%"
                flexDirection={isMobile ? "column" : "row"}
              >
                <Box
                  position="relative"
                  width={isMobile ? "25px" : "40px"}
                  height={isMobile ? "25px" : "40px"}
                >
                  <Image
                    src="/images/static/assets/icon_empowerment_blue.png"
                    alt="education"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Text mt="10px" variant="projectsButton" color={colorBlue}>
                  EMPOWERMENT
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Box>

        {!isMobile && (
          <Box m="50px 10%">
            <Grid templateColumns="repeat(4, 1fr)" gap={6} minHeight="782px">
              {projects
                ? projects.map((project) => (
                    <GridItem key={project.id}>
                      <ProjectTile project={project} />
                    </GridItem>
                  ))
                : null}
            </Grid>
          </Box>
        )}

        {isMobile && (
          <Box m="50px 5%">
            <Flex overflowX="scroll" h="420px">
              {projects
                ? projects.map((project) => (
                    <ProjectTile
                      key={project.id}
                      mr="10px"
                      project={project}
                      isMobile
                    />
                  ))
                : null}
            </Flex>
          </Box>
        )}
      </section>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  let projects = await getProjects();

  let sortedProjects = projects.data.sort(
    (a, b) => parseFloat(a.attributes.order) - parseFloat(b.attributes.order)
  );

  return {
    props: {
      projects: sortedProjects,
    },
  };
}
