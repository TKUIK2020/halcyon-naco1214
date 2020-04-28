const button=document.querySelector("#button")
const modal=document.querySelector("#modal")
button.addEventListener("click", function() {
    if       (modal.classList.contains("hidden")) {
                    modal.classList.remove("hidden")
    }
    else {modal.classList.add("hidden")}  }) 