class ImageReplacer {
    constructor(imageManager) {
        this.imageManager = imageManager;
        this.replacedImages = new WeakSet();
    }

    replace(img) {
        if (this.replacedImages.has(img) || this.imageManager.isLeclercImage(img.src)) {
            return;
        }

        const height = img.height;
        const width = img.width;

        if (height > 0 && width > 0) {
            this.applyReplacement(img, width, height);
        } else {
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
        const images = document.querySelectorAll('img');
        images.forEach(img => this.replace(img));
    }
}

export default ImageReplacer;
