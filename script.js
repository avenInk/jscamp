const botones = document.querySelector(".search-container");

botones.addEventListener("click", (event) => {
    
    const element = event.target; 
    
    if(element.classList.contains("boton-aplicar")) {
        element.textContent = "¡Aplicado!";
        element.classList.add("is-disabled");
        element.disabled = true;
    }
})

