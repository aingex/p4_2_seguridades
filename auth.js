document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'index.html';
    }
});
