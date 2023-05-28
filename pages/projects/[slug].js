/**
 * cms.educaciondiversa.com/api/projects/1?populate=department.picture,project_template,*
 */

import { useState, useEffect } from "react";
import PagesHeader from "../../components/ui/PagesHeader";
import { Box } from "@chakra-ui/react";
import Text from "../../components/ui/Text";
import useViewport from "../../hooks/useViewport";
import { getProjects } from "../../lib/cmsClient";
import Loading from "../../components/ui/Loading";
import TemplateOne from "../../components/ui/ProjectTemplates/TemplateOne";
import TemplateTwo from "../../components/ui/ProjectTemplates/TemplateTwo";
import TemplateThree from "../../components/ui/ProjectTemplates/TemplateThree";
import ProjectFooter from "../../components/project/ProjectFooter";
import Head from "next/head";

export default function ProjectDetail(props) {
  const { project } = props;

  //console.log({ project });

  const {
    title,
    mainPicture,
    campaignText,
    project_template,
    campaignPicture,
    contentOne,
    contentTwo,
    contentThree,
    pictures,
    sustainable_dev_goals,
    department,
    project_category,
    subtitle,
    resources,
    contentDownload,
  } = project.attributes;

  // console.log(project_template, "0999");

  const background = mainPicture.data.attributes.url;

  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  if (project_template.data === null) {
    return (
      <>
        <Head>
          <title>Project | {title}</title>
        </Head>
        <section>
          <PagesHeader background={background} />

          <Box px={isMobile ? "8%" : "25%"}>
            <Box my="5%" textAlign="center">
              <h1>
                <Text variant={isMobile ? "titleMobile" : "h1"}>{title}</Text>
              </h1>
            </Box>
            <Box my="5%">
              <Box
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: campaignText }}
              />
              <br />
              <br />
              <p>More information coming soon...</p>
            </Box>
          </Box>
        </section>
      </>
    );
  }

  if (project_template.data.attributes.name === "templateOne") {
    return (
      <>
        <Head>
          <title>Project | {title}</title>
        </Head>
        <TemplateOne
          isMobile={isMobile}
          background={background}
          title={title}
          campaignText={campaignText}
          campaignPicture={campaignPicture}
          contentOne={contentOne}
          contentTwo={contentTwo}
          contentThree={contentThree}
          pictures={pictures}
          sustainable_dev_goals={sustainable_dev_goals}
          department={department}
          category={project_category}
          subtitle={subtitle}
          documents={resources}
          contentDownload={contentDownload}
        />
      </>
    );
  }

  if (project_template.data.attributes.name === "templateTwo") {
    return (
      <>
        <Head>
          <title>Project | {title}</title>
        </Head>
        <TemplateTwo
          isMobile={isMobile}
          background={background}
          title={title}
          campaignText={campaignText}
          campaignPicture={campaignPicture}
          contentOne={contentOne}
          contentTwo={contentTwo}
          contentThree={contentThree}
          pictures={pictures}
          sustainable_dev_goals={sustainable_dev_goals}
          department={department}
          category={project_category}
          subtitle={subtitle}
          documents={resources}
          contentDownload={contentDownload}
        />
        {/* <ProjectFooter featuredProjects={featuredProjects} /> */}
      </>
    );
  }

  if (project_template.data.attributes.name === "templateThree") {
    return (
      <>
        <Head>
          <title>Project | {title}</title>
        </Head>
        <TemplateThree
          isMobile={isMobile}
          background={background}
          title={title}
          campaignText={campaignText}
          campaignPicture={campaignPicture}
          contentOne={contentOne}
          contentTwo={contentTwo}
          contentThree={contentThree}
          pictures={pictures}
          sustainable_dev_goals={sustainable_dev_goals}
          department={department}
          category={project_category}
          subtitle={subtitle}
          documents={resources}
          contentDownload={contentDownload}
        />
        {/* <ProjectFooter featuredProjects={featuredProjects} /> */}
      </>
    );
  }

  return (
    <section>
      <Loading />
    </section>
  );
}

export async function getStaticProps(context) {
  const projects = await getProjects();
  const { params } = context;
  const { slug } = params;

  const projectDetail = projects.data.filter(
    (project) => project.attributes.slug === slug
  );

  return {
    props: {
      project: projectDetail[0],
    },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  let slugs = [];
  projects.data.map((project) => slugs.push(project.attributes.slug));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
