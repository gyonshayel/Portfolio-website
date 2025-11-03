const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNavEl = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
  const headerLogoLink = document.querySelector(".header-logo__link");
  const header = document.querySelector(".header__content");

  if (!headerBtn || !mobileNavEl || !headerLogoLink || !header) return;

  // State
  let isMobileNavOpen = false;

  const openNav = () => {
    isMobileNavOpen = true;
    headerBtn.classList.add("active");
    headerLogoLink.classList.add("hidden");
    mobileNavEl.classList.add("active");
    mobileNavEl.classList.remove("not-active");
    document.body.classList.add("no-scroll");
  };

  const closeNav = () => {
    isMobileNavOpen = false;
    headerBtn.classList.remove("active");
    headerLogoLink.classList.remove("hidden");
    mobileNavEl.classList.add("not-active");
    mobileNavEl.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen ? closeNav() : openNav();
  });

  mobileLinks.forEach((link) => link.addEventListener("click", closeNav));

  const handleResize = () => {
    if (window.innerWidth >= 768 && isMobileNavOpen) {
      closeNav();
    }
    header.classList.toggle("container", window.innerWidth >= 768);
  };

  window.addEventListener("resize", () => {
    handleResize();
  });
};

export default mobileNav;
