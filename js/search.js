const input = document.getElementById('search');
input.addEventListener('input', searchCards);

function searchCards() {
    const valueInput = input.value.toLowerCase();
    const matchedCards = cardDatabase.filter(card => card.title.toLowerCase().includes(valueInput));
    const h2Element = cardsContainer.querySelector("h2");

    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(h2Element);
    matchedCards.forEach((card) => cardsContainer.appendChild(createCard(card.id)));
}