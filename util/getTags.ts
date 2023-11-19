import parseMD from "parse-md";
import { glob } from "glob";
import fs from "fs";
// import os from "os";

export const getGlob = async () => {
  const mdFiles = glob.sync(__dirname + "/../../../pages/**/*.md");
  return mdFiles;
};

export const getTags = async () => {
  const tags = new Set();
  const mdFiles = glob.sync(__dirname + "/../../../pages/**/*.md");
  mdFiles.forEach((f) => {
    const file = fs.readFileSync(f, "utf8");
    const { metadata } = parseMD(file) as { metadata: { tags: string[] } };
    if (metadata.tags) {
      for (const tag of metadata.tags) {
        tags.add(tag);
      }
    }
  });
  return Array.from(tags.values());
};
