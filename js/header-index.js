document.addEventListener('DOMContentLoaded', () => {
  const headerIndex = document.querySelector('.header-index');
  const headerAlternate = document.querySelector('.header-alternate');

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // Quando chegar totalmente ao topo, mostra o header principal
      headerIndex.style.opacity = '1';
      headerIndex.style.pointerEvents = 'auto';

      headerAlternate.style.opacity = '0';
      headerAlternate.style.pointerEvents = 'none';
    } else {
      // Qualquer outra posição, mantém o header alternativo visível
      headerIndex.style.opacity = '0';
      headerIndex.style.pointerEvents = 'none';

      headerAlternate.style.opacity = '1';
      headerAlternate.style.pointerEvents = 'auto';
    }
  });
});
