import React from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  className,
  color = "green",
  children,
  link = "/",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(styles.button, className, {
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.none]: color === "none",
      })}
    >
      <Link to={`/${link}`} className={styles.link}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
