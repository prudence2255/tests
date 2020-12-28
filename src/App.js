import './App.css';
import './w3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const Routes = () => {
  return (
    <>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  )
}





function App() {

  return (
    <div className="App">
     <Routes />
    </div>
  );
}

export default App;
