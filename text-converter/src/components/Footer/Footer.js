import { Link } from "react-router-dom";
import './Footer.css';

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <h1 className="footer-header-h1">TEXT CASE CONVERTER</h1>
                    <h2 className="footer-header-h2">Helps convert your text from uppercase or lowercase and vice versa.</h2>
                </div>
                <nav className="footer-navigation">
                    <ul className="footer-navigation-list">
                        <Link to="/blog" className="footer-react-link">
                            <li className="footer-navigation-link">Our blog</li>
                        </Link>
                        <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                            <li className="footer-navigation-link">Capital letter to lowercase in CSS</li>
                        </Link>
                        <Link to="/blog/convert-capital-to-lowercase-python" className="footer-react-link">
                            <li className="footer-navigation-link">Convert capital to lowercase in Python</li>
                        </Link>
                        <Link to="/blog/convert-upper-case-to-lower-case-in-js" className="footer-react-link">
                            <li className="footer-navigation-link">Convert upper case to lower case in JS</li>
                        </Link>
                        <li className="footer-navigation-link">Convert to lower case</li>
                        <li className="footer-navigation-link">Lower case converter</li>
                        <li className="footer-navigation-link">Lower case to uppercase</li>
                        <li className="footer-navigation-link">Lower to upper case</li>
                        <li className="footer-navigation-link">Upper case & lower case</li>
                        <li className="footer-navigation-link">Upper case to lower case converter</li>
                        <li className="footer-navigation-link">Upper to lower case</li>
                        <li className="footer-navigation-link">Uppercase lower case</li>
                    </ul>
                </nav>
                <h3 className="footer-header-h3">© 2024 Text Converter. All rights reserved.</h3>
            </div>
        </footer>
    );
}