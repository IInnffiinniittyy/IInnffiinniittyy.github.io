/* =============== My Learnings Model =============== */
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

let button = document.getElementById("download");
button.addEventListener("click", () => {
  window.open("./assets/pdf/fw19_0461-Tanuj-Pant.pdf");
});

let button1 = document.getElementById("resume");
button1.addEventListener("click", () => {
  window.open("./assets/pdf/fw19_0461-Tanuj-Pant.pdf");
});
