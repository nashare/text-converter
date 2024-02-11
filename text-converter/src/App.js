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
          <button onClick={handleLowerCase}>Lower case</button>
          <button onClick={handleUpperCase}>UPPER CASE</button>
          <button onClick={handleCapitalizedCase}>Capitalized Case</button>
          <button onClick={handleSentenceCase}>Sentence case</button>
          <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div>
          <textarea value={inputText} onChange={handleChange} className="main-textarea">Enter your text</textarea>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
