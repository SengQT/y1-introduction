document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle functionality
    const toggleButton = document.getElementById("themeToggle");
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggleButton.textContent = document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
    });
  
    // Collapsible sections functionality
    const headers = document.querySelectorAll(".collapsible-header");
  
    headers.forEach(header => {
      // Toggle on click
      header.addEventListener("click", function () {
        toggleCollapsible(this);
      });
  
      // Toggle on keyboard (Enter or Space)
      header.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCollapsible(this);
        }
      });
    });
  
    function toggleCollapsible(header) {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".toggle-arrow");
  
      // Update aria-expanded attribute for accessibility
      const isExpanded = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", !isExpanded);
  
      // Rotate the arrow accordingly
      arrow.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
  
      // Toggle the active class to animate collapsible content
      content.classList.toggle("active");
    }
  });
  