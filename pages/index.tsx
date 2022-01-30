import type { NextPage } from "next";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import "github-markdown-css/github-markdown-dark.css";

const Home: NextPage = () => {
  const [readme, setReadme] = useState<string>("");

  useEffect(() => {
    const run = async () => {
      const data = await fetch(
        "https://raw.githubusercontent.com/anonymaew/anonymaew/master/README.md"
      );
      setReadme(await data.text());
    };
    run();
  }, []);

  return (
    <div style={{ backgroundColor: "#0d1117" }}>
      <div
        className="markdown-body"
        style={{ padding: "45px", margin: "auto", maxWidth: "980px" }}
      >
        <Markdown>{readme}</Markdown>
      </div>
    </div>
  );
};

export default Home;
