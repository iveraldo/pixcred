//DECLARAÇÃO DAS VARIÁVEIS
let valorCliente = document.getElementById("tagTela");
let tagResultado = document.getElementById("id_resultado");
let tagParcelas = document.getElementById("id_parcelas");

//FUNÇÃO PARA EXECUTAR AÇÕES QUANDO O BOTÃO FOR CLICADO
function verificarClick() {
  //CRIAÇÃO DE VARIAVEL QUE RECEBE UM PARAMETRO POR ID DAS PARCELAS
  let selectParcelas = parseInt(document.getElementById("id_select").value);
  //ESTRUTURA DE CONDIÇÃO PARA VALIDAR A QUALIDADE DE PARCELAS
  if (selectParcelas == 10) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.16;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "10x de R$ " + parseInt(resultado / 10);
    console.log(selectParcelas);
  } else if (selectParcelas == 9) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.16;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "9x de R$ " + parseInt(resultado / 9);
    console.log(selectParcelas);
  } else if (selectParcelas == 8) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.15;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "8x de R$ " + parseInt(resultado / 8);
    console.log(selectParcelas);
  } else if (selectParcelas == 7) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.15;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "7x de R$ " + parseInt(resultado / 7);
    console.log(selectParcelas);
  } else if (selectParcelas == 6) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.15;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "6x de R$ " + parseInt(resultado / 6);
    console.log(selectParcelas);
  } else if (selectParcelas == 5) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.15;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "5x de R$ " + parseInt(resultado / 5);
    console.log(selectParcelas);
  } else if (selectParcelas == 4) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.15;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "4x de R$ " + parseInt(resultado / 4);
    console.log(selectParcelas);
  } else if (selectParcelas == 3) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.14;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "3x de R$ " + parseInt(resultado / 3);
    console.log(selectParcelas);
  } else if (selectParcelas == 2) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.14;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "2x de R$ " + parseInt(resultado / 2);
    console.log(selectParcelas);
  } else if (selectParcelas == 1) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.13;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "1x de R$ " + parseInt(resultado / 1);
    console.log(selectParcelas);
  } else if (selectParcelas == 11) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.16;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "11x de R$ " + parseInt(resultado / 11);
    console.log(selectParcelas);
  } else if (selectParcelas == 12) {
    let valor = parseInt(valorCliente.value);
    let juros = valor * 0.17,5;
    let resultado = valor + juros;
    console.log(resultado);
    tagResultado.innerHTML = "R$ " + parseInt(resultado) + ",00";
    tagParcelas.innerHTML = "12x de R$ " + parseInt(resultado / 12);
    console.log(selectParcelas);
  } else {
    location.reload();
  }
}
