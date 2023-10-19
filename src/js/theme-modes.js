const body = document.querySelector("body");
let theme = localStorage.getItem("theme") || "light";

const ThemeMode = () => {
    if (theme === "dark") {
        body.classList.remove("darkmode")
        theme = "light"
    } else {
        body.classList.add("darkmode");
        theme = "dark"
    }
    localStorage.setItem("theme", theme)
}


if (theme === "dark") {
    body.classList.add("darkmode")
}

// narazie nie ma buttona od darkmoda więc darkmoda przełącza
// sie tym 2 enterem tym prawym w rogu klawiatury
document.addEventListener("keydown", event => {
    if (event.code === "NumpadEnter") {
        ThemeMode()
    }
})
