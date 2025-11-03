class DOMObserver {
    constructor(imageReplacer) {
        this.imageReplacer = imageReplacer;
        this.observer = null;
    }

    start() {
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => this.handleMutation(mutation));
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'style', 'class']
        });
    }

    handleMutation(mutation) {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.tagName === 'IMG') {
                    this.imageReplacer.replace(node);
                }
                if (node.querySelectorAll) {
                    const images = node.querySelectorAll('img');
                    images.forEach(img => this.imageReplacer.replace(img));
                }
                // Check for newly added iframes
                if (node.tagName === 'IFRAME') {
                    setTimeout(() => this.imageReplacer.replaceInIframes(), 100);
                }
            }
        });

        if (mutation.type === 'attributes') {
            const target = mutation.target;

            // Replace if it's an img tag and src changed
            if (target.tagName === 'IMG' && mutation.attributeName === 'src') {
                this.imageReplacer.replace(target);
            }

            // Check if style changed and contains a background-image
            if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
                const style = window.getComputedStyle(target);
                const bgImage = style.backgroundImage;
                if (bgImage && bgImage !== 'none' && !bgImage.includes('chrome-extension://')) {
                    if (!target.dataset.leclercBg) {
                        target.style.backgroundImage = `url('${this.imageReplacer.imageManager.getRandomImage()}')`;
                        target.dataset.leclercBg = 'true';
                    }
                }
            }
        }
    }

    stop() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
