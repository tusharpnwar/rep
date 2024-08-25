import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const result = await axios.post('https://your-backend-url/bfhl', parsedData);
      setResponse(result.data);
    } catch (error) {
      alert('Invalid JSON or server error');
    }
  };

  const renderResponse = () => {
    if (!response) return null;

    const { numbers, alphabets, highest_lowercase_alphabet } = response;
    return (
      <div>
        {selectedOptions.includes('Numbers') && <div>Numbers: {JSON.stringify(numbers)}</div>}
        {selectedOptions.includes('Alphabets') && <div>Alphabets: {JSON.stringify(alphabets)}</div>}
        {selectedOptions.includes('Highest Lowercase Alphabet') && <div>Highest Lowercase Alphabet: {JSON.stringify(highest_lowercase_alphabet)}</div>}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>21BCE1074</h1>
      <input
        type="text"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder='Enter JSON data'
        className="json-input"
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      <select multiple={true} onChange={(e) => setSelectedOptions(Array.from(e.target.selectedOptions, option => option.value))} className="multi-select">
        <option value="Numbers">Numbers</option>
        <option value="Alphabets">Alphabets</option>
        <option value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</option>
      </select>
      {renderResponse()}
    </div>
  );
}

export default App;
