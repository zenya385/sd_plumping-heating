// $(document).ready(function () {
//   $("#boiler").select2({
//     // placeholder: "Select",
//     // allowClear: true,
//   });
// });

const selectFild = document.querySelector(".select-fild");
const selectText = document.querySelector(".select-text");
const options = document.getElementsByClassName("options");
const list = document.querySelector(".select-list");
const arrowIcon = document.querySelector(".arrow-icon");

selectFild.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

for (let option of options) {
  option.addEventListener("click", (event) => {
    selectText.innerHTML = event.target.textContent;
    list.classList.toggle("hide");
  });
}
