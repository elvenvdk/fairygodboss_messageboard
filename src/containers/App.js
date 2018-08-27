import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./App.scss";
import LandingPage from "./landing-page/LandingPage";
import CreatePost from "../components/create-post/CreatePost";
import ViewPost from "../components/view-post/ViewPost";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/message-board" component={LandingPage} />
          <Route exact path="/create-post" component={CreatePost} />
          <Route exact path="/view-post" component={ViewPost} />
        </div>
      </Router>
    );
  }
}

export default App;
