import Login from '../components/User/Login/Login';
import React from 'react';
import Last5Movies from '../components/LastMovie/Last5Movies';
import Footer from '../components/Footer/Footer';
export default function SignInLastMovies(props) {
  return (
    <div className="background">
      <Login></Login>
      <Last5Movies></Last5Movies>
      <Footer></Footer>
    </div>
  );
}
