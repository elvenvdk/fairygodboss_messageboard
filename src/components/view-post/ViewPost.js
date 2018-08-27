import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./ViewPost.scss";
import Button from "../button/Button";
import ResponseForm from "../responses-form/ResponseForm";
import ResponseList from "../resonse-list/ResponseList";

class ViewPosts extends Component {
  onBackToPosts = () => {
    this.props.history.push("/message-board");
  };
  render() {
    let responseDisplay;
    if (this.props.posts.responseItems.length > 0) {
      responseDisplay = (
        <div className={styles.response__heading}>
          <hr style={{ border: "1px dashed rgb(163, 163, 163)" }} />
          <h3 style={{ position: "relative", left: "-45%" }}>Responses</h3>
          <ResponseList responseData={this.props.posts.responseItems} />
        </div>
      );
    } else responseDisplay = <br />;

    let postDisplay;
    if (this.props.posts.items.length === 0)
      this.props.history.push("/message-board");
    else {
      let hours = this.props.posts.items[0].hour;
      hours = hours % 12;
      hours = hours ? hours : 12;
      let ampm = this.props.posts.items[0].hour >= 12 ? "pm" : "am";
      let minutes = this.props.posts.items[0].minutes;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const strTime = `${hours}:${minutes}${ampm}`;
      const month = this.props.posts.items[0].month;
      const day = this.props.posts.items[0].day;
      const year = this.props.posts.items[0].year;
      postDisplay = (
        <div className={styles.response}>
          <div className={styles.response__button_container}>
            <h3>{this.props.posts.items[0].items.postTitle}</h3>
            <Button onClick={this.onBackToPosts}>Back to Posts</Button>
          </div>
          <div className={styles.response__user}>
            <p>
              By: {this.props.posts.items[0].items.user} On: {month}/{day}/
              {year} @{strTime}
            </p>
          </div>
          <div className={styles.response__message}>
            <p>{this.props.posts.items[0].items.message}</p>
          </div>
          <div>{responseDisplay}</div>
          <hr />
          <div>
            <ResponseForm postId={this.props.posts.items[0].counter} />
          </div>
        </div>
      );
    }

    return <div>{postDisplay}</div>;
  }
}

ViewPosts.propTypes = {
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(ViewPosts);
