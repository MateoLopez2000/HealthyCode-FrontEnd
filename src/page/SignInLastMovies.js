import Login from '../components/User/Login/Login';
import React, { useState } from 'react';
import Last5Movies from '../components/LastMovie/Last5Movies';
export default function SignInLastMovies(props) {
  return (
    <div className="background">
      <Login></Login>
      <Last5Movies></Last5Movies>
    </div>
  );
}
