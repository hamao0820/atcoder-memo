import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
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
    const { title } = useConfig();
    if (title == "競プロメモ") {
      return <></>;
    }
    return (
      <>
        <meta
          name="og:image"
          content={`https://atcoder-memo-git-features-ogp-hamaos-projects.vercel.app/api/ogp?title=${title}`}
        />
      </>
    );
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
      url: "https://atcoder-memo-git-features-ogp-hamaos-projects.vercel.app/",
      description: "hamaoの競プロのメモ用のサイトです",
      images: [
        {
          url: "https://atcoder-memo-git-features-ogp-hamaos-projects.vercel.app/api/ogp",
          alt: "hamaoの競プロメモ",
        },
      ],
    },
  }),
};

export default config;
