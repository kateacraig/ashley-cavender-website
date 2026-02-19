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
  const targetDate = new Date(2026, 7, 6, 0, 0, 0);
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("weeks").textContent = "00";
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  // Build from smallest unit up
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);

  // Each unit is the remainder after the larger unit is removed
  const weeks = totalWeeks;
  const days = totalDays % 7;
  const hours = totalHours % 24;
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  document.getElementById("weeks").textContent = pad(weeks);
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("seconds").textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
