import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import UserRegister from './components/RegisterPage/User-register';
import DetailPage from './components/DetailPage/Detail-page';
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
          <UserRegister />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
