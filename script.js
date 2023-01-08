let button = document.getElementById('btn')

let variable = 2 + 2
console.log(variable + 3);

function alert() {
    let now = new Date()
    console.log(now.toLocaleTimeString())
}

button.addEventListener('click', alert)