const tablinks = document.getElementsByClassName("sd_b4__wrap__link");
const firstTabName = tablinks[0].getAttribute("href").substring(1);

for (let i = 0; i < tablinks.length; i++) {
  if (tablinks[i].classList.contains("current-menu-item")) {
    tablinks[i].classList.remove("current-menu-item");
  }
}
tablinks[0].classList.add("current-menu-item");
document.getElementById(firstTabName).style.display = "flex";

function openTab(event, tabName) {
  const tabcontent = document.getElementsByClassName("sd_b4__wrapper");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("current-menu-item");
  }

  document.getElementById(tabName).style.display = "flex";

  if (window.innerWidth > 1260) {
    event.currentTarget.classList.toggle("current-menu-item");
  }
}
