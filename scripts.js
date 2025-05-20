document.querySelectorAll("button").forEach(function (botao) {
  botao.addEventListener("click", function () {
    document.body.classList.toggle("popup--aberto");
  });
});

  // Ajuste suave para rolagem com espaço para o cabeçalho fixo
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const yOffset = -150; // Ajuste para o cabeçalho
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }

      // Remover active de todos e adicionar no clicado
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Efeito revelar ao rolar
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }

  window.addEventListener("scroll", reveal);

  // Chamar na primeira vez
  reveal();