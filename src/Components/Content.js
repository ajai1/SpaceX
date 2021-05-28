import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Nav from './Nav/Nav'

import {connect} from "react-redux"

const Content = ({user}) => {
    return (
        <div>
            <Nav/>
            {!user.isLogin && <Login/>}
            {user.isLogin && <Dashboard/>}
        </div>
    )
}

const mapStateToProp = (state) => {
    return {user : state.UserReducer}
}

export default connect(mapStateToProp)(Content)
