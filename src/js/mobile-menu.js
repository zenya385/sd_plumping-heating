(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  // const openSubMenuBtn = document.querySelector(".mob-submenu"); //*
  // const subMenuList = document.querySelector(".list"); //*

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  // document.addEventListener("click", (event) => {
  //   const isClickInsideBtn = openSubMenuBtn.contains(event.target);
  //   const isClickInsideList = subMenuList.contains(event.target);

  //   if (isClickInsideBtn) {
  //     openSubMenuBtn.classList.toggle("expand");
  //   } else if (!isClickInsideList) {
  //     openSubMenuBtn.classList.remove("expand");
  //   }
  // });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(max-width: 992px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
