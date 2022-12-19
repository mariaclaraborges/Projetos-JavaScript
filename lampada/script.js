// const turnOn = document.getElementById('turnOn')
// const turnOff = document.getElementById('turnOff')


const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1 //se tiver quebrada no src (>-1 é true)
}

function lampOn () {
    if( !isLampBroken()){ //se a lampada nao estiver quebrada, liga a lampada
        lamp.src = './img/ligada.jpg';
        turnOnOff.textContent = 'Desligar';
    }
}

function lampOff () {
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

//Utilizando apenas um botão: quando o texto estiver 'ligar' deve ligar quando tiver 'desligar' deve desligar
function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn(); //liga lampada
        turnOnOff.textContent = 'Desligar'; //muda para desligar
    }
    
    else if(turnOnOff.textContent == 'Desligar'){
        lampOff(); //desliga lampada
        turnOnOff.textContent = 'Ligar'; //muda para ligar
    }
}




turnOnOff.addEventListener('click', lampOnOff)
// turn.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff) 
lamp.addEventListener('dblclick', lampBroken)

