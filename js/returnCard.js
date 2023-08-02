function returnCard(button) {
    const card = button.closest(".card");
    const frontSide = card.querySelector(".frontSide");
    const backSide = card.querySelector(".backSide");

    if (frontSide.style.transform === "rotateY(-180deg)") {
        frontSide.style.transform = "rotateY(0)";
        backSide.style.transform = "rotateY(180deg)";
    } else {
        frontSide.style.transform = "rotateY(-180deg)";
        backSide.style.transform = "rotateY(0)";
    }
}

function returnLi(li) {
    const hintFrontSide = li.querySelector(".hintFrontSide");
    const hintBackSide = li.querySelector(".hintBackSide");

    if (hintFrontSide.style.transform === "rotateY(-180deg)") {
        hintFrontSide.style.transform = "rotateY(0)";
        hintBackSide.style.transform = "rotateY(180deg)";
    } else {
        hintFrontSide.style.transform = "rotateY(-180deg)";
        hintBackSide.style.transform = "rotateY(0)";
    }
}