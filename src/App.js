import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProducts from './Components/Admin/AddProducts/AddProducts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/addProducts">
          <AddProducts></AddProducts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
