// Countdown to Ganesh Chaturthi (Sept 6, 2025)
const countdown = document.getElementById("countdown");
const ganeshDate = new Date("2025-09-06T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = ganeshDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "Ganesh Chaturthi is here! 🙏";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hrs}h ${mins}m ${secs}s left`;
}, 1000);

// Auto-expand today's activity (for demo: expands 2nd activity on Aug 2)
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().getDate();
  const activities = document.querySelectorAll('.activities-section li');

  if (today === 2 && activities[1]) {
    activities[1].classList.add("highlight");
  }

  if (typeof AOS !== 'undefined') AOS.init();
});

// Countdown to Murti Sthapana (Sept 4, 2025)
function updateEventCountdown() {
  const eventDate = new Date("2025-09-04T08:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;
  const display = document.getElementById("event-countdown");
  if (!display) return;

  if (distance < 0) {
    display.innerText = "🙏 Murti Sthapana has begun!";
    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  display.innerText = `${d}d ${h}h ${m}m ${s}s to Murti Sthapana`;
}
setInterval(updateEventCountdown, 1000);

// Slot Booking (if any form is present)
function submitBooking() {
  const name = document.getElementById('book-name').value.trim();
  const contact = document.getElementById('book-contact').value.trim();

  if (!name || contact.length !== 10 || isNaN(contact)) {
    alert("Please enter a valid name and 10-digit mobile number.");
    return false;
  }

  alert(`🎤 Thank you, ${name}! Your slot has been booked.`);
  document.getElementById("booking-form").reset();
  return false;
}

// Handle Registration Form Submission
function handleRegistration() {
  const name = document.getElementById("reg-name").value.trim();
  const age = document.getElementById("reg-age").value.trim();
  const contact = document.getElementById("reg-contact").value.trim();
  const activity = document.getElementById("activity-select").value;

  const msgBox = document.getElementById("registration-msg");

  if (!name || !age || !contact || !activity) {
    msgBox.textContent = "⚠️ Please fill all fields!";
    msgBox.style.color = "red";
    return false;
  }

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Age", age);
  formData.append("Contact", contact);
  formData.append("Activity", activity);

  // ✅ YOUR SPREADSHEET SCRIPT URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbzFfxut4Xdn1CGX95eugdoDbLH3DrbolHCg-O_GxmGrNQGvyDCpuQ3Kisb2W2yPK57mcQ/exec";

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
    .then((res) => {
      msgBox.textContent = "✅ Registration successful!";
      msgBox.style.color = "green";
      document.getElementById("registration-form").reset();
    })
    .catch((err) => {
      msgBox.textContent = "❌ Registration failed. Try again!";
      msgBox.style.color = "red";
      console.error("Error:", err);
    });

  return false;
}
