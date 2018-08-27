import React from "react";

import styles from "./ResponseList.scss";

export default ({ responseData }) => {
  const responseDisplay = responseData.map((response, index) => (
    <li className={styles.response} key={index}>
      <h4>{response.user}</h4>
      <div className={styles.response__text_container}>
        <p>{response.replyText}</p>
      </div>
      <hr style={{ border: "1px dashed rgb(163, 163, 163)" }} />
    </li>
  ));

  return <div>{responseDisplay}</div>;
};
