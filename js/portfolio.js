document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  // Function to show the selected section and hide others
  function showSection(sectionId) {
      sections.forEach(section => {
          if (section.id === sectionId) {
              section.classList.remove('hidden');
          } else {
              section.classList.add('hidden');
          }
      });
  }

  // Add click event listeners to navigation links
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const sectionId = this.getAttribute('data-section');
          showSection(sectionId);
      });
  });

  // Show the home section by default
  showSection('home');
});