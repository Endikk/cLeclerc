/**
 * cLeclerc - Chrome Extension
 * @version 1.0.3
 */

(function() {
    'use strict';

    // Configuration
    const LECLERC_IMAGES = [
        'leclerc1.jpg', 'leclerc2.jpg', 'leclerc3.jpg', 'leclerc4.jpg',
        'leclerc5.jpg', 'leclerc6.jpg', 'leclerc7.jpg', 'leclerc8.jpg',
        'leclerc9.jpg', 'leclerc10.jpg', 'leclerc11.jpg', 'leclerc12.jpg',
        'leclerc13.jpg', 'leclerc14.jpg', 'leclerc15.jpg', 'leclerc16.jpg',
        'leclerc17.jpg', 'leclerc18.jpg', 'leclerc19.jpg', 'leclerc20.jpg',
        'leclerc21.jpg', 'leclerc22.jpg', 'leclerc23.jpg'
    ];

    const CHECK_INTERVAL = 3000;

    // State
    const replacedImages = new WeakSet();
    let leclercImageUrls = [];

    // Image URL helpers
    function loadImages() {
        leclercImageUrls = LECLERC_IMAGES.map(fileName =>
            chrome.runtime.getURL(`images/all/${fileName}`)
        );
    }

    function getRandomLeclercImage() {
        return leclercImageUrls[Math.floor(Math.random() * leclercImageUrls.length)];
    }

    function isLeclercImage(src) {
        return leclercImageUrls.includes(src);
    }

    // Image replacement
    function replaceImage(img) {
        if (replacedImages.has(img) || isLeclercImage(img.src)) {
            return;
        }

        const height = img.height;
        const width = img.width;

        if (height > 0 && width > 0) {
            img.style.width = `${width}px`;
            img.style.height = `${height}px`;
            img.src = getRandomLeclercImage();
            replacedImages.add(img);
        } else {
            const handleLoad = () => {
                if (!replacedImages.has(img) && !isLeclercImage(img.src)) {
                    const h = img.height;
                    const w = img.width;
                    if (h > 0 && w > 0) {
                        img.style.width = `${w}px`;
                        img.style.height = `${h}px`;
                        img.src = getRandomLeclercImage();
                        replacedImages.add(img);
                    }
                }
                img.removeEventListener('load', handleLoad);
            };

            img.addEventListener('load', handleLoad);
        }
    }

    function handleAllImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => replaceImage(img));
    }

    // DOM observation
    function setupMutationObserver() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.tagName === 'IMG') {
                            replaceImage(node);
                        }
                        if (node.querySelectorAll) {
                            const images = node.querySelectorAll('img');
                            images.forEach(img => replaceImage(img));
                        }
                    }
                });

                if (mutation.type === 'attributes' &&
                    mutation.target.tagName === 'IMG' &&
                    mutation.attributeName === 'src') {
                    replaceImage(mutation.target);
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src']
        });

        return observer;
    }

    // Initialization
    function init() {
        loadImages();
        handleAllImages();
        setupMutationObserver();
        setInterval(handleAllImages, CHECK_INTERVAL);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
