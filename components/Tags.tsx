import { FC } from "react";
import type { Tag } from "util/getTags";

type Props = {
  tags: Tag[];
};

const Tags: FC<Props> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, i) => (
        <>
          <h2
            key={crypto.randomUUID()}
            id={tag.name}
            style={{
              fontSize: 24,
              fontWeight: "bold",
              lineHeight: 1.333,
              height: 48,
            }}
          >
            {tag.name}
          </h2>
          <ul style={{ display: "flex" }}>
            {tag.pages.map((page) => (
              <li key={crypto.randomUUID()}>･ {page.title}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default Tags;
