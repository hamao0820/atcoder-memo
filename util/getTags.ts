import parseMD from "parse-md";
import { glob } from "glob";
import fs from "fs";
// import os from "os";

export type Tag = {
  name: string;
  pages: string[];
};

export const getGlob = () => {
  const mdFiles = glob.sync(["pages/**/*.md", "pages/**/*.mdx"]);
  return mdFiles;
};

export const getTags = (): Tag[] => {
  const tags = new Map<string, Tag>();
  const mdFiles = getGlob();
  mdFiles.forEach((f) => {
    const file = fs.readFileSync(f, "utf8");
    const { metadata } = parseMD(file) as { metadata: { tags: string[] } };
    if (metadata.tags) {
      const filepath = f.split("pages/")[1];
      let filename: string;
      if (filepath.endsWith("md")) {
        filename = filepath.slice(0, -3);
      } else {
        filename = filepath.slice(0, -4);
      }
      for (const tag of metadata.tags) {
        if (tags.has(tag)) {
          tags.get(tag)?.pages.push(filename);
        } else {
          tags.set(tag, { name: tag, pages: [filename] });
        }
      }
    }
  });
  return Array.from(tags.values());
};
