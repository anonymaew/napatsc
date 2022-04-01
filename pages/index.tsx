import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import s from "./b/blog.module.scss";

const Home: NextPage = (props: any) => {
  return (
    <div className={s.firstPage}>
      <MDXRemote {...props.intro} />
    </div>
  );
};

export const getStaticProps = async () => {
  const content = fs.readFileSync(
    path.join("public", "anonymaew", "README.md"),
    "utf-8"
  );
  const intro = await serialize(content);

  return {
    props: {
      intro,
    },
  };
};

export default Home;
