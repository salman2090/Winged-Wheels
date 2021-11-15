import React from "react";
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import MyPurchases from "../MyPurchases/MyPurchases";
import Pay from "../Pay/Pay";
import useAuth from "../../../hooks/useAuth";
import ManagePurchases from "../ManagePurchases/ManagePurchases";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminRoute from "../../Login/Admin/AdminRoute";
import AddReview from "../Review/AddReview";

const Dashboard = () => {

    let { path, url } = useRouteMatch();
  const {admin} = useAuth();


    return (
      <div className="dashboard-container">
      <div className="text-light p-3 bg-dark pt-5">
          <h4 className="mb-5">Dashboard</h4>
          <div className="listing-decoration">
            
                <li className="mb-2 ">
                    <Link to={`${url}/myPurchases`}>My Purchases</Link>
                </li>
                <li className="mb-2">
                    <Link to={`${url}/pay`}>Pay</Link>
                </li>
                <li className="mb-2">
                    <Link to={`${url}/addReview`}>Review</Link>
                </li>

                { admin &&
                <div>
                    <li className="mb-2">
                    <Link to={`${url}/managePurchases`}>Manage Purchases</Link>
                    </li>
                    <li className="mb-2">
                        <Link to={`${url}/addProduct`}>Add Product</Link>
                    </li>
                    <li className="mb-2">
                        <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                    </li>
                    <li className="mb-2">
                        <Link to={`${url}/manageProducts`}>Manage Products</Link>
                    </li>
                </div>}
            
          </div>
      </div>

      <Switch>
        <Route exact path={path}>
            <MyPurchases></MyPurchases>
        </Route>
        <Route path={`${path}/myPurchases`}>
            <MyPurchases></MyPurchases>
        </Route>
        <Route path={`${path}/pay`}>
            <Pay></Pay>
        </Route>
        <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
        </Route>

        <AdminRoute path={`${path}/managePurchases`}>
            <ManagePurchases></ManagePurchases>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
        </AdminRoute>    

      </Switch>
    </div>
    );
};

export default Dashboard;