import React, { useState } from 'react';
import './App.css';

const assetFiles = [
  "Alien Monster.png",
  "Blue Line.gif",
  "Blue Pink Line.gif",
  "Brain.png",
  "Bug.png",
  "Comet.png",
  "Confused Face.png",
  "Eyes.png",
  "Firm Hand Waving.png",
  "Firm Handshake.png",
  "Flame.png",
  "Flexed Biceps.png",
  "Gmail Thug.gif",
  "Hand Waving.gif",
  "Heart and Fire.png",
  "Hot Cup.png",
  "Hourglass.png",
  "Kyubey.gif",
  "Man Technologist.png",
  "Multicolor Segregated Line.png",
  "Multicolor Static Line.png",
  "Musical Notes.png",
  "Nerd Face.png",
  "Pixel Cat.gif",
  "Plumber.gif",
  "Professional Handshake.gif",
  "RGB Line Medium.gif",
  "RGB Line Thick.gif",
  "RGB Line Thin.gif",
  "Rabit Happy.gif",
  "Roboto.png",
  "Rocket.png",
  "Spiral.png",
  "Star Light Line.gif",
  "Star.png",
  "Thinking Face.png",
  "Wing Left.png",
  "Wing Right.png",
  "Writing.png"
];

const getType = (file) => {
  if (file.toLowerCase().includes('line')) return 'Line';
  if (file.toLowerCase().includes('gif')) return 'GIF';
  if (file.toLowerCase().includes('face') || file.toLowerCase().includes('emoji')) return 'Emoji';
  if (file.toLowerCase().includes('icon')) return 'Icon';
  return 'Other';
};

function ThemeSwitch({ darkMode, onToggle }) {
  return (
    <button
      className={`theme-switch${darkMode ? ' dark' : ' light'}`}
      onClick={onToggle}
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
      type="button"
    >
      <span className="switch-track">
        <span className="switch-icon sun">☀️</span>
        <span className="switch-icon moon">🌙</span>
        <span className="switch-thumb" />
      </span>
    </button>
  );
}

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [assets, setAssets] = useState(assetFiles);
  const [copied, setCopied] = useState(null);

  const filteredAssets = assets.filter(file => {
    const matchesSearch = file.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || getType(file) === filter;
    return matchesSearch && matchesFilter;
  });

  const handleCopy = (file) => {
    const code = `![${file.replace(/\.[^.]+$/, '')}](src/assets/${file.replace(' ', '%20').replace(/ /g, '%20').replace(/'/g, '%27')})`;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(file);
      setTimeout(() => setCopied(null), 1200);
    });
  };

  const handleThemeToggle = () => setDarkMode((d) => !d);

  const handleModal = (file) => setModal(file);
  const closeModal = () => setModal(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFile(file);
      // Simulate upload: add to asset list (in real app, upload to server)
      setAssets((prev) => [...prev, file.name]);
    }
  };

  React.useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'container dark' : 'container light'} style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      <div className="top-bar">
        <h1>Readme Design Kit</h1>
        <ThemeSwitch darkMode={darkMode} onToggle={handleThemeToggle} />
      </div>
      <p>Browse and copy assets to enhance your GitHub README profile!</p>
      <div className="controls">
        <input
          className="search-bar"
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="filter-select" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Line">Lines</option>
          <option value="GIF">GIFs</option>
          <option value="Emoji">Emojis</option>
          <option value="Icon">Icons</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="gallery grid-5-cols">
        {filteredAssets.map((file) => (
          <div
            className="asset-card"
            key={file}
            draggable
            onDragStart={e => {
              e.dataTransfer.setData('DownloadURL', `image/png:${file}:/src/assets/${file}`);
            }}
          >
            <img
              src={"/src/assets/" + file}
              alt={file}
              className="asset-img"
              onClick={() => handleModal(file)}
              style={{ cursor: 'pointer' }}
            />
            <div className="asset-name">{file.replace(/\.[^.]+$/, '')}</div>
            <div className="asset-actions">
              <a
                href={"/src/assets/" + file}
                download={file}
                className="download-btn"
              >
                Download
              </a>
              <div className="asset-code-label">Markdown code for README:</div>
              <div className="asset-code-block">
                <code>{`![${file.replace(/\.[^.]+$/, '')}](path/${file})`}</code>
              </div>
              <button className="copy-btn" onClick={() => handleCopy(file)} title="Copy markdown code">
                {copied === file ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={"/src/assets/" + modal} alt={modal} className="modal-img" />
            <div className="modal-name">{modal.replace(/\.[^.]+$/, '')}</div>
            <div className="asset-code-label">Markdown code for README:</div>
            <div className="asset-code-block">
              <code>{`![${modal.replace(/\.[^.]+$/, '')}](path/${modal})`}</code>
            </div>
            <button className="copy-btn" onClick={() => handleCopy(modal)} title="Copy markdown code">
              {copied === modal ? 'Copied!' : 'Copy'}
            </button>
            <a href={"/src/assets/" + modal} download={modal} className="download-btn modal-download">Download</a>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
