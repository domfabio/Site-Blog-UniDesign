document.addEventListener('DOMContentLoaded', () => {
  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer-placeholder').outerHTML = data;
    })
    .catch((error) => console.error('Erro ao carregar o footer:', error));
});
