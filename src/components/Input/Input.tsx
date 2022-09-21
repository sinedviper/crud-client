import React from "react";
import { InputProps } from "./Input.props";
import cn from "classnames";

import styles from "./Input.module.css";

const Input = ({ className, error, ...props }: InputProps): JSX.Element => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        {...props}
      />
      {error && (
        <span role='alert' className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
