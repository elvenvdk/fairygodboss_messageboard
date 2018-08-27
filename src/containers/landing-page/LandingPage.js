import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./LandingPage.scss";
import PostList from "../../components/post-list/PostList";
import Button from "../../components/button/Button";
import { getPosts, selectPost } from "../../actions/postActions";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  onCreatePost = () => {
    this.props.history.push("/create-post");
  };

  onSelectPost = id => {
    this.props.selectPost(id);
    this.props.history.push("/view-post");
  };

  render() {
    const { items } = this.props.posts;
    let postsDisplay;
    if (items.length === 0)
      postsDisplay = (
        <p className={styles.landing__emptymessage}>
          There are currently no posts...add one!
        </p>
      );
    else
      postsDisplay = <PostList posts={items} selectPost={this.onSelectPost} />;
    return (
      <div className={styles.landing}>
        <h2 className={styles.landing__header}>
          The <span>FAIRYGODBOSS</span> Message Board
        </h2>
        {postsDisplay}
        <div className={styles.landing__button_container}>
          <Button type="button" onClick={this.onCreatePost}>
            Create New Post
          </Button>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  posts: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts, selectPost }
)(LandingPage);
