import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import PagesHeader from "../../components/ui/PagesHeader";
import Text from "../../components/ui/Text";
import useViewport from "../../hooks/useViewport";
import { getBlogs } from "../../lib/cmsClient";
import Head from "next/head";

export default function BlogDetail(props) {
  const { blog } = props;
  const { title, content, picture, author, department } = blog.attributes;
  const { data } = picture;
  const pictureData = data;
  const pictureUrl = pictureData.attributes.url;
  const departmentName = department.data?.attributes?.name || null;

  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  return (
    <>
      <Head>
        <title>Blog | {title}</title>
      </Head>
      <section id="blog-entry">
        <PagesHeader
          background={pictureUrl ? pictureUrl : "https://none.com/asd"}
        />
        {departmentName ? (
          <Box px="8%" textAlign="right">
            <Text>
              Written by: <b>{author}</b>
              <br />
              {departmentName} department
            </Text>
          </Box>
        ) : null}
        <Box px={isMobile ? "8%" : "25%"}>
          <Box my="5%" textAlign="center">
            <h1>
              <Text variant={isMobile ? "titleMobile" : "h1"}>{title}</Text>
            </h1>
          </Box>
          <Box my="5%">
            <Box
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Box>
        </Box>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const blogs = await getBlogs();

  const blogEntry = blogs.filter((blog) => blog.attributes.slug === slug);

  return {
    props: {
      blog: blogEntry[0],
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getBlogs();

  let slugs = [];
  blogs.map((blog) => {
    slugs.push(blog.attributes.slug);
  });

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
