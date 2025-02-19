document.addEventListener('DOMContentLoaded', function () {
  // Carregar o menu burger dinamicamente
  fetch('./menu-burger.html')
    .then((response) => response.text())
    .then((html) => {
      document.body.insertAdjacentHTML('beforeend', html);

      // Adicionar eventos de clique para abrir/fechar o menu
      document
        .querySelector('.burger-icon')
        .addEventListener('click', openBurger);
      document
        .getElementById('close-burger')
        .addEventListener('click', closeBurger);
    })
    .catch((error) => console.error('Erro ao carregar o menu:', error));
});

function openBurger() {
  document.getElementById('menu-burger').style.display = 'block';
}

function closeBurger() {
  document.getElementById('menu-burger').style.display = 'none';
}


