console.log("Responsive.js is Loaded.....");

const burger = document.getElementById("burger");
const profileSidebar = document.getElementById("profile-sidebar");
const closeBtn = document.getElementById("btn-close");
const profileImgToggle = document.getElementById("profile-img-toggle");
const mainNav = document.querySelector(".main-nav");

// Toggle the navigation menu when the burger icon is clicked
burger.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  profileSidebar.classList.remove("active");
});

// Close the profile sidebar when the close button is clicked
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    profileSidebar.classList.remove("active");
  });
}

// Toggle the profile sidebar when the profile image is clicked
profileImgToggle.addEventListener("click", () => {
  profileSidebar.classList.toggle("active");
  mainNav.classList.remove("active");
});

// Adjust layout based on screen size
function adjustLayout() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    // Mobile and Tablet
    mainNav.classList.remove("active");
    profileSidebar.classList.add("hidden");
  } else {
    // Laptop and Larger Devices
    mainNav.classList.add("active");
    profileSidebar.classList.remove("hidden");
  }
}

// Listen for window resize events
window.addEventListener("resize", adjustLayout);

// Initial layout adjustment
adjustLayout();