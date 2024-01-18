function toggleSearch() {
    var searchInput = document.querySelector('.search-input');
    var searchIcon = document.querySelector('.search-icon');
    var cancelIcon = document.querySelector('.cancel-icon');

    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'inline-block';
        searchInput.style.width = '70%'; /* Adjust width as needed */
        searchIcon.style.display = 'none';
        cancelIcon.style.display = 'inline-block';
    } else {
        searchInput.style.display = 'none';
        searchInput.style.width = '0';
        searchIcon.style.display = 'inline-block';
        cancelIcon.style.display = 'none';
        searchInput.value = '';
    }
}

function toggleNavbar() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
}