import React from "react";

import styles from "./TextAreaFieldGroup.scss";

const TextAreaFieldGroup = ({ name, label, value, onChange }) => {
  return (
    <div className={styles.textareafieldgroup}>
      <div className={styles.textareafieldgroup__container}>
        <label
          className={styles.textareafieldgroup__label}
          htmlFor="inputTextArea"
        >
          {label}
        </label>
      </div>
      <textarea
        className={styles.textareafieldgroup__textarea}
        id="inputTextArea"
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        cols="30"
        rows="10"
      />
    </div>
  );
};

export default TextAreaFieldGroup;
