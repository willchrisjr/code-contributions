function createCard(contributor) {
    const iframe = document.createElement('iframe');
    iframe.className = 'card col col-6-md col-3-lg bd-grey';
    iframe.src = `contributors/${contributor}`;
    iframe.title = contributor;
    const container = document.getElementById('contributor-cards');
    if (!container) {
        console.error("Element with id 'contributor-cards' not found.");
        return;
    }
    container.appendChild(iframe);
}

if (Array.isArray(contributorFiles)) {
    contributorFiles.forEach(contributor => {
        try {
            createCard(contributor);
        } catch (err) {
            console.error(`Failed to create card for ${contributor}:`, err);
        }
    });
} else {
    console.error('contributorFiles is not an array or is undefined.');
}
