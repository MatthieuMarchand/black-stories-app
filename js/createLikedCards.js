const likedCardsContainer = document.getElementById("yourLikes");
const buttonYourLikes = document.getElementById("buttonYourLikes");
const h2LikedCards = likedCardsContainer.querySelector("h2");
let likedCards = false;

function createLikedCards() {
    if (!likedCards) {
        updateYourLikes();
        buttonYourLikes.classList.add("active");
        likedCardsContainer.style.display = "block";
        likedCards = true;
    } else {
        removeYourLikes();
    }
}

function updateYourLikes() {
    likedCardsContainer.innerHTML = "";
    likedCardsContainer.appendChild(h2LikedCards);
    cardDatabase.filter((card) => card.likedByUser).forEach((card) => {
        const newCard = createCard(card.id);
        newCard.classList.remove("visible");
        newCard.classList.add("closed");
        newCard.addEventListener("click", (event) => {
            viewCard(event.target);
        });
        likedCardsContainer.appendChild(newCard);
    });

    if (likedCardsContainer.children.length < 2) {
        removeYourLikes();
        buttonYourLikes.style.display = "none";
    } else {
        buttonYourLikes.style.display = "block";
    }
}

function removeYourLikes() {
    buttonYourLikes.classList.remove("active");
    likedCardsContainer.style.display = "none";
    likedCards = false;
}

updateYourLikes();