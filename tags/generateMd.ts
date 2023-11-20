import { getTags } from "./getTags";

let md = "# タグ一覧";
const tags = getTags();
tags.map((tag) => {
  md += `\n\n## ${tag.name}\n`;
  tag.pages.map((page) => {
    md += `\n- [${page.title}](/${page.path})`;
  });
});

console.log(md);
