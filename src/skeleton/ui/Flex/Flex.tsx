import styles from "./Flex.module.scss";

export interface FlexProps {
  children: React.ReactNode;
}

export const Flex = (props: FlexProps) => {
  return <div className={styles.Flex}>{props.children}</div>;
};
