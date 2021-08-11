function clicou() {
  document.getElementById('btnClicked').innerHTML = '<b>Clique na sua &#127968;</b>';
}

function redirecionar() {
  // abre em outra janela
  window.open('https://www.arenamrv.com.br/'); 

  // abre na mesma janela
  // window.location.href = 'https://www.arenamrv.com.br/';
}

function trocar(event) {
  // document.getElementById('mouseover').innerHTML = 'Vc passou o mouse';
  event.innerHTML = 'Vc passou o mouse &#9989;';
}

function voltar(event) {
  // document.getElementById('mouseover').innerHTML = 'Passe o mouse aqui';
  event.innerHTML = 'Passe o mouse aqui &#10060;';
}

function load() {
  alert('Página carregada');
}

function setChange(event) {
  console.log(event.value)
}