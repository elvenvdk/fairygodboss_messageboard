import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./ResponseForm.scss";
import TextFieldGroup from "../text-field-group/TextFieldGroup";
import TextAreaFieldGroup from "../textarea-field-group/TextAreaFieldGroup";
import Button from "../button/Button";
import { addResponse } from "../../actions/postActions";

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      replyText: ""
    };
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.user]: event.target.value,
      [event.target.replyText]: event.target.value
    });
  };

  onFormSubmit = event => {
    let responseItems = {
      user: this.state.user,
      replyText: this.state.replyText
    };
    this.setState({
      user: "",
      replyText: ""
    });
    this.props.addResponse(this.props.postId, responseItems);
    event.preventDefault();
  };

  render() {
    return (
      <div className={styles.responseform}>
        <form onSubmit={this.onFormSubmit}>
          <TextAreaFieldGroup
            name="replyText"
            value={this.state.replyText}
            onChange={this.onInputChange}
            label="Reply Message"
            type="text"
          />
          <TextFieldGroup
            name="user"
            value={this.state.user}
            onChange={this.onInputChange}
            label="Reply User"
            type="text"
          />
          <Button type="submit">Post Reply</Button>
        </form>
      </div>
    );
  }
}

ResponseForm.propTypes = {
  addResponse: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  replyText: PropTypes.string.isRequired
};

export default connect(
  null,
  { addResponse }
)(ResponseForm);
