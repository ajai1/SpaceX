import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
  const pageToLoad = (props) => {
    if (!isLogin) {
      return <Redirect to="/login" />;
    } else {
      return <Component {...props} />;
    }
  };
  return <Route {...rest} render={(props) => pageToLoad(props)} />;
};

const mapStateToProps = (state) => {
  return { isLogin: state.UserReducer.isLogin };
};

export default connect(mapStateToProps)(PrivateRoute);
