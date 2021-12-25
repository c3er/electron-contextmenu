"use strict"

const remote = require("@electron/remote")

function handleContextMenuEvent() {
    const menu = new remote.Menu()
    if (window.getSelection().toString()) {
        menu.append(
            new remote.MenuItem({
                label: "Copy selection",
                role: "copy",
            })
        )
        menu.popup({
            window: remote.getCurrentWindow(),
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text-area").innerText = "This is a test"
})

window.addEventListener("contextmenu", handleContextMenuEvent)
