// Show the selected section and hide others
function showSection(sectionId, clickedTab) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }

  // Update active tab styling
  const tabs = document.querySelectorAll('.tabs a');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  if (clickedTab) {
    clickedTab.classList.add('active');
  }
}

// Show the first section by default when page loads
window.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.querySelector('section');
  if (firstSection) {
    firstSection.classList.add('active');
  }
});
