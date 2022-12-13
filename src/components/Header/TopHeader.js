import logo from '../../pics/logo.png';
import './TopHeader.css';

const TopHeader = () => {
    return(
    <div className = "TopHeader">
        <img src={logo} alt="logo" className="logo"/>
    </div>);
};

export default TopHeader;