# cLeclerc

> Transform your browsing experience with Charles Leclerc everywhere

A Chrome extension that replaces all images on websites with photos of Formula 1 driver Charles Leclerc.

![Charles Leclerc](https://64.media.tumblr.com/d4a8b82f49955fd1feb58222940c5c24/06d44c13837e3919-74/s1280x1920/7f074abec03f2b56692600e97cb48ac47dc328e7.jpg)

## Features

- Works on all websites automatically
- Lightweight and fast - vanilla JavaScript, no dependencies
- Smart detection of dynamically loaded images
- MutationObserver API for optimal performance
- Manifest V3 compatible

## Installation

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/cLeclerc.git
   ```

2. Open Chrome and go to `chrome://extensions/`

3. Enable **Developer mode** (top-right corner)

4. Click **Load unpacked** and select the project folder

5. Done! Start browsing and watch the magic happen.

## Usage

Once installed, the extension automatically replaces images as you browse.

To disable temporarily, right-click the extension icon and toggle it off.

## Tech Stack

- JavaScript ES6+ Modules
- Chrome Extension Manifest V3
- MutationObserver API
- ESLint for code quality

## Project Structure

```
cLeclerc/
├── src/
│   ├── main.js           # Entry point
│   ├── config.js         # Configuration
│   ├── imageManager.js   # Image URL management
│   ├── imageReplacer.js  # Image replacement logic
│   └── domObserver.js    # DOM mutation observer
├── images/
│   ├── all/             # Charles Leclerc photos (23 images)
│   └── profil/          # Extension icons
├── manifest.json        # Extension config
├── package.json         # NPM dependencies
├── .eslintrc.json       # ESLint configuration
└── README.md
```

## Development

### Prerequisites

- Node.js and npm
- Google Chrome or Chromium

### Setup

1. Install dependencies
   ```bash
   npm install
   ```

2. Lint the code
   ```bash
   npm run lint
   ```

3. Auto-fix linting issues
   ```bash
   npm run lint:fix
   ```

## Contributing

Contributions are welcome! Check out [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Disclaimer

All photos of Charles Leclerc are property of their respective owners. This is an unofficial fan project and is not affiliated with Charles Leclerc, Scuderia Ferrari, or Formula 1.

---

**Forza Ferrari!**
