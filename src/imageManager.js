class ImageManager {
    constructor() {
        this.leclercImageUrls = [];
        this.loadImages();
    }

    loadImages() {
        this.leclercImageUrls = LECLERC_IMAGES.map(fileName =>
            chrome.runtime.getURL(`images/all/${fileName}`)
        );
    }

    getRandomImage() {
        return this.leclercImageUrls[Math.floor(Math.random() * this.leclercImageUrls.length)];
    }

    isLeclercImage(src) {
        return this.leclercImageUrls.includes(src);
    }
}
