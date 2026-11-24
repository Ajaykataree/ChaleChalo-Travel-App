// Navbar stays transparent over the hero/banner, then turns solid on scroll.
const mainNav = document.getElementById("mainNav");
if (mainNav) {
  const updateNavbar = function () {
    mainNav.classList.toggle("nav-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();
}

// Prevent users from picking a travel date in the past.
["travelDate", "date"].forEach(function (id) {
  const input = document.getElementById(id);
  if (input) input.min = new Date().toISOString().split("T")[0];
});

// ChaloChale Travel App - beginner-friendly JavaScript

// Fill the destination field when a user clicks a Book button on the home page.
document.querySelectorAll("[data-destination]").forEach(function (button) {
  button.addEventListener("click", function () {
    const destinationInput = document.getElementById("destination");
    if (destinationInput) {
      destinationInput.value = button.getAttribute("data-destination");
    }
  });
});

// Read a destination from the URL on the Booking page.
const bookingDestination = document.getElementById("bookingDestination");
if (bookingDestination) {
  const params = new URLSearchParams(window.location.search);
  const destination = params.get("destination");
  if (destination) bookingDestination.value = destination;
}

// Demo booking form in the home page modal.
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("bookingMessage").classList.remove("d-none");
    bookingForm.reset();
  });
}

// Demo booking form on the separate Booking page.
const bookingPageForm = document.getElementById("bookingPageForm");
if (bookingPageForm) {
  bookingPageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("bookingPageMessage").classList.remove("d-none");
    bookingPageForm.reset();
  });
}

// Demo contact form.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("contactSuccess").classList.remove("d-none");
    contactForm.reset();
  });
}


// Signup form demo: checks that both entered passwords match.
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("signupMessage");
    if (document.getElementById("signupPassword").value !== document.getElementById("confirmPassword").value) {
      message.textContent = "Passwords do not match. Please try again.";
      message.classList.remove("d-none", "alert-success");
      message.classList.add("alert-danger");
      return;
    }
    message.textContent = "Signup form submitted successfully (demo only). No account has been created.";
    message.classList.remove("d-none", "alert-danger");
    message.classList.add("alert-success");
    signupForm.reset();
  });
}

// Login form demo: no real password verification without a backend.
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("loginMessage").classList.remove("d-none");
    loginForm.reset();
  });
}

// Subtle 3D tilt on the hero image that follows the mouse (home page only).
const heroCarousel = document.getElementById("travelCarousel");
if (heroCarousel) {
  const activeHeroImg = function () {
    return heroCarousel.querySelector(".carousel-item.active .hero-img");
  };
  heroCarousel.addEventListener("mousemove", function (event) {
    const img = activeHeroImg();
    if (!img) return;
    const rect = heroCarousel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    img.style.transform =
      "perspective(900px) rotateY(" + (x * 10).toFixed(2) + "deg) rotateX(" + (-y * 8).toFixed(2) + "deg)";
  });
  heroCarousel.addEventListener("mouseleave", function () {
    const img = activeHeroImg();
    if (img) img.style.transform = "";
  });
}
