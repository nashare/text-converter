import './BlogPage.css';
import { Link } from "react-router-dom";
import CSSImage from './css.png';
import JSImage from './js.png';
import PythonImage from './python.png';

export const BlogPage = () => {


    return (
        <div className="blog">
            <div className="blog-container">
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <div className="blog-post">
                        <img src={CSSImage} alt="css rules case upper lower" className="blog-image" />
                        <h2 className="blog-header">CSS Rules</h2>
                        <p className="blog-text">Property and values to transform text to upper and lower case or capitalize it</p>
                        <p className="blog-date">2.14.2024</p>
                    </div>
                </Link>
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <div className="blog-post">
                        <img src={PythonImage} alt="css rules case upper lower" className="blog-image" />
                        <h2 className="blog-header">Python methods</h2>
                        <p className="blog-text">CSS property and values to transform text to upper case, lower case or capitalize it</p>
                        <p className="blog-date">2.11.2024</p>
                    </div>
                </Link>
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <div className="blog-post">
                        <img src={JSImage} alt="js javascript methods case upper lower" className="blog-image" />
                        <h2 className="blog-header">JavaScript methods</h2>
                        <p className="blog-text">JavaScript buit-in methods to convert text case</p>
                        <p className="blog-date">2.10.2024</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
