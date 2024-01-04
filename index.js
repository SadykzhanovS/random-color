document.addEventListener("DOMContentLoaded", () => {
    return setRandomColor()
})

document.addEventListener("keydown", event => {
    if (event.code === "Space") {
        return setRandomColor()
    }
})

function generatorRandomColor() {
    const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"]
    let color = ""

    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * symbols.length)]
    }

    return "#" + color
}

function setRandomColor() {
    const cols = document.querySelectorAll(".col")

    cols.forEach(col => {
        const text = col.querySelector("h2")
        const lock = col.querySelector("i")
        const color = generatorRandomColor()

        if (lock.classList.contains("fa-lock-open")) {
            text.textContent = color
            col.style.backgroundColor = color
        }

        text.addEventListener("click", () => {
            return navigator.clipboard.writeText(color)
        })

        lock.addEventListener("click", () => {
            if (lock.classList.contains("fa-lock-open")) {
                lock.classList.remove("fa-lock-open")
                lock.classList.add("fa-lock")
            } else {
                lock.classList.add("fa-lock-open")
                lock.classList.remove("fa-lock")
            }
        })
    })
}