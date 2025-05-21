 window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const footer = document.getElementById("footer");
    const navLinks = document.querySelectorAll("nav ul li a");

    let currentId = "";
    const scrollY = window.scrollY;
    const midScreen = scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (midScreen >= top && midScreen < bottom) {
        currentId = section.getAttribute("id");
      }
    });


    const nettrain = document.getElementById("nettrain");
    if (
      nettrain &&
      midScreen >= nettrain.offsetTop &&
      midScreen < nettrain.offsetTop + nettrain.offsetHeight
    ) {
      currentId = "application";
    }

    if (footer && scrollY + window.innerHeight >= footer.offsetTop) {
      currentId = "application";
    }


    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const triggerSection = document.querySelector("#overview");
    const sectionTop = triggerSection.offsetTop;
    const sectionHeight = triggerSection.offsetHeight;

    if (y > sectionTop && y < sectionTop + sectionHeight) {
      nav.classList.remove("light-border");
      nav.classList.add("dark-border");
    } else {
      nav.classList.remove("dark-border");
      nav.classList.add("light-border");
    }
  });