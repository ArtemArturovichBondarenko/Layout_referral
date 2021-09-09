const refs = {
  ul: document.querySelector(".referral-howIt-list"),
};

refs.ul.addEventListener("click", showTarget);

function showTarget(event) {
  if (event.target.className !== "howIt-list-item-button") return;
  const li = event.target.closest(".howIt-list-item");
  li.children[1].classList.toggle("show_text");
}
