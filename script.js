const cb = document.querySelector("#checkbox");
const buttons = document.querySelectorAll("button");
cb.addEventListener("change", () => {
    if (cb.checked) {
        console.log("checked");
        buttons.forEach(button => {
            button.style.setProperty("--display", "block");
        });
    } else {
        buttons.forEach(button => {
            button.style.setProperty("--display", "inline");
        });
    }
});