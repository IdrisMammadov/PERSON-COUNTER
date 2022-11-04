let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let uncountEl=document.getElementById("decrement-btn")
let sumEl=document.getElementById("sum-el")
let count = 0
let total = 0;
const totalEl = document.getElementById("total");

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    total = total + count;
    count = 0
}
function decrement() {
    count-=1
    countEl.textContent=count;
}
function sum () {
     totalEl.textContent=total
}