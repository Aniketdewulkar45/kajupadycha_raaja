// ✅ Countdown to Ganesh Chaturthi (Sept 6, 2025)
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

// ✅ Lightbox Gallery
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// ✅ Toggle Activity Details
function toggleActivity(element) {
  const details = element.querySelector(".activity-details");
  const allDetails = document.querySelectorAll('.activity-details');
  allDetails.forEach(el => el.style.display = 'none');
  details.style.display = (details.style.display === "block") ? "none" : "block";
}

// ✅ Auto-expand Today’s Activity (for demo, expands 2nd on Aug 2)
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().getDate();
  const activities = document.querySelectorAll('.activities-section li');

  if (today === 2 && activities[1]) {
    toggleActivity(activities[1]);
  }

  // ✅ Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') AOS.init();
});

// ✅ Countdown to Main Event (Murti Sthapana)
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

// ✅ Slot Booking Submission
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
function handleRegistration() {
  const name = document.getElementById("reg-name").value.trim();
  const age = document.getElementById("reg-age").value.trim();
  const contact = document.getElementById("reg-contact").value.trim();
  const activity = document.getElementById("activity-select").value;

  if (!name || !age || !contact || !activity) {
    alert("Please fill all fields.");
    return false;
  }

  const msg = `✅ Thank you, ${name}! You have successfully registered for the ${activity}.`;
  document.getElementById("registration-msg").innerText = msg;

  // Reset the form
  document.getElementById("registration-form").reset();
  return false;
}
