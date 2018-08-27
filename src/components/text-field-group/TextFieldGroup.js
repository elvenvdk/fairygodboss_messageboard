import React from "react";

import styles from "./TextFieldGroup.scss";

const TextFieldGroup = ({ name, onChange, value, label, type }) => {
  return (
    <div className={styles.textfieldgroup}>
      <div className={styles.textfieldgroup__labelcontainer}>
        <label className={styles.textfieldgroup__label} htmlFor="inputField">
          {label}
        </label>
      </div>
      <input
        className={styles.textfieldgroup__input}
        id="inputField"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        label={label}
      />
    </div>
  );
};

export default TextFieldGroup;
