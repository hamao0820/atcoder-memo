import { FC } from "react";
import type { Tag } from "util/getTags";

type Props = {
  tags: Tag[];
};

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, i) => (
        <div key={i}>{tag.name}</div>
      ))}
    </div>
  );
};

export default Tags;
