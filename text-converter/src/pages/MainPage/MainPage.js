import './MainPage.css';
import { useState } from 'react';

export const MainPage = () => {

    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSentenceCase = () => {
        setInputText(inputText.toLowerCase().replace(/(^\w|\.\s\w)/gm, (sentence) => sentence.toUpperCase()));
    };

    const handleLowerCase = () => {
        setInputText(inputText.toLowerCase());
    };

    const handleUpperCase = () => {
        setInputText(inputText.toUpperCase());
    };

    const handleCapitalizedCase = () => {
        setInputText(inputText.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(inputText);
    };

    const handleClear = () => {
        setInputText('');
    };
    
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-buttons">
                    <button className="main-button" onClick={handleLowerCase}><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Lower case</button>
                    <button className="main-button" onClick={handleUpperCase}><i className="fa-solid fa-check"></i>&nbsp;&nbsp;UPPER CASE</button>
                    <button className="main-button" onClick={handleCapitalizedCase}><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Capitalized Case</button>
                    <button className="main-button" onClick={handleSentenceCase}><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Sentence case</button>
                    <button className="main-button" onClick={handleCopyToClipboard}><i className="fa-solid fa-copy"></i>&nbsp;&nbsp;Copy</button>
                    <button className="main-button" onClick={handleClear}><i className="fa-solid fa-trash"></i>&nbsp;&nbsp;Clear</button>
                </div>
                <div className="main-text">
                    <textarea value={inputText} onChange={handleChange} className="main-textarea" placeholder="Enter your text here..." spellCheck="true"></textarea>
                </div>
            </div>
        </div>
    );
}
