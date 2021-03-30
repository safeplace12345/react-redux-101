import "popper.js";
import "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";

import "./App.css";
function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/Posts" component={Posts}></Route>
        <Route path="/:name" component={Post}></Route>
      </Router>
    </Provider>
  );
}

export default App;
