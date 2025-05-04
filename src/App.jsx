import React, { useState, useEffect, useRef } from 'react';
import './custom.css'; 


const App = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState('text-lg');
  const [lineHeight, setLineHeight] = useState('leading-relaxed');
  const [theme, setTheme] = useState('theme-sepia');
  const [fontFamily, setFontFamily] = useState('font-serif');
  const [alignment, setAlignment] = useState('text-left');
  const [fontWeight, setFontWeight] = useState('font-normal');
  const [textColor, setTextColor] = useState('#000000');
  const [speechRate, setSpeechRate] = useState(1);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const synth = useRef(window.speechSynthesis);

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    setWordCount(words.length);
    setCharCount(text.length);
  }, [text]);

  useEffect(() => {
    const savedText = localStorage.getItem('savedText');
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem('savedText', text);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleLineHeightChange = (e) => {
    setLineHeight(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleAlignmentChange = (e) => {
    setAlignment(e.target.value);
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleSpeechRateChange = (e) => {
    setSpeechRate(e.target.value);
  };

  const handleSpeechPitchChange = (e) => {
    setSpeechPitch(e.target.value);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const handleTextToSpeech = () => {
    if (synth.current.speaking) {
      synth.current.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;
    utterance.pitch = speechPitch;
    synth.current.speak(utterance);
  };

  const handleResetToDefault = () => {
    setText('');
    setFontSize('text-lg');
    setLineHeight('leading-relaxed');
    setTheme('theme-sepia');
    setFontFamily('font-serif');
    setAlignment('text-left');
    setFontWeight('font-normal');
    setTextColor('#000000');
    setSpeechRate(1);
    setSpeechPitch(1);
    localStorage.removeItem('savedText');
  };

  return (
    <div className={`min-h-screen ${theme} p-4`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Text Formatter</h1>
        
        <textarea
          className="w-full h-40 p-2 mb-4 border rounded"
          placeholder="Enter or paste your text here..."
          value={text}
          onChange={handleTextChange}
        />

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Font Size:</label>
            <select
              className="w-full p-2 border rounded"
              value={fontSize}
              onChange={handleFontSizeChange}
            >
              <option value="text-sm">Small</option>
              <option value="text-base">Medium</option>
              <option value="text-lg">Large</option>
              <option value="text-xl">Extra Large</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Line Height:</label>
            <select
              className="w-full p-2 border rounded"
              value={lineHeight}
              onChange={handleLineHeightChange}
            >
              <option value="leading-none">Tight</option>
              <option value="leading-snug">Snug</option>
              <option value="leading-relaxed">Relaxed</option>
              <option value="leading-loose">Loose</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Theme:</label>
            <select
              className="w-full p-2 border rounded"
              value={theme}
              onChange={handleThemeChange}
            >
              <option value="theme-light">Light Mode</option>
              <option value="theme-dark">Dark Mode</option>
              <option value="theme-sepia">Sepia</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Font Family:</label>
            <select
              className="w-full p-2 border rounded"
              value={fontFamily}
              onChange={handleFontFamilyChange}
            >
              <option value="font-serif">Serif</option>
              <option value="font-sans">Sans-serif</option>
              <option value="font-mono">Monospace</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Text Alignment:</label>
            <select
              className="w-full p-2 border rounded"
              value={alignment}
              onChange={handleAlignmentChange}
            >
              <option value="text-left">Left Align</option>
              <option value="text-center">Center Align</option>
              <option value="text-right">Right Align</option>
              <option value="text-justify">Justify</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Font Weight:</label>
            <select
              className="w-full p-2 border rounded"
              value={fontWeight}
              onChange={handleFontWeightChange}
            >
              <option value="font-normal">Normal</option>
              <option value="font-medium">Medium</option>
              <option value="font-semibold">Semibold</option>
              <option value="font-bold">Bold</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Text Color:</label>
            <input
              type="color"
              className="w-full p-2 border rounded"
              value={textColor}
              onChange={handleTextColorChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Speech Rate:</label>
            <input
              type="range"
              className="w-full"
              min="0.5"
              max="2"
              step="0.1"
              value={speechRate}
              onChange={handleSpeechRateChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Speech Pitch:</label>
            <input
              type="range"
              className="w-full"
              min="0"
              max="2"
              step="0.1"
              value={speechPitch}
              onChange={handleSpeechPitchChange}
            />
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div>
            <span className="mr-4">Words: {wordCount}</span>
            <span>Characters: {charCount}</span>
          </div>
          <div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleCopyToClipboard}
            >
              Copy to Clipboard
            </button>
            <button
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleTextToSpeech}
            >
              Text to Speech
            </button>
            <button
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleResetToDefault}
            >
              Reset to Default
            </button>
          </div>
        </div>

        <div
  className={`${fontSize} ${lineHeight} ${alignment} ${fontFamily} ${fontWeight} p-4 border rounded bg-gray-100 dark:bg-gray-800`}
  style={{ color: textColor }}
>
  {text.split('\n').map((line, index) => (
    <p key={index} className="mb-2">{line}</p>
  ))}
</div>

      </div>
    </div>
  );
};

export default App;
