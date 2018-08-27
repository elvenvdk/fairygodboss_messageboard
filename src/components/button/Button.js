import React from "react";

import styles from "./Button.scss";

const Button = ({ children, type, onClick }) => {
  return (
    <div className={styles.button__container}>
      <button className={styles.button__button} onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  );
};

export default Button;
