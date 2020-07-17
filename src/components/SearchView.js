import React, { useState, useEffect, useRef } from 'react';

const SearchView = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  // acts as componentDidMount method
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onInputChange = (event) => {
    const input = event.target.value;
    setInput(input);
    onSearch(input);
  };

  return (
    <div className="search-box">
      Trending Repositories <span className="slash">/</span>
      <input
        type="text"
        name="input"
        value={input}
        ref={inputRef}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchView;
