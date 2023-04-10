import { Link, useMatches, LinkProps, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const CustomLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) => (isActive ? styles.activeColor : " ")}
    >
      {children}
    </NavLink>
  );
};
export default CustomLink;
