    // Animación al hacer scroll
    const about = document.getElementById("about");

    window.addEventListener("scroll", () => {
      const position = about.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        about.classList.add("show");
      }
    });
