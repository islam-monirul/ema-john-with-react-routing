import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/shop">
                <Shop></Shop>
            </Route>
            <Route path="/orderReview">
                <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
                <Inventory></Inventory>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
