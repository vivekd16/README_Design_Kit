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

function App() {
  return (
    <div className="container">
      <h1>Readme Design Kit</h1>
      <p>Browse and copy assets to enhance your GitHub README profile!</p>
      <div className="gallery">
        {assetFiles.map((file) => (
          <div className="asset-card" key={file}>
            <img src={"/src/assets/" + file} alt={file} className="asset-img" />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
