// Função para mostrar o aviso
function mostrarAviso(mensagem, cor) {
  const aviso = $("#aviso");
  aviso.text(mensagem).removeClass("verde vermelho laranja").addClass(cor).fadeIn();

  // Defina um tempo em milissegundos para o aviso desaparecer (por exemplo, 3000 ms = 3 segundos)
  const tempoExibicao = 10000;

  // Após o tempo de exibição, o aviso desaparecerá
  setTimeout(function() {
      aviso.fadeOut();
  }, tempoExibicao);
}

// Exemplo de uso
$(document).ready(function() {
  // Exemplo de mensagem de aviso verde após 2 segundos
  setTimeout(function() {
      mostrarAviso("Eu desenvolvi esse site para testar meus conhecimentos em Jornal!", "verde");
  }, 2000);

});
