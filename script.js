// AOS animation init
AOS.init({
  duration: 1000,
  once: true
});

// Mobile menu toggle
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// Enquiry form submission
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enquiryData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  fetch("http://localhost:8080/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enquiryData)
  })
  .then(response => response.text())
  .then(msg => {
    alert("Your enquiry has been received. You will get a call shortly from our side. Thank you!");
    document.getElementById("enquiryForm").reset();
  })
  .catch(error => {
    alert("Something went wrong. Please try again.");
    console.error(error);
  });
});
