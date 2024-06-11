document.addEventListener('scroll', () => {
    const content = document.querySelector('.content');
    const pinnedImage = document.querySelector('.pinned-image');
    const pinnedText = document.querySelector('.pinned-text');

    const contentRect = content.getBoundingClientRect();
    const bottomOfContent = contentRect.bottom;
    const viewportHeight = window.innerHeight;

    if (bottomOfContent <= viewportHeight) {
        pinnedImage.style.position = 'absolute';
        pinnedImage.style.bottom = '10px';
        pinnedImage.style.left = '10px';

        pinnedText.style.position = 'absolute';
        pinnedText.style.bottom = '10px';
        pinnedText.style.left = '180px';
    } else {
        pinnedImage.style.position = 'fixed';
        pinnedImage.style.bottom = '10px';
        pinnedImage.style.left = '10px';

        pinnedText.style.position = 'fixed';
        pinnedText.style.bottom = '10px';
        pinnedText.style.left = '180px';
    }
});
