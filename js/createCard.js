const cardsContainer = document.getElementById("stories");

function createCard(cardId) {
    const card = cardDatabase.find((card) => card.id === cardId);

    if (!card) {
        console.log("Card not found with ID : " + cardId);
        return null;
    }

    const newCard = document.createElement("div");
    newCard.classList.add("card", "visible");
    newCard.setAttribute("data-id", card.id);
    newCard.innerHTML = `
            <div class="frontSide">
                <div class="cardHead">
                    <h3>${card.title}</h3>
                    <img class="imgHeart" src="/images/heart.svg" alt="heart" />
                </div>
                <img class="imgQuestion" src="${card.imgQuestion}" alt="${card.descriptionImgQuestion}" />
                <p class="textQuestion">${card.question}</p>
                <ul>
                    ${card.hints.map((hint) => `
                        <li onclick="returnLi(this)">
                            <div class="hintFrontSide">
                                <img src="/images/question.svg" alt="?" />
                                <p>See this hint</p>
                            </div>
                            <div class="hintBackSide">
                                <p>${hint}</p>
                            </div>
                        </li>
                    `).join("")}
                </ul>
                <button onclick="returnCard(this)">
                    <p>see the answer</p>
                    <img src="/images/arrow.svg" alt="arrow">
                </button>
                <button class="seeMore" onclick="viewCard(this)">
                    <p>see more</p>
                    <img src="/images/arrow.svg" alt="arrow">
                </button>
            </div>
            <div class="backSide">
                <img class="imgQuestion" src="${card.imgQuestion}" alt="${card.descriptionImgQuestion}" />
                <div class="cardHead">
                    <h3>${card.title}</h3>
                    <img class="imgHeart" src="/images/heart.svg" alt="heart" />
                </div>
                <img class="imgSolution" src="${card.imgSolution}" alt="${card.descriptionImgSolution}" />
                <p class="textSolution">${card.solution}</p>
                <button onclick="returnCard(this)">
                    <p>show the story</p>
                    <img src="/images/arrow.svg" alt="arrow">
                </button>
            </div>
    `;

    return newCard;
}

cardDatabase.forEach((card) => cardsContainer.appendChild(createCard(card.id)));