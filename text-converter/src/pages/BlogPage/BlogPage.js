import './BlogPage.css';
import { Link } from "react-router-dom";

export const BlogPage = () => {


    return (
        <div className="blog">
            <div className="article-container">
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="footer-react-link">
                    <h2 className="article-header">CSS Rules</h2>
                    <p className="article-text">Text TEXT TEXT</p>
                </Link>
            </div>
        </div>
    );
}
