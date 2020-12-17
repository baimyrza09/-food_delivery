import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import CafesContextProvider from "./contexts/CafesContext";
import Home from "./containers/Home/Home";
import Content from "./containers/Home/Content"
import Cart from './containers/Cart/Cart'
import Sidebar from './containers/Cafes/Sidebar'
import AdminContextProvider from "./contexts/AdminContext";
import AdminPanel from './containers/AdminPanel/AdminPanel'
import AdminPanelEdit from './containers/AdminPanel/AdminPanelEdit'
import MenuDetails from './containers/AdminPanel/MenuDetails'
import EditModal from './containers/AdminPanel/EditModal'
import Header from "./containers/Header/Header";
import Profile from './containers/Profile/Profile'
import Footer from "./containers/Footer/Footer";

const Routes = () => {
  return (
    <div>
      <CafesContextProvider>
        <BrowserRouter>
        <Header/>
          <Switch>
            <AuthContextProvider>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" component={Profile}/>
            </AuthContextProvider>
          </Switch>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/disheslist/:id" component={Content}/>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/sidebar" component={Sidebar}/>
          </Switch>
          <Switch>
            <AdminContextProvider>
              <Switch>
                <Route exact path="/admin" component={AdminPanel}/>
                <Route exact path="/edit" component={AdminPanelEdit}/>
                <Route exact path="/menudetails" component={MenuDetails}/>
                <Route exact path="/editmodal" component={EditModal}/>
              </Switch>
            </AdminContextProvider>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CafesContextProvider>
    </div>
  );
};

export default Routes;
