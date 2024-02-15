import './BlogPage.css';
import { Link } from "react-router-dom";
import CSSImage from './css.jpeg';

export const BlogPage = () => {


    return (
        <div className="blog">
            <div className="blog-container">
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <img src={CSSImage} alt="css rules case upper lower" className="blog-image" />
                    <h2 className="blog-header">CSS Rules</h2>
                    <p className="blog-text">CSS property and values to transform text to upper case, lower case or capitalize it</p>
                    <p className="blog-read-more">Read More</p>
                </Link>
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <img src={CSSImage} alt="css rules case upper lower" className="blog-image" />
                    <h2 className="blog-header">CSS Rules</h2>
                    <p className="blog-text">CSS property and values to transform text to upper case, lower case or capitalize it</p>
                    <p className="blog-read-more">Read More</p>
                </Link>
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <img src={CSSImage} alt="css rules case upper lower" className="blog-image" />
                    <h2 className="blog-header">CSS Rules</h2>
                    <p className="blog-text">CSS property and values to transform text to upper case, lower case or capitalize it</p>
                    <p className="blog-read-more">Read More</p>
                </Link>
            </div>
        </div>
    );
}
