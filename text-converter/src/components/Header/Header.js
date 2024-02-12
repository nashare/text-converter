import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-link">
                <p className="header-text">TEXT CONVERTER&nbsp;&nbsp;|&nbsp;&nbsp;CHANGE MY TEXT</p>
            </Link>
        </header>
    );
}

