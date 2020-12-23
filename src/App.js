
import './App.css';
import Header from './components/Menu/Header';
import Banner from './components/Banner/Banner';
import Food from './components/Food/Food';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetail from './components/FoodDetail/FoodDetail';

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path='/' component={Banner} />
      <Route exact path='/' component={Food} />
      <Route exact path='/foodDetail' component={FoodDetail} />
    </Router>
  );
}

export default App;
