// Initialize and add the map
function initMap() {
  // The location of your store (24 Pitt St, Adelaide SA 5000)
  const storeLocation = { lat: -34.928042488761434, lng: 138.5973714523374 }; // Latitude and Longitude for 24 Pitt St, Adelaide SA 5000

  // The map, centered at the store location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, // Default zoom level
    center: storeLocation,
    mapTypeControl: true, // Enables map/satellite control
    streetViewControl: true, // Enables street view control
  });

  // Add a red marker at the store location
  const marker = new google.maps.Marker({
    position: storeLocation,
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // Standard red marker icon
    }
  });

  // Add a link to Google Maps to "View Larger Map"
  const mapLink = document.createElement("div");
  mapLink.innerHTML = `<a href="https://www.google.com/maps?q=${storeLocation.lat},${storeLocation.lng}&z=15" target="_blank">View Larger Map</a>`;
  map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(mapLink);
}

// Word Count Functionality (Character counting, including spaces)
const messageInput = document.getElementById("message");
const wordCountDisplay = document.getElementById("word-count");

messageInput.addEventListener("input", function () {
  const charCount = messageInput.value.length; // Count the number of characters including spaces
  wordCountDisplay.textContent = `${charCount}/1000 characters`;

  if (charCount > 1000) {
    wordCountDisplay.style.color = "red"; // Change color to red if limit is exceeded
  } else {
    wordCountDisplay.style.color = "white"; // Default color
  }
});

// Form Submission Feedback
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Perform form submission using Fetch API
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then(response => {
      formStatus.textContent = "Your form has been submitted.";
      formStatus.style.color = "green";
      form.reset(); // Reset the form fields
      wordCountDisplay.textContent = "0/1000 characters"; // Reset word count
    })
    .catch(error => {
      formStatus.textContent = "An error occurred. Please try again.";
      formStatus.style.color = "red";
    });
});

function changeImage(newSrc) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = newSrc;
}
