import React from "react";
//Component --------------------------------------------------------------------------------
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
//Redux --------------------------------------------------------------------------------
import store from "./Redux/store";
import { Provider } from "react-redux";
//CSS -----------------------------------------------------------------------------------
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Login />
        {/*         <Dashboard />
         */}
      </div>
    </Provider>
  );
}

export default App;
