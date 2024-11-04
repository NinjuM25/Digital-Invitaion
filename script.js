// Countdown Timer
const targetDate = new Date("December 31, 2024 14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "It's Zeb's Christening!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// RSVP Form Submission and Saving to Local Storage
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const guests = parseInt(document.getElementById("guests").value, 10);

  // Retrieve existing RSVP list from local storage
  let rsvps = JSON.parse(localStorage.getItem("guestList")) || [];
  
  // Add the new RSVP entry
  rsvps.push({ name, guests });
  
  // Save the updated RSVP list back to local storage
  localStorage.setItem("guestList", JSON.stringify(rsvps));

  alert("Thank you for your RSVP!");
  this.reset();
});

// Display Guest List and Total Count
function displayGuestList() {
  const rsvps = JSON.parse(localStorage.getItem("guestList")) || [];
  const guestListElement = document.getElementById("guestList");
  const totalGuestsElement = document.getElementById("totalGuests");

  guestListElement.innerHTML = "";
  let totalGuests = 0; // Initialize total guests count

  rsvps.forEach(rsvp => {
    const listItem = document.createElement("li");
    listItem.textContent = `${rsvp.name} - ${rsvp.guests} guests`;
    guestListElement.appendChild(listItem);
    totalGuests += rsvp.guests; // Accumulate total guests
  });

  totalGuestsElement.textContent = `Total Guests: ${totalGuests}`; // Update total guests display
}

// Handle view guest list button click
document.getElementById("viewGuestList").addEventListener("click", function() {
  displayGuestList();
  document.getElementById("guestListDisplay").classList.toggle("hidden");
});

// Clear Guest List with Password
document.getElementById("clearGuestList").addEventListener("click", function() {
  const password = prompt("Enter the password to clear the guest list:");
  
  if (password === "1252") {
    localStorage.removeItem("guestList");
    alert("Guest list has been cleared.");
    displayGuestList(); // Refresh the guest list display after clearing
  } else {
    alert("Incorrect password. Access denied.");
  }
});
