function toggleShowCompletedHandler(event) {
    const completedElements = document.querySelectorAll(".completed");
    event.preventDefault()
    for (let item of completedElements) {
        item.classList.toggle("hidden");
    }
}

// botonDisparador como objeto  
botonDisparador.addEventListener("click", toggleShowCompletedHandler);
 