const tablinksAc = document.getElementsByClassName("sd_b11__wrap__link");
const firstTabNameAc = tablinksAc[0].getAttribute("href").substring(1);

for (let i = 0; i < tablinksAc.length; i++) {
  if (tablinksAc[i].classList.contains("current-menu-item")) {
    tablinksAc[i].classList.remove("current-menu-item");
  }
}
tablinksAc[0].classList.add("current-menu-item");
document.getElementById(firstTabNameAc).style.display = "block";

function openTabAccordion(event, tabName) {
  const tabcontentAc = document.getElementsByClassName("accordion");
  for (let i = 0; i < tabcontentAc.length; i++) {
    tabcontentAc[i].style.display = "none";
  }

  for (let i = 0; i < tablinksAc.length; i++) {
    tablinksAc[i].classList.remove("current-menu-item");
  }

  document.getElementById(tabName).style.display = "block";

  if (window.innerWidth > 1260) {
    event.currentTarget.classList.toggle("current-menu-item");
  }
}
