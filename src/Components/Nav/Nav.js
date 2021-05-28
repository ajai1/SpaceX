import React, {useState} from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from "./Menu/Menu"

import "./Nav.css"

const Nav = () => {

    const [isExploreTab, setExploreTab] = useState(false); 

    return (
        <div className="nav_container">
            <div>
            <h2>Space-X</h2>
            </div>
            <div className="nav_tabs">
                <div className="nav_tabs_explore">
                    <h3 onClick={()=> setExploreTab(!isExploreTab)}>Explore <small>&#9660;</small> </h3>
                    {isExploreTab && <Menu/>}
                </div>
               
                <h3>Contact</h3>
                <h3>About</h3>
                <AccountCircleIcon fontSize="large"/>
               
            </div>
        </div>
    )
}

export default Nav
