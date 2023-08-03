const input = document.getElementById('search');
const h2Stories = cardsContainer.querySelector("h2");

input.addEventListener('input', searchCards);

function searchCards() {
    removeYourLikes();

    const valueInput = input.value.toLowerCase();
    const matchedCards = cardDatabase.filter(card => card.title.toLowerCase().includes(valueInput));

    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(h2Stories);

    matchedCards.forEach((card) => cardsContainer.appendChild(createCard(card.id)));
}