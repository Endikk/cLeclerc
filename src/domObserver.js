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
            attributeFilter: ['src']
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
            }
        });

        if (mutation.type === 'attributes' &&
            mutation.target.tagName === 'IMG' &&
            mutation.attributeName === 'src') {
            this.imageReplacer.replace(mutation.target);
        }
    }

    stop() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

export default DOMObserver;
