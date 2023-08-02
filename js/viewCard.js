let card;
const blackFilter = document.getElementById("blackFilter");

function outsideClickHandler(event) {
    if (!card.contains(event.target)) {
        card.style.top = "100%";
        card.style.left = "50%";
        card.style.transform = "translate(-50%, 0)";
        blackFilter.style.opacity = "0";
        setTimeout(() => {
            cardsContainer.removeChild(card);
            blackFilter.style.display = "none";
            document.removeEventListener("click", outsideClickHandler);
        }, 300);
    }
}

function viewCard(e) {
    card = createCard(e.closest(".card").dataset.id);
    card.classList.remove("visible", "closed");
    card.classList.add("open");
    card.style.width = document.querySelector(".card").offsetWidth + "px";
    card.style.position = "fixed";
    card.style.zIndex = "2";
    card.style.top = "100%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, 0)";
    cardsContainer.appendChild(card);
    blackFilter.style.display = "block";

    setTimeout(() => {
        card.style.top = "50%";
        card.style.left = "50%";
        card.style.transform = "translate(-50%, -50%)";
        blackFilter.style.opacity = "1";
    }, 0);

    setTimeout(() => {
        document.addEventListener("click", outsideClickHandler);
    }, 0);
}