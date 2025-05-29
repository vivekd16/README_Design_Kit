# Readme Design Kit Web

A web app to browse, preview, and download assets for enhancing your GitHub README profile. Easily copy markdown code for each image!

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd README_Design_Kit
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
- The app will be available at `http://localhost:5173` by default.

---

## 🖼️ Sample Assets

Below are some sample images and GIFs available in the app:

| ![Alien Monster](src/assets/Alien%20Monster.png) | ![Blue Line](src/assets/Blue%20Line.gif) | ![Brain](src/assets/Brain.png) | ![Bug](src/assets/Bug.png) |
|:---:|:---:|:---:|:---:|
| Alien Monster | Blue Line | Brain | Bug |

| ![Comet](src/assets/Comet.png) | ![Confused Face](src/assets/Confused%20Face.png) | ![Eyes](src/assets/Eyes.png) | ![Firm Hand Waving](src/assets/Firm%20Hand%20Waving.png) |
|:---:|:---:|:---:|:---:|
| Comet | Confused Face | Eyes | Firm Hand Waving |

| ![Flame](src/assets/Flame.png) | ![Flexed Biceps](src/assets/Flexed%20Biceps.png) | ![Gmail Thug](src/assets/Gmail%20Thug.gif) | ![Hand Waving](src/assets/Hand%20Waving.gif) |
|:---:|:---:|:---:|:---:|
| Flame | Flexed Biceps | Gmail Thug | Hand Waving |

| ![Heart and Fire](src/assets/Heart%20and%20Fire.png) | ![Hot Cup](src/assets/Hot%20Cup.png) | ![Hourglass](src/assets/Hourglass.png) | ![Kyubey](src/assets/Kyubey.gif) |
|:---:|:---:|:---:|:---:|
| Heart and Fire | Hot Cup | Hourglass | Kyubey |

---

## ✨ Features
- Browse all assets visually
- Download any image or GIF
- Copy markdown code for easy README usage

---

## 📦 Project Structure
- `src/assets/` — All images and GIFs
- `src/App.jsx` — Main React app
- `src/App.css` — Styles

---

## 📝 License
MIT

## How to contribute if you can't push directly

If you can't commit directly to this repo, follow these steps:

1. **Fork the repository** on GitHub (click the "Fork" button at the top right of the repo page).
2. **Add your fork as a remote** in your codespace:
   ```bash
   git remote add fork https://github.com/<your-username>/<repo-name>.git
   ```
   Replace `<your-username>` and `<repo-name>` with your GitHub username and the forked repo name.
3. **Create and checkout a new branch** for your changes:
   ```bash
   git checkout -b my-feature-branch
   ```
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```
5. **Push your branch to your fork**:
   ```bash
   git push fork my-feature-branch
   ```
6. **Create a Pull Request** from your forked repo to the main repo on GitHub.

This lets you propose your changes for review and merging.
