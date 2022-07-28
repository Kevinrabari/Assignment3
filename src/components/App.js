import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import SideMenu from "./SideMenu";
import Finance from "./Finance";
import UserList from "./UserList";
import NewsFeeds from "./NewsFeeds";

//import "react-pro-sidebar/dist/css/styles.css";
import "../css/Header.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="row">
      <div className="col-md-2" style={{ background: "#32c40e" }}>
        <SideMenu />
      </div>
      <div className="col-md-10" style={{ background: "#FC9A26" }}>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100">
            {/* <div className="w-100">  style={{ maxWidth: "400px" }} */}
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/userList" component={UserList} />
                  <Route path="/newsFeeds" component={NewsFeeds} />
                  <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                  />

                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/weather" component={Weather} />
                  <Route path="/finance" component={Finance} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
