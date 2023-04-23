import React from "react";
import styles from "./ContentBrowseLayout.module.scss";

export interface ContentBrowseLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  search?: React.ReactNode;
}

export const ContentBrowseLayout = (props: ContentBrowseLayoutProps) => {
  return (
    <main className={styles.ContentBrowseLayout}>
      <aside className={styles.sidebar}>{props?.sidebar}</aside>
      <div className={styles.search}>{props?.search}</div>
      <article className={styles.screen}>{props.children}</article>
    </main>
  );
};
