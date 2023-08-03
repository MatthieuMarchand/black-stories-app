function toLike(event) {
    const imgHeart = event.target;
    const card = cardDatabase.find((card) => card.id === imgHeart.closest(".card").dataset.id);

    if (imgHeart.src.includes("/images/heart.svg")) {
        card.likedByUser = true;
        updateYourLikes();
        document.querySelectorAll(".imgHeart").forEach((imgHeart) => {
            if (imgHeart.closest(".card").dataset.id === card.id && imgHeart.src.includes("/images/heart.svg")) {
                imgHeart.src = "/images/fullHeart.svg";
                imgHeart.style.height ="23px";
                setTimeout(() => {
                    imgHeart.style.height ="20px";
                }, 200);
            }
        });
    } else {
        card.likedByUser = false;
        updateYourLikes();
        document.querySelectorAll(".imgHeart").forEach((imgHeart) => {
            if (imgHeart.closest(".card").dataset.id === card.id && imgHeart.src.includes("/images/fullHeart.svg")) {
                imgHeart.src = "/images/heart.svg";
                imgHeart.style.height ="17px";
                setTimeout(() => {
                    imgHeart.style.height ="20px";
                }, 200);
            }
        });
    }
}