export const myFunction = () => {
  const toggleButton = document.getElementById("toggle-skills");
  const skillsSection = document.getElementById("skills");

  if (skillsSection && toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
      } else {
        skillsSection.style.display = "none";
      }
    });
  } else {
    console.error("Button or Skills section not found");
  }
};

// Call myFunction after DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});
