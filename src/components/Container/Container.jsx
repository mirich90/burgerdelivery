import style from "./Container.module.css";
import classNames from "classnames";

export const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);
