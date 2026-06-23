document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const projectLinks = document.querySelectorAll(".project-link");
projectLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("glitch");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("glitch");
  });
});

const style = document.createElement("style");
style.innerHTML = `
  .glitch {
    position: relative;
    color: #d4af37;
    animation: glitch 1s infinite;
  }

  @keyframes glitch {
    0% {
      text-shadow: -1px -1px 0 #ffd700, 1px 1px 0 #ffd700;
      transform: skew(0.1deg, -0.1deg);
    }
    20% {
      text-shadow: 2px 2px 0 #ffd700, -2px -2px 0 #ffd700;
      transform: skew(0.5deg, 0.5deg);
    }
    40% {
      text-shadow: -1px 1px 0 #ffd700, 1px -1px 0 #ffd700;
      transform: skew(-0.2deg, 0.2deg);
    }
    60% {
      text-shadow: 1px 1px 0 #ffd700, -1px -1px 0 #ffd700;
      transform: skew(0.3deg, -0.3deg);
    }
    80% {
      text-shadow: -1px -1px 0 #ffd700, 1px 1px 0 #ffd700;
      transform: skew(0.1deg, -0.1deg);
    }
    100% {
      text-shadow: 2px 2px 0 #ffd700, -2px -2px 0 #ffd700;
      transform: skew(0.5deg, 0.5deg);
    }
  }
`;
document.head.appendChild(style);

const tagline = document.querySelector(".hero-tagline");
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = "";

  let i = 0;
  const typingEffect = setInterval(() => {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingEffect);
    }
  }, 100);
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const expanded = navMenu.classList.contains("open");
    navToggle.setAttribute("aria-expanded", expanded);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}