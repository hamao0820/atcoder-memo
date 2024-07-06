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
  head: () => {
    return <></>;
  },
  footer: {
    text: "MIT 2024 © hamao.",
  },
  sidebar: { defaultMenuCollapseLevel: 1 },
  faviconGlyph: "📝",
  useNextSeoProps: () => ({
    defaultTitle: "hamaoの競プロメモ",
    titleTemplate: "%s | hamaoの競プロメモ",
    description: "hamaoの競プロのメモ用のサイトです",
    twitter: {
      handle: "@hamao_0820",
      site: "@hamao_0820",
      cardType: "summary_large_image",
    },
    openGraph: {
      url: "https://atcoder-memo.hamao.dev/",
      description: "hamaoの競プロのメモ用のサイトです",
      images: [
        {
          url: "https://atcoder-memo.hamao.dev/hamao-log-square.png",
          width: 512,
          height: 512,
          alt: "hamaoの競プロメモ",
        },
      ],
    },
  }),
};

export default config;
