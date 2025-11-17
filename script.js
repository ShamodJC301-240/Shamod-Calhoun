/* =====================================================
   PORTFOLIO INTERACTIVE FEATURES - TODO LIST
   =====================================================
   Shamod's Portfolio - JavaScript TODOs
*/

/* === TODO 1: Highlight active nav link when scrolling ===
   - Idea: When you scroll to a section, the corresponding nav link should get a special style
   - Hints:
     1. Use document.querySelectorAll to get sections and nav links
     2. Use window.scrollY to detect current scroll position
     3. Add a CSS class like "active-link" to the correct nav link
   - What you’ll learn: scroll events, classList, offsetTop, basic DOM traversal
*/
function highlightNavLinkOnScroll() {

}

/* === TODO 2: Back-to-top button ===
   - Idea: A button appears when the user scrolls down, and when clicked, scrolls the page back to top smoothly
   - Hints:
     1. Use document.createElement to create the button dynamically
     2. Style it via JS or CSS
     3. Use window.scrollTo({ top: 0, behavior: "smooth" }) to scroll
     4. Use window.addEventListener('scroll', ...) to show/hide it
   - What you’ll learn: DOM creation, event listeners, scroll behavior, conditional rendering
*/
function backToTopButton() {

}

/* === TODO 3: Click-to-enlarge project images ===
   - Idea: Clicking a project image opens a larger preview in a modal overlay
   - Hints:
     1. Loop through all images and add a click event listener
     2. Create a full-screen div with a dark background as an overlay
     3. Add an img element inside it with the clicked image’s src
     4. Clicking the overlay hides it
   - What you’ll learn: dynamic DOM elements, event delegation, CSS overlay manipulation
*/
function enlargeProjectImages() {

}

/* === TODO 4: Auto-update footer year ===
   - Idea: The footer shows the current year automatically
   - Hints:
     1. Use new Date().getFullYear()
     2. Update the footer text using innerHTML or textContent
   - What you’ll learn: Working with Dates in JS, DOM text updates
*/
function updateFooterYear() {
  const footerYearElement = document.getElementById('footer-year');
  if (footerYearElement) {
    const currentYear = new Date().getFullYear();
    footerYearElement.textContent = currentYear;
  }
}
/* === TODO 5: Carousel scroll buttons ===
   - Idea: Add "next" and "previous" buttons for your project carousels to scroll horizontally
   - Hints:
     1. Use querySelector to select each carousel container
     2. Use scrollBy or scrollTo to move left or right when a button is clicked
     3. Optionally, implement smooth scrolling
   - What you’ll learn: scrolling methods, button click events, horizontal layouts
*/
function carouselScrollButtons() {

}
/* === TODO 6: Form validation ===
   - Idea: Check contact form inputs before submitting
   - Hints:
     1. Use event.preventDefault() on form submit
     2. Validate name, email, and message fields
     3. Show a message if the input is invalid
   - What you’ll learn: form handling, input validation, error messages
*/
function validateContactForm() {

}
/* === TODO 7: Light/dark mode toggle ===
   - Idea: Add a button that toggles light and dark color themes
   - Hints:
     1. Add a CSS class for dark mode styles
     2. Toggle the class on document.body when clicking the button
     3. Optionally, save preference in localStorage
   - What you’ll learn: class toggling, local storage, CSS theme design
*/
function toggleLightDarkMode() {

}
/* === TODO 8: Project card hover effects ===
   - Idea: When hovering a project card, show extra info or animate
   - Hints:
     1. Use mouseenter and mouseleave events
     2. Change styles dynamically or toggle classes
   - What you’ll learn: hover effects with JS, animations, style manipulation
*/
function projectCardHoverEffects() {

}
/* === TODO 9: Scroll reveal animations ===
   - Idea: Animate sections or cards as they come into view
   - Hints:
     1. Use IntersectionObserver API or scroll event
     2. Add a "visible" class to elements when they are in viewport
   - What you’ll learn: modern APIs, animation triggers, scroll effects
*/
function scrollRevealAnimations() {

}
/* === TODO 10: Search/filter projects ===
   - Idea: Allow users to search or filter projects by name or type
   - Hints:
     1. Create an input field for search
     2. Listen to 'input' event and filter cards dynamically
     3. Show/hide cards based on the search query
   - What you’ll learn: DOM filtering, live search, array/string manipulation
*/
/* === TODO 10: Search/filter projects === */
function filterProjects() {
  // TODO: Filter project cards based on search input
}

/* === INIT FUNCTION ===
   Calls all interactive feature functions after DOM loads
*/
function initPortfolioFeatures() {
  highlightNavLinkOnScroll();
  backToTopButton();
  enlargeProjectImages();
  updateFooterYear();
  carouselScrollButtons();
  validateContactForm();
  toggleLightDarkMode();
  projectCardHoverEffects();
  scrollRevealAnimations();
  filterProjects(); 
}