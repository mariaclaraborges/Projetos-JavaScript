const result = document.querySelector('.result');
const confirm = document.querySelector('.equal');

function insert(value){
    result.innerHTML += value; //ao clicar em um valor, a função result vai retornar o valor clicado no <p> do html
}

function clean(){
    result.innerHTML = ' ' ;
}

function backspace(){
    if(result.textContent){  //se tiver algo dentro do campo resultado == true
        let resultado = document.getElementById('result').innerHTML //cria-se uma variável para armazenar oq está dentro do <p>
        result.innerHTML = resultado.substring(0, resultado.length - 1) //vai adicionar outro conteúdo no <p>
    }
} 

function calculate(){
    if(result.textContent != 'Erro'){
        document.getElementById('result').innerHTML = eval(result.innerHTML)//joga a conta no eval, e vai executar
    }
}