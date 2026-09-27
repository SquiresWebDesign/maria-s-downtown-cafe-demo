const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");


// -----------------------------
// MOBILE MENU
// -----------------------------

menuButton.addEventListener("click", () => {

  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


document.querySelectorAll(".navigation a").forEach(link => {

  link.addEventListener("click", () => {

    navigation.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


// -----------------------------
// HEADER SCROLL
// -----------------------------

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.position = "fixed";
    header.style.background = "rgba(23,22,21,.94)";
    header.style.top = "0";
    header.style.backdropFilter = "blur(12px)";
  } else {
    header.style.position = "absolute";
    header.style.background = "transparent";
    header.style.top = "34px";
    header.style.backdropFilter = "none";
  }

});


// -----------------------------
// GALLERY
// -----------------------------

const galleryItems =
  document.querySelectorAll(".gallery-item");

const modal =
  document.getElementById("galleryModal");

const modalImage =
  document.getElementById("modalImage");

const modalCaption =
  document.getElementById("modalCaption");

const modalClose =
  document.getElementById("modalClose");


galleryItems.forEach(item => {

  item.addEventListener("click", () => {

    const background =
      getComputedStyle(item).backgroundImage;

    const title =
      item.dataset.title || "";

    modalImage.style.backgroundImage =
      background;

    modalCaption.textContent =
      title;

    modal.classList.add("active");

    document.body.classList.add("modal-open");

  });

});


function closeModal() {

  modal.classList.remove("active");

  document.body.classList.remove("modal-open");

}


modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener("click", event => {

  if (event.target === modal) {
    closeModal();
  }

});


document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    modal.classList.contains("active")
  ) {
    closeModal();
  }

});


// -----------------------------
// CURRENT YEAR
// -----------------------------

document.getElementById("year").textContent =
  new Date().getFullYear();


// -----------------------------
// SIMPLE REVEAL ANIMATION
// -----------------------------

const revealElements = document.querySelectorAll(
  ".intro-content, .menu-card, .gallery-item, .experience-item, .visit-card, .visit-photo, .contact-action"
);


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});
