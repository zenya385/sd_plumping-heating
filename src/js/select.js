

// const selectFild = document.querySelector(".select-fild");
// const selectText = document.querySelector(".select-text");
// const options = document.getElementsByClassName("options");
// const list = document.querySelector(".select-list");
// const arrowIcon = document.querySelector(".arrow-icon");

// selectFild.addEventListener("click", () => {
//   list.classList.toggle("hide");
//   arrowIcon.classList.toggle("rotate");
// });

// for (let option of options) {
//   option.addEventListener("click", (event) => {
//     selectText.innerHTML = event.target.textContent;
//     list.classList.toggle("hide");
//   });
// }


const selectFilds = document.querySelectorAll(".select-fild");
const selectTexts = document.querySelectorAll(".select-text");
const optionLists = document.querySelectorAll(".select-list");
const arrowIcons = document.querySelectorAll(".arrow-icon");

for (let i = 0; i < selectFilds.length; i+=1) {
  selectFilds[i].addEventListener("click", () => {
    optionLists[i].classList.toggle("hide");
    arrowIcons[i].classList.toggle("rotate");
  });

  const options = optionLists[i].getElementsByClassName("options");
  for (let option of options) {
    option.addEventListener("click", (event) => {
      selectTexts[i].innerHTML = event.target.textContent;
      optionLists[i].classList.toggle("hide");
    });
  }
}