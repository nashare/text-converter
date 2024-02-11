import './App.css';

import React, { useState } from 'react';

function App() {
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
    <>
    <header className="header">
        <p className="header-text">TEXT CONVERTER&nbsp;&nbsp;|&nbsp;&nbsp;CHANGE MY TEXT</p>
    </header>
    <div className="main">
      <div className="main-container">
        <div className="main-buttons">
          <button onClick={handleLowerCase}><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Lower case</button>
          <button onClick={handleUpperCase}><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;UPPER CASE</button>
          <button onClick={handleCapitalizedCase}><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Capitalized Case</button>
          <button onClick={handleSentenceCase}><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Sentence case</button>
          <button onClick={handleCopyToClipboard}><i class="fa-solid fa-copy"></i>&nbsp;&nbsp;Copy</button>
          <button onClick={handleClear}><i class="fa-solid fa-trash"></i>&nbsp;&nbsp;Clear</button>
        </div>
        <div className="main-text">
          {/* <p className="main-text-message">Convert your text to uppercase, lowercase, capitalized or sentence case</p> */}
            <textarea value={inputText} onChange={handleChange} className="main-textarea" placeholder="Enter your text here..." spellcheck="true"></textarea>
        </div>
      </div>
    </div>
    <footer className="footer"></footer>
    </>
  );
}

export default App;
