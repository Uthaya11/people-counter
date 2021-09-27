let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count = count + 1
    countEl.innerText = count
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

function clearAll() {
    let countStr = '' 
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: " + ''
}

