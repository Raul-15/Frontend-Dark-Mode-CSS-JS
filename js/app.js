//console.log(window.matchMedia('(prefers-color-scheme: dark)'))

const checkbox = document.querySelector("#checkbox");
/*Enlaza/Detecta mediaqueries*/
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    checkbox.setAttribute("checked", true);
}
//<p class="dark-mode-title"></p>
//document.body.style.setProperty('--cardGray', 'blue')
// Puede quitarse el is-mode-dark con add y remove o toggle! pero toggle no funciona sin condicional
checkbox.addEventListener("change", function(event) {
    if (!this.checked) {
        document.body.classList.remove("is-light-mode");
        document.body.classList.add("is-dark-mode");
    } else {
        document.body.classList.remove("is-dark-mode");
        document.body.classList.add("is-light-mode");
    }
    console.log(this.checked)
});