import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

import TopHeader from './TopHeader';

const MainHeader = () => {
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink  
                        className={(navData) => !navData.isActive ? "" : classes.active} 
                        to="/">
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={(navData) => !navData.isActive ? "" : classes.active} 
                        to= "/shop">
                            Shop
                    </NavLink>
                </li>
                <li>
                    <TopHeader />
                </li>
                <li>
                    <NavLink  
                        className={(navData) => !navData.isActive ? "" : classes.active} 
                        to="/about">
                            About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={(navData) => !navData.isActive ? "" : classes.active} 
                        to= "/contact">
                            Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default MainHeader;