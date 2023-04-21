import React from "react";
import styles from "./ContentBrowseLayout.module.scss";

export interface ContentBrowseLayoutProps {
  children: React.ReactNode;
}

export const ContentBrowseLayout = (props: ContentBrowseLayoutProps) => {
  return (
    <main className={styles.ContentBrowseLayout}>
      <aside className={styles.sidebar}>aside</aside>
      <div className={styles.search}>search bar</div>
      <article className={styles.screen}>{props.children}</article>
    </main>
  );
};
