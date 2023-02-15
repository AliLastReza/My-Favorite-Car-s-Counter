let countEl = document.getElementById("count-el")
let totalCountEl = document.getElementById("total-count")

let count = 0
let total = 0

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
    totalCountEl.textContent = total
}

let previousEntriesEl = document.getElementById("previous-entries")

function save() {
    let countStr = count + " - "
    previousEntriesEl.textContent += countStr
    resetCount()
}

function resetCount() {
    count = 0
    countEl.textContent = 0
}

console.log("Let's count people on the subway!")

