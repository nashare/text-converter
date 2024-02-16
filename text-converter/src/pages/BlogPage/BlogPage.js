import './BlogPage.css';
import { Link } from "react-router-dom";
import CSSImage from './css.jpeg';
import JSImage from './js.png';
import PythonImage from './python.png';

export const BlogPage = () => {


    return (
        <div className="blog">
            <div className="blog-container">
                <Link to="/blog/upper-case-to-lower-case-css-rules" className="blog-react-link">
                    <div className="blog-post">
                        <img src={CSSImage} alt="css rules case upper lower" className="blog-image" />
                        <div className="blog-description">
                            <h2 className="blog-header">CSS Rules</h2>
                            <p className="blog-text">Property and values to transform text</p>
                        </div>
                        <p className="blog-date">2.14.2024</p>
                    </div>
                </Link>
                <Link to="/blog/convert-capital-to-lowercase-python" className="blog-react-link">
                    <div className="blog-post">
                        <img src={PythonImage} alt="css rules case upper lower" className="blog-image" />
                        <div className="blog-description">
                            <h2 className="blog-header">Python methods</h2>
                            <p className="blog-text">Python buit-in methods to convert text case</p>
                        </div>
                        <p className="blog-date">2.11.2024</p>
                    </div>
                </Link>
                <Link to="/blog/convert-upper-case-to-lower-case-in-js" className="blog-react-link">
                    <div className="blog-post">
                        <img src={JSImage} alt="js javascript methods case upper lower" className="blog-image" />
                        <div className="blog-description">
                            <h2 className="blog-header">JavaScript methods</h2>
                            <p className="blog-text">JavaScript buit-in methods to convert text case</p>
                        </div>
                        <p className="blog-date">2.10.2024</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
