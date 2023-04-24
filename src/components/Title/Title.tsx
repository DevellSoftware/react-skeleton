import styles from "./Title.module.scss";

export interface TitleProps {
  children: React.ReactNode;
}

export const Title = (props: TitleProps) => {
  return <h1 className={styles.Title}>{props.children}</h1>;
};
