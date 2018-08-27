import React from "react";

import styles from "./PostList.scss";
import PlayArrow from "../../img/svg/play_arrow.svg";

const PostList = ({ posts, selectPost }) => {
  const postDisplay = posts.map(post => {
    let hours = post.hour;
    hours = hours % 12;
    hours = hours ? hours : 12;
    let ampm = post.hour >= 12 ? "pm" : "am";
    let minutes = post.minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = `${hours}:${minutes}${ampm}`;
    return (
      <li className={styles.postlist} key={post.counter}>
        <div className={styles.postlist__title_container}>
          <h3 className={styles.postlist__title}>
            {post.items.postTitle} {post.items.message}
          </h3>
        </div>
        <div className={styles.postlist__user_container}>
          <p className={styles.postlist__user}>
            Posted By: <span>{post.items.user}</span>
          </p>
          <p className={styleMedia.postlist__datetime}>
            Last Update:{" "}
            <span>
              {post.month}/{post.day}/{post.year} @{strTime}
            </span>
          </p>
        </div>
        <img
          src={PlayArrow}
          alt="Select Button"
          onClick={() => selectPost(post.counter)}
        />
      </li>
    );
  });
  return (
    <div>
      <ul>{postDisplay}</ul>
    </div>
  );
};

export default PostList;
