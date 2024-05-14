import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  // Initialize state for markdown text
  const [markdown, setMarkdown] = useState('type markdown here');

  // Function to handle changes in the text area
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export default MarkdownEditor;