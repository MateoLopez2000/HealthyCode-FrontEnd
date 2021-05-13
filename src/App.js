//css styles
import "./App.css";
//import of components
import Register from "./components/User/Register/Register";
import Header from "./components/Header";
import DetailPage from "./components/DetailPage/Detail-page";
import SearchPage from "./views/SearchPage";
import ResultPage from "./views/ResultPage";
import SignInLastMovies from "./page/SignInLastMovies";
import Footer from "./components/Footer/Footer";
//Imports from libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <SignInLastMovies />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/ResultPage">
          <ResultPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>

      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
