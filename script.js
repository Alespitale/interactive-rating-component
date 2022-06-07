const submitButton = document.querySelector(".submit_button");
const modalRating = document.querySelector(".modal_rating_container");
const modalThanks = document.querySelector(".modal_thanks_container");
const ratingScore = document.querySelector(".num_rated");

let buttons = document.querySelectorAll(".button");
let score = 0;

submitButton.addEventListener('click', buttonClicked);
buttons.forEach(but => but.addEventListener('click', scoreClicked));

function buttonClicked() {
    modalRating.classList.add("hide");
    modalThanks.classList.remove("hide");
    ratingScore.textContent = score;
}

function scoreClicked (e) {
    buttons.forEach(but => but.classList.remove("active"));
    e.target.classList.add("active");
    score = e.target.textContent;
}