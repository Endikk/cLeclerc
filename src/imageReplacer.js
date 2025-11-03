class ImageReplacer {
    constructor(imageManager) {
        this.imageManager = imageManager;
        this.replacedImages = new WeakSet();
    }

    replace(img) {
        if (this.replacedImages.has(img) || this.imageManager.isLeclercImage(img.src)) {
            return;
        }

        // Force replacement even if dimensions are 0
        const computedStyle = window.getComputedStyle(img);
        const height = img.height || parseInt(computedStyle.height) || 0;
        const width = img.width || parseInt(computedStyle.width) || 0;

        if (height > 0 && width > 0) {
            this.applyReplacement(img, width, height);
        } else {
            this.applyReplacement(img, Math.max(width, 200), Math.max(height, 200));
            this.replaceWhenLoaded(img);
        }
    }

    applyReplacement(img, width, height) {
        img.style.width = `${width}px`;
        img.style.height = `${height}px`;
        img.src = this.imageManager.getRandomImage();
        this.replacedImages.add(img);
    }

    replaceWhenLoaded(img) {
        const handleLoad = () => {
            if (!this.replacedImages.has(img) && !this.imageManager.isLeclercImage(img.src)) {
                const h = img.height;
                const w = img.width;
                if (h > 0 && w > 0) {
                    this.applyReplacement(img, w, h);
                }
            }
            img.removeEventListener('load', handleLoad);
        };

        img.addEventListener('load', handleLoad);
    }

    replaceAll() {
        // Replace all <img> tags
        const images = document.querySelectorAll('img');
        images.forEach(img => this.replace(img));

        // Replace CSS background-images
        this.replaceBackgroundImages();

        // Replace images in iframes
        this.replaceInIframes();
    }

    replaceBackgroundImages() {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            const style = window.getComputedStyle(element);
            const bgImage = style.backgroundImage;

            if (bgImage && bgImage !== 'none' && !bgImage.includes('chrome-extension://')) {
                if (!element.dataset.leclercBg) {
                    element.style.backgroundImage = `url('${this.imageManager.getRandomImage()}')`;
                    element.dataset.leclercBg = 'true';
                }
            }
        });
    }

    replaceInIframes() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDoc) {
                    const images = iframeDoc.querySelectorAll('img');
                    images.forEach(img => this.replace(img));
                }
            } catch (e) {
                // Ignore cross-origin security errors
                console.log('Cannot access iframe due to cross-origin restrictions');
            }
        });
    }
}
