let selected = null;

document.querySelectorAll(".list-item").forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.select').forEach(input => {
            input.classList.remove('select')
        })
        item.classList.add('select')
        selected = item.innerHTML
    })
})

const btn = document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()
    if (selected != null) {
        let primeiroDisplay = document.querySelector(".start-rate")
        let segundoDisplay = document.querySelector(".end-rate")
        let selection = document.querySelector(".selection")

        selection.innerHTML = `<p>You selected ${selected} out of 5</p>`

        primeiroDisplay.classList.add("none")
        segundoDisplay.classList.remove("none")
    } else {
        alert("You need to select at least 1 grade!!")
    }
})