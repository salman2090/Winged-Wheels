import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import PurchaseDetails from './Pages/PurchaseDetails/PurchaseDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import AuthProvider from './context/AuthProvider/AuthProvider';




function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/explore">
                <Explore></Explore>
              </Route>
              <PrivateRoute path="/purchase/:productId">
                <PurchaseDetails></PurchaseDetails>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/addProduct">
                <AddProduct></AddProduct>
              </Route>
              <Route path="*">
                <NotFound></NotFound> 
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
