function mudarInformacoes() {
  const informaçoesHTML = document.getElementById("informacoesHTML");
  informaçoesHTML.innerHTML = "";

  informaçoesHTML.innerHTML += `
  <thead class="thead">
    <form action="" class="adicionar" id="novoItem">
      <label for="informacoes" class="informacoes"><strong>Nome:</strong></label>
      <input type="text" name="nome" id="nome" size="100"/>
      <label for="informacoes" class="informacoes"><strong>Idade:</strong></label>
      <input type="number" name="idade" id="idade" size="100"/>
      <label for="informacoes" class="informacoes"><strong>Localização:</strong></label>
      <input type="text" name="localizacao" id="localizacao" size="100"/>
      <label for="informacoes" class="informacoes"><strong>Biografia:</strong></label>
    <textarea id="biografia" rows="10"></textarea>
    <button class="botaoFormulario" onclick="adicionarInformacoes()">
              Adicionar Informaçoes
            </button>  
  </thead>
    `;
}

function adicionarInformacoes() {
  const nome = document.getElementById("nome");
  const idade = document.getElementById("idade");
  const localizacao = document.getElementById("localizacao");
  const biografia = document.getElementById("biografia");

  const nomeFinal = nome.value;
  const idadeFinal = idade.value;
  const localizacaoFinal = localizacao.value;
  const biografiaFinal = biografia.value;
  console.log(nomeFinal + idadeFinal + localizacaoFinal + biografiaFinal);

  const informaçoesHTML = document.getElementById("informacoesHTML");
  informaçoesHTML.innerHTML = "";

  informaçoesHTML.innerHTML += `
    <thead class="thead">
    <p><strong>Nome:</strong> ${nomeFinal}</p>
    <p><strong>Idade:</strong> ${idadeFinal} Anos</p>
    <p><strong>Localização:</strong> ${localizacaoFinal}</p>
    <p><strong>Biografia:</strong> ${biografiaFinal}</p>
    <button class="botaoFormulario" onclick="mudarInformacoes()">Mudar Informaçoes</button>
  </thead>
    `;

  console.log(nome + idade + localizacao + biografia);
}
