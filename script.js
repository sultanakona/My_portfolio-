

// const EMAILJS_CONFIG = {
//   publicKey: "", // Your EmailJS Public Key
//   serviceId: "", // Your Service ID
//   templateId: "", // Your Template ID
// };
const EMAILJS_CONFIG = window.EMAILJS_CONFIG || {
  publicKey: "",
  serviceId: "",
  templateId: "",
};



(function () {
  if (typeof emailjs === "undefined") {
    console.warn("⚠️ EmailJS library not loaded. Make sure the CDN link is correct.");
    return;
  }

  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log("✅ EmailJS initialized successfully!");
    console.log("Service ID:", EMAILJS_CONFIG.serviceId);
    console.log("Template ID:", EMAILJS_CONFIG.templateId);
  } catch (error) {
    console.error("❌ EmailJS initialization failed:", error);
  }
})();



const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active Navigation on Scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project Filter Functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filterValue === "all") {
        card.classList.remove("hide");
        setTimeout(() => {
          card.style.display = "block";
        }, 10);
      } else {
        if (card.getAttribute("data-category") === filterValue) {
          card.classList.remove("hide");
          card.style.display = "block";
        } else {
          card.classList.add("hide");
          setTimeout(() => {
            if (card.classList.contains("hide")) {
              card.style.display = "none";
            }
          }, 300);
        }
      }
    });
  });
});


const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = submitBtn.querySelector(".btn-text");
const btnLoading = submitBtn.querySelector(".btn-loading");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
    time: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  console.log("Form submitted with data:", formData);

  // Check if EmailJS is configured and available
  if (typeof emailjs === "undefined") {
    console.warn("⚠️ EmailJS library not loaded");
    showMessage(
      `Thank you ${formData.name}! Your message has been received. I'll get back to you at ${formData.email} soon! ✅`,
      "success",
    );
    contactForm.reset();
    return;
  }



  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = "none";
  btnLoading.style.display = "inline";
  formMessage.style.display = "none";

  try {
    console.log("📤 Sending email via EmailJS...");
    const response = await emailjs.send(
  EMAILJS_CONFIG.serviceId,
  EMAILJS_CONFIG.templateId,
  formData,
  EMAILJS_CONFIG.publicKey
);


    console.log("✅ Email sent successfully:", response);

    // Show success message
    showMessage(
      "Thank you for your message! I will get back to you soon. ✅",
      "success",
    );

    // Reset form
    contactForm.reset();
  } catch (error) {
    console.error("❌ Email send failed:", error);
    console.error("Error details:", error.text || error.message);

    // Show error message with helpful info
    if (error.text) {
      showMessage(
        `Error: ${error.text}. Please try again or email me directly. ❌`,
        "error",
      );
    } else {
      showMessage(
        "Oops! Something went wrong. Please try again or email me directly. ❌",
        "error",
      );
    }
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    btnText.style.display = "inline";
    btnLoading.style.display = "none";
  }
});

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = "block";

  // Auto hide after 8 seconds
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 8000);
}

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all service cards and project cards
document.querySelectorAll(".service-card, .project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.backgroundColor = "rgba(10, 10, 10, 0.9)";
    navbar.style.boxShadow = "none";
  }
});

// Contact Button Click (scroll to contact)
const contactBtns = document.querySelectorAll(".contact-btn, .cta-btn");
contactBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add typing effect to hero subtitle
const subtitle = document.querySelector(".hero-subtitle");
if (subtitle) {
  const originalText = subtitle.textContent;
  subtitle.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      subtitle.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing effect after page load
  window.addEventListener("load", () => {
    setTimeout(typeWriter, 500);
  });
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled * 0.003;
  }
});

// View All Projects Button
const viewAllBtn = document.querySelector(".view-all-btn");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => {
    projectCards.forEach((card) => {
      card.classList.remove("hide");
      card.style.display = "block";
    });
    viewAllBtn.style.display = "none";
  });
}

// Add hover effect to service cards
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Preloader (optional)
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

console.log("🎨 Portfolio website loaded successfully!");
console.log("📧 EmailJS Configuration:");
console.log(
  "- Public Key:",
  EMAILJS_CONFIG.publicKey ? "✅ Set" : "❌ Not set",
);
console.log(
  "- Service ID:",
  EMAILJS_CONFIG.serviceId ? "✅ Set" : "❌ Not set",
);
console.log(
  "- Template ID:",
  EMAILJS_CONFIG.templateId ? "✅ Set" : "❌ Not set",
);
