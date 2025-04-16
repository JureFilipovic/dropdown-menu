export default function dropdownInit() {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector(".dropbtn");
      const content = dropdown.querySelector(".dropdown-content");
  
      content.classList.add("hidden");
  
      button.addEventListener("click", (e) => {
        document.querySelectorAll(".dropdown-content").forEach((c) => {
          if (c !== content) c.classList.add("hidden");
        });
  
        content.classList.toggle("hidden");
        e.stopPropagation();
      });
    });
  
    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.add("hidden");
      });
    });
  }