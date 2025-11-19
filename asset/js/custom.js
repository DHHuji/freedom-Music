/* hide the heading in search results */
document.querySelectorAll('h2 span').forEach(span => {
    if (span.textContent.trim() === 'Items') {
        span.parentElement.style.display = 'none';
    }
});