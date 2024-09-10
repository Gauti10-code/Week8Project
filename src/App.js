import React, { useState, useEffect } from 'react';
import './App.css';
import UploadNovelForm from './components/UploadNovelForm';

function App() {
  const [view, setView] = useState('home');
  const [novels, setNovels] = useState([]);
  const [selectedNovel, setSelectedNovel] = useState(null);

  useEffect(() => {
    const savedNovels = JSON.parse(localStorage.getItem('novels')) || [];
    setNovels(savedNovels);
  }, []);

  const handleUpload = (newNovel) => {
    const updatedNovels = [...novels, newNovel];
    setNovels(updatedNovels);
    localStorage.setItem('novels', JSON.stringify(updatedNovels));
    setView('home');
  };

  return (
    <div className="App">
      {view === 'home' && (
        <>
          <h1>Novel Blog</h1>
          <button onClick={() => setView('upload')}>Upload New Novel</button>
          <div className="novel-list">
            {novels.map((novel, index) => (
              <div
                key={index}
                className="novel-item"
                onClick={() => {
                  setSelectedNovel(novel);
                  setView('details');
                }}
              >
                <h3>{novel.title}</h3>
                <p>{novel.author}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {view === 'upload' && <UploadNovelForm onUpload={handleUpload} />}

      {view === 'details' && selectedNovel && (
        <div className="novel-details">
          <h2>{selectedNovel.title}</h2>
          <p><strong>Author:</strong> {selectedNovel.author}</p>
          <p><strong>Genre:</strong> {selectedNovel.genre}</p>
          <p><strong>Summary:</strong> {selectedNovel.summary}</p>
          <img src={selectedNovel.imageURL} alt={selectedNovel.title} />
          <button onClick={() => setView('home')}>Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default App;
