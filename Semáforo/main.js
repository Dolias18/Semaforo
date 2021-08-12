const img     = document.querySelector('#img');
const buttons = document.querySelector('#buttons'); /*seleciona o pai*/
let colorIndex = 0;  /*cria a variavel colorindex que sera o indice da cor*/
let intervalId = null;

/*arrowfunction com parametro 'event' dentro com a variavel tornOn*/
const semaforo = (event) => {     /*função com propiedade event que puxa a propiedade que foi clickada que seria o nome exato do button como: yellow ou etc*/
  stop(); /*quando clickar em qualquer outra cor a variavel sera acionada*/
  turnOn[event.target.id]();  /*usando o evente ele puxa os id de cada botão e assim coloca as cores certas em seus buttons certos*/
}

/*arrowfunction com estrutura condicional com finalidade em mudar as cores automaricamente */
const nextIndex = () => {
  if (colorIndex < 2) {
  colorIndex++
  }else{
    colorIndex = 0;
  }
}

/*variavel que faz ficar automatico*/
const changeColor = () => {  /*cria a variavel com a função*/
  const colors = ['red','yellow','green'];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

/*Faz Parar o Button Automatico*/
const stop = () => {
  clearInterval(intervalId);
}

/*objeto com o nome turnOn com a função de selecionar as cores*/
const turnOn = {
  'red':    () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green':  () => img.src = './img/verde.png',
  'automatic':  () => intervalId = setInterval(changeColor, 1000), /*setinterval vai executart a função changecolor a cada 1segundos*/
}

buttons.addEventListener('click', semaforo);  /*evento de click que sera levado a função*/
