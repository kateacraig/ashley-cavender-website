// Ashley Cavender Campaign Website - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest("nav") && !e.target.closest(".hamburger")) {
      if (navMenu && navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    }
  });
});

function updateCountdown() {
  const targetDate = new Date("August 6, 2026 00:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("weeks").textContent = "00";
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  // Total weeks
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);

  // Days remaining after full weeks
  const days = totalDays % 7;

  // Hours remaining after full days
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Seconds remaining after full hours
  const seconds = Math.floor((diff % (1000 * 60 * 60)) / 1000);

  // Pad with leading zero if single digit
  const pad = (n) => String(n).padStart(2, "0");

  document.getElementById("weeks").textContent = pad(weeks);
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("seconds").textContent = pad(seconds);
}

// Run immediately and then update every second
updateCountdown();
setInterval(updateCountdown, 1000);
