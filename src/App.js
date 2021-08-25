import React, { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/s/:searchTerm">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;