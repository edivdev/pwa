/**
 * this should be thinked how will work as we are calling our server on build time and we would like that each project feature at random another published project
 */

import { Box } from "@chakra-ui/react";

export default function ProjectFooter(props) {
  const { featuredProjects } = props;

  console.log({ featuredProjects });
  return (
    <Box backgroundImage="url('/images/static/backgrounds/BACKGROUND-blog.jpg')">
      <h2>Other Projects</h2>
    </Box>
  );
}
