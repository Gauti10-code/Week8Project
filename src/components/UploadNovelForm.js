import React, { useState } from 'react';

function UploadNovelForm({ onUpload }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [summary, setSummary] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNovel = { title, author, genre, summary, imageURL };
    onUpload(newNovel);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </label>
      <label>
        Summary:
        <textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
      </label>
      <button type="submit">Upload Novel</button>
    </form>
  );
}

export default UploadNovelForm;
