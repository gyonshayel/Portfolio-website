const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  // State
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    headerBtn.classList.toggle("active");
    isMobileNavOpen = !isMobileNavOpen;

    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMobileNavOpen) {
      isMobileNavOpen = false;
      headerBtn.classList.remove("active");
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      headerBtn.classList.remove("active");
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
