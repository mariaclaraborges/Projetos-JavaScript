'use strict';
//fazer um carregamento dinâmico: array com objetos
const images = [
    { 'id': '1', 'url':'./img/foto1.jpg' },
    { 'id': '2', 'url':'./img/foto2.jpg' },
    { 'id': '3', 'url':'./img/foto3.jpg' },
    { 'id': '4', 'url':'./img/foto4.jpg' },
    { 'id': '5', 'url':'./img/foto5.jpg' },
    { 'id': '6', 'url':'./img/foto6.jpg' },
]

const containerItems = document.querySelector('#container-items') //seletor por css (querySelector)

const loadImages = (images, container) => { //imagens e onde o as imagens vão ficar (container)
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        ` 
    })
}

loadImages(images,containerItems);
 
let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const previous = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)