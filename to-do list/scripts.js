"use strict";

function addItem(text){
    const item = document.createElement('li');
    item.textContent = text;
    todo.appendChild(item);
}

addEventListener('click', ev =>{
    addItem(text.value);
});