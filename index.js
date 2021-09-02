let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let deleteEl = document.getElementById("delete-el")
let outBtn = document.getElementById("out-btn")

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
} 

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count -= count
    countEl.textContent = 0   
}

function erase() {
    count -= count
    countEl.textContent = 0
}

function out() {
    let countStr = '' 
    saveEl.textContent = "Previous entries: " + ''
}

