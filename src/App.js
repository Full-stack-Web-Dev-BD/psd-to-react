import React from 'react';
import Plan from './Component/Plan/Plan'
import "./style.css"
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Search from './Component/Search/Search';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" exact={true} component={Plan} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
