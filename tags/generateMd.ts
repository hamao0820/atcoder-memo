import { getTags, Tag } from "./getTags";

let md = "# タグ一覧";
const tags = getTags();
tags
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
  })
  .map<Tag>((tag) => {
    const pages = tag.pages.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;

      return 0;
    });
    return { ...tag, pages };
  })
  .forEach((tag) => {
    md += `\n\n## ${tag.name}\n`;
    tag.pages.forEach((page) => {
      md += `\n- [${page.title}](/${page.path})`;
    });
  });

console.log(md);
