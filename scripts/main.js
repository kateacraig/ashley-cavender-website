// Ashley Cavender Campaign Website - Main JavaScript

// ==========================================
// Hamburger Menu
// ==========================================
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

// ==========================================
// Desktop/Tablet/Mobile Countdown Clock
// ==========================================
function updateCountdown() {
  const targetDate = new Date("2026-08-06T05:00:00Z");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach((id) => {
      document.getElementById(id).textContent = "00";
      document.getElementById(`${id}-mobile`).textContent = "00";
    });
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const days = totalDays;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  // Update desktop
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);

  // Update mobile
  document.getElementById("days-mobile").textContent = pad(days);
  document.getElementById("hours-mobile").textContent = pad(hours);
  document.getElementById("minutes-mobile").textContent = pad(minutes);
  document.getElementById("seconds-mobile").textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
