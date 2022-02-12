
import logo from '../../assets/logo.jpg';
import Navbar from "../../_components/navbar/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'

import './header.css';
function Header(){
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div className='navbarDiv'>
        <div className='heading'>Bitcoin Printer AVAX <FontAwesomeIcon icon="fa-brands fa-twitter" /></div>
        <Navbar />
    </div>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
}
export default Header;