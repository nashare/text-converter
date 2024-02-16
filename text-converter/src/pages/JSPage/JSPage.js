export const JSPage = () => {

    return (
        <div className="article">
            <div className="article-container">
                <h2 className="article-header">Built-in method to convert strings case in Python</h2>
                <br></br>
                <code className="article-code">text-transform: none|capitalize|uppercase|lowercase|initial|inherit;</code>
                <br></br>
                <br></br>
                <p className="article-text">The <code className="article-code">text-transform</code> CSS property specifies how to capitalize an element's text. 
                It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.</p>
                <br></br>
                <code className="article-code">capitalize</code>
                <p className="article-text">Is a keyword that converts the first letter of each word to uppercase. Other characters remain unchanged 
                (they retain their original case as written in the element's text). A letter is defined as a character that 
                is part of Unicode's Letter or Number general categories Experimental; thus, any punctuation marks or symbols at the 
                beginning of a word are ignored.</p>
                <br></br>
                <code className="article-code">uppercase</code>
                <p className="article-text">Is a keyword that converts all characters to uppercase.</p>
                <br></br>
                <code className="article-code">lowercase</code>
                <p className="article-text">Is a keyword that converts all characters to lowercase.</p>
            </div>
        </div>
    );
}
