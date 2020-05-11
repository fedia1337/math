console.log("hello andrew")

// --- first (green) ---------------------------
const firstW = 4
const firstH = 3
const firstS = square (firstW, firstH)

const first = document.getElementById ("first")
first.style.width = `${firstW}cm`
first.style.height = `${firstH}cm`
first.innerText = "S = " + firstS

console.log(firstS)


// --- second (orange) -----------------------

const secondW = 3
const secondH = 3
const secondS = square (secondH, secondW)

const second = document.getElementById ("second")
second.style.width = `${secondW}cm`
second.style.height = `${secondH}cm`
second.innerText = "S = " + secondS

console.log(secondS)


// --- fedia (pink) -----------------------
const fediaW = 4
const fediaH = 2
const fediaS =square (fediaW, fediaH)

const fedia = document.getElementById ("fedia")
fedia.style.width = `${fediaW}cm`
fedia.style.height = `${fediaH}cm`
fedia.innerText = "S = " + fediaS

console.log(fediaS)


function square(width, height){
    return width * height
}