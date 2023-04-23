import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./SideMenu.module.scss";

export interface SideMenuLink {
  name: string;
  path: string;
}

export interface SideMenuState {
  links: SideMenuLink[];
}

export const SideMenu = () => {
  const { t } = useTranslation();

  const [menu, setMenu] = useState<SideMenuState>({
    links: [{ name: "menu.contacts.browse", path: "/browse" }],
  });

  return (
    <div className={styles.SideMenu}>
      {menu.links.map((link) => (
        <div className="link">
          <Link to={link.path}>{t(link.name)}</Link>
        </div>
      ))}
    </div>
  );
};
