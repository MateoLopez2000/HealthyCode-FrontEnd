import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import UserRegister from "./components/RegisterPage/User-register";
import DetailPage from "./components/DetailPage/Detail-page";
import { ToastContainer, toast } from "react-toastify";

function isLoggedIn() {
  return true;
}
function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/detailPage">
          <DetailPage />
        </Route>
        <Route path="/userRegistration">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <ToastContainer />
    </Router>
  );
}

export default App;
