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
      <a
        href="https://github.com/Mayur-Pagote/README_Design_Kit"
        className="contribute-btn"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          margin: '2.5rem auto 0',
          padding: '0.7rem 2.2rem',
          fontSize: '1.13rem',
          fontWeight: 600,
          borderRadius: '8px',
          background: darkMode ? '#646cff' : '#232526',
          color: darkMode ? '#fff' : '#fff',
          boxShadow: '0 2px 12px #646cff22',
          textDecoration: 'none',
          transition: 'background 0.2s, color 0.2s',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '0.7em',
          justifyContent: 'center',
          width: 'fit-content'
        }}
      >
        <svg height="1.5em" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '0.5em'}} aria-hidden="true"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.184 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.657.242 2.881.119 3.184.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
        Contribute
      </a>
    </div>
  );
}

export default App;
