import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import { AuthContext } from './context/auth-context';

const App = props => {

  const authCtx = useContext(AuthContext);

  let context = <Auth />;
  if (authCtx.isAuth) {
    context = <Ingredients />;
  }

  return context;
};

export default App;