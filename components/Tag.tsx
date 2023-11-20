import Link from "next/link";
import { FC } from "react";

type Props = {
  tag: string;
};

const Tag: FC<Props> = ({ tag }) => {
  const href = `/tags/#${tag.replace(/\s/g, "").toLowerCase()}`;
  return <Link href={href}>{tag}</Link>;
};

export default Tag;
