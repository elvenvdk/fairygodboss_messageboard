import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./CreatePost.scss";
import TextAreaFieldGroup from "../textarea-field-group/TextAreaFieldGroup";
import TextFieldGroup from "../text-field-group/TextFieldGroup";
import Button from "../button/Button";
import { addPost } from "../../actions/postActions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      message: "",
      user: ""
    };
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.postTitle]: event.target.value,
      [event.target.message]: event.target.value,
      [event.target.user]: event.target.value
    });
  };

  onFormSubmit = event => {
    let items = {
      postTitle: this.state.postTitle,
      message: this.state.message,
      user: this.state.user
    };
    this.props.addPost(items);
    this.setState({
      postTitle: "",
      message: "",
      user: ""
    });
    this.props.history.push("/message-board");
    event.preventDefault();
  };

  onResetForm = () => {
    this.setState({
      postTitle: "",
      message: "",
      user: ""
    });
  };

  render() {
    return (
      <div className={styles.createpost}>
        <h3 className={styles.createpost__title}>Create a new post</h3>
        <form onSubmit={this.onFormSubmit}>
          <TextFieldGroup
            label="Post Title"
            name="postTitle"
            value={this.state.postTitle}
            onChange={this.onInputChange}
          />
          <TextAreaFieldGroup
            label="Message"
            name="message"
            value={this.state.message}
            onChange={this.onInputChange}
          />
          <TextFieldGroup
            label="User:"
            name="user"
            value={this.state.user}
            onChange={this.onInputChange}
          />
          <div className={styles.createpost__button_container}>
            <Button type="reset" onClick={this.onResetForm}>
              Cancel
            </Button>
            <Button type="submit">Create Post</Button>
          </div>
        </form>
      </div>
    );
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
  postTitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default connect(
  null,
  { addPost }
)(CreatePost);
