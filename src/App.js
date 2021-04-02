import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";

import "./App.css";
function App() {

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}></Route>
        <Switch>
        <Route path="/Posts" component={Posts}></Route>
        <Route path="/:name" component={Post}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
