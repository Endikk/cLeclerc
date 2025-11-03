import { CHECK_INTERVAL } from './config.js';
import ImageManager from './imageManager.js';
import ImageReplacer from './imageReplacer.js';
import DOMObserver from './domObserver.js';

class CLeclerc {
    constructor() {
        this.imageManager = new ImageManager();
        this.imageReplacer = new ImageReplacer(this.imageManager);
        this.domObserver = new DOMObserver(this.imageReplacer);
    }

    init() {
        this.imageReplacer.replaceAll();
        this.domObserver.start();
        setInterval(() => this.imageReplacer.replaceAll(), CHECK_INTERVAL);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new CLeclerc();
        app.init();
    });
} else {
    const app = new CLeclerc();
    app.init();
}
