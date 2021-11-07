import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import GlobalStyle from './GlobalStyles.js';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
