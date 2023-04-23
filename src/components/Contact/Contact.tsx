import styles from "./Contact.module.scss";
import avatar from "./avatar.jpeg";

export interface ContactProps {
  avatar?: string;
  name: string;
}

export const Contact = (props: ContactProps) => {
  const avatarPicture = props.avatar ? props.avatar : avatar;

  return (
    <div className={styles.Contact}>
      <div className={styles.avatar}>
        <img src={avatarPicture} />
      </div>
      <div className={styles.name}>{props.name}</div>
    </div>
  );
};
