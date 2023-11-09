import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";
import path from "path";

const config: DocsThemeConfig = {
  logo: <span>hamaoの競プロメモ</span>,
  docsRepositoryBase: "https://github.com/hamao0820/atcoder-memo",
  editLink: {
    component: ({ children, className, filePath }) => {
      const baseUrl = "https://github.com";
      const url = new URL(
        path.join("hamao0820", "atcoder-memo", "tree", "main", filePath),
        baseUrl
      );
      return (
        <Link href={url} className={className} target="_blank">
          {children}
        </Link>
      );
    },
  },
  footer: {
    text: "MIT 2023 © hamao.",
  },
};

export default config;
