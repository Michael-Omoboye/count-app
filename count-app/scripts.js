"use strict";

let count = 0;
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let savebtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");


incrementBtn.addEventListener('click', ev => {
    count += 1
    countEl.textContent = count
});

savebtn.addEventListener('click', ev => {
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent  = count;
});