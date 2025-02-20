(function() {
  emailjs.init("JNw2Cfzf6fteoWMsM"); // Substitua pela sua Public Key
})();

const form = document.getElementById("meuFormulario");
const mensagemEnviada = document.getElementById("mensagemEnviada");
const campos = document.querySelectorAll("#name, #email, #message");

campos.forEach(campo => {
  campo.addEventListener("input", function () {
    removerErro(this);
  });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  // Remove mensagens de erro anteriores
  document.querySelectorAll(".erro-msg").forEach(msg => msg.remove());

  // Validação do Nome
  if (!name.value.trim()) {
    mostrarErro(name, "O nome é obrigatório.");
    isValid = false;
  }

  // Validação do E-mail (evita a validação nativa)
  if (!email.value.trim()) {
    mostrarErro(email, "O e-mail é obrigatório.");
    isValid = false;
  } else if (!validarEmail(email.value)) {
    mostrarErro(email, "Por favor, insira um e-mail válido.");
    isValid = false;
  }

  // Validação da Mensagem
  if (!message.value.trim()) {
    mostrarErro(message, "A mensagem não pode estar vazia.");
    isValid = false;
  }

  // Se houver erros, não enviar
  if (!isValid) return;

  // Envio pelo EmailJS
  emailjs.sendForm("service_2tq2ham", "template_6mynj6j", form)
      .then(() => {
          mensagemEnviada.style.display = "block";

          // Oculta a mensagem após 5 segundos
          setTimeout(() => {
              mensagemEnviada.style.display = "none";
          }, 5000);

          form.reset(); // Limpa os campos
      })
      .catch(error => {
          alert("Erro ao enviar a mensagem. Verifique as configurações do EmailJS.");
          console.error("Erro no envio do EmailJS:", error);
      });
});

// Função para validar o e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para exibir mensagens de erro abaixo dos campos
function mostrarErro(campo, mensagem) {
  const erroMsg = document.createElement("p");
  erroMsg.classList.add("erro-msg");
  erroMsg.style.color = "red";
  erroMsg.style.fontSize = "14px";
  erroMsg.textContent = mensagem;
  campo.insertAdjacentElement("afterend", erroMsg);
}

// Função para remover mensagens de erro ao digitar
function removerErro(campo) {
  const erroMsg = campo.nextElementSibling;
  if (erroMsg && erroMsg.classList.contains("erro-msg")) {
    erroMsg.remove();
  }
}
