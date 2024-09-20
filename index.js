document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница загружена и готова к использованию.');

  const searchButton = document.querySelector('#search-icon');
  const searchInput = document.querySelector('#search-input');
  const submitSearch = document.querySelector('#submit-search');

  searchButton.addEventListener('click', () => {
    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
    submitSearch.style.display = submitSearch.style.display === 'none' ? 'block' : 'none';
  });
});
