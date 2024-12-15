document.addEventListener("DOMContentLoaded", () => {
  const cardElements = document.querySelectorAll('.unit-card');

  cardElements.forEach((cardElement) => {
    cardElement.addEventListener("click", () => {
      const isExpanded = cardElement.classList.contains("popular");

      document.querySelectorAll(".unit-card").forEach((unitCard) => {
        unitCard.classList.remove("popular");
        const sizeColorSection = unitCard.querySelector(".size-color");
        if (sizeColorSection) {
          sizeColorSection.style.display = "none";
        }
      });

      if (!isExpanded) {
        cardElement.classList.add("size-color");
        const sizeColorSection = cardElement.querySelector(".size-color");
        if (sizeColorSection) {
          sizeColorSection.style.display = "flex";
        }
      }
    });
  });

  document.querySelectorAll(".size-color").forEach((sizeColor) => {
    sizeColor.style.display = "none";
  });
});
