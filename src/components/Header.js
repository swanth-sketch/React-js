import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL} />
            </div>
            <div className="logo-name">
            <input
        type="text"
        placeholder="Search..."
        className="search-input"
    
      />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};
 export default Header;