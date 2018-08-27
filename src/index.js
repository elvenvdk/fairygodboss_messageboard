import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.scss";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";

const middleWare = [thunk];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWare),
    // REDUX DEV TOOLS IN CHROME
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
