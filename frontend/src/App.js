

import Home from './pages/home/Home';
import Login from './pages/home/login/Login';
import Settings from './pages/home/settings/Settings';
import Single from './pages/home/singlepage/Single';
import Write from './pages/home/write/Write';
import Topbar from './topbar/Topbar';
import { useContext } from 'react';
import { Context } from './context/Context';
import Register from './pages/home/regitster/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
function App() {
   const { user } = useContext(Context);
//  sconst user=false
  return (
  <>
      <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/contact">{user ? <Contact /> : <Register />}</Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>


  </>
  );
}

export default App;
