import { getTags } from "./getTags";

let md = "# タグ一覧";
const tags = getTags();
tags.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;

  return 0;
});
tags.map((tag) => {
  md += `\n\n## ${tag.name}\n`;
  tag.pages.map((page) => {
    md += `\n- [${page.title}](/${page.path})`;
  });
});

console.log(md);
