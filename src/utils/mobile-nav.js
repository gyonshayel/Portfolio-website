const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
  const headerLogoLink = document.querySelector(".header-logo__link");
  const header = document.querySelector(".header__content");

  // State
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    headerBtn.classList.toggle("active");

    isMobileNavOpen = !isMobileNavOpen;

    if (isMobileNavOpen) {
      headerLogoLink.hidden = true;
      mobileNav.classList.add("active");
      mobileNav.classList.remove("not-active");
      // mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      headerLogoLink.hidden = false;
      mobileNav.classList.add("not-active");
      mobileNav.classList.remove("active");
      // mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMobileNavOpen) {
      isMobileNavOpen = false;
      headerLogoLink.hidden = false;
      headerBtn.classList.remove("active");
      // mobileNav.style.display = "none";
      mobileNav.classList.add("not-active");
      mobileNav.classList.remove("active");
      document.body.style.overflowY = "auto";
    }

    // Expanding mobile header
    window.innerWidth < 768
      ? header.classList.remove("container")
      : header.classList.add("container");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      headerLogoLink.hidden = false;
      headerBtn.classList.remove("active");
      // mobileNav.style.display = "none";
      mobileNav.classList.add("not-active");
      mobileNav.classList.remove("active");
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
