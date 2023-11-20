import parseMD from "parse-md";
import { glob } from "glob";
import fs from "fs";

type Page = {
  title: string;
  path: string;
};

export type Tag = {
  name: string;
  pages: Page[];
};

export const getGlob = () => {
  const mdFiles = glob.sync([
    __dirname + "/../pages/**/*.md",
    __dirname + "/../pages/**/*.mdx",
  ]);
  return mdFiles;
};

export const getTags = (): Tag[] => {
  const tags = new Map<string, Tag>();
  const mdFiles = getGlob();
  mdFiles.forEach((f) => {
    const file = fs.readFileSync(f, "utf8");
    const { metadata } = parseMD(file) as {
      metadata: { tags: string[]; title: string };
    };
    if (metadata.tags) {
      const filepath = f.split("pages/")[1];
      let filename: string;
      if (filepath.endsWith("md")) {
        filename = filepath.slice(0, -3);
      } else {
        filename = filepath.slice(0, -4);
      }
      for (const tag of metadata.tags) {
        const page = { title: metadata.title ?? filename, path: filename };
        if (tags.has(tag)) {
          tags.get(tag)?.pages.push(page);
        } else {
          tags.set(tag, { name: tag, pages: [page] });
        }
      }
    }
  });
  return Array.from(tags.values());
};
