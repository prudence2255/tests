import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <header className="w3-card bg-light header" >
            <div className="wrap container">
                <div className="logo d-flex justify-content-start">
                   <Link to="/">
                   <img src="/logo192.png" alt="logo" width="50" height="50"
                    className="logo-img"/>
                   </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;