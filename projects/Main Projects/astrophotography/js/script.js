document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery figure');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    img.addEventListener('click', () => {
      const lightbox = createLightbox(img.src, img.alt);
      document.body.appendChild(lightbox);
    });
  });
  
  function createLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="${src}" alt="${alt}" />
      </div>
    `;
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.remove();
      }
    });
    
    return lightbox;
  }
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;
      
      alert(`Thank you, ${name}! Your message has been received. We'll respond to ${email} soon.`);
      
      contactForm.reset();
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

const facts = [
  "If you could travel at the speed of light, it would still take over 2 million years to reach the Andromeda Galaxy.",
  "There are more stars in the universe than grains of sand on all of Earth’s beaches.",
  "Neutron stars can spin at up to 600 rotations per second.",
  "The footprints on the Moon will likely last for millions of years — there’s no wind or water to erode them.",
  "Some stars are so dense that a teaspoon of their material would weigh billions of tons.",
  "A day on Venus is longer than a year on Venus.",
  "There’s a giant cloud of alcohol in space — enough for 400 trillion pints of beer!",
  "Time moves slower in strong gravity — so technically, astronauts age slightly slower than people on Earth.",
  "Saturn could float in water because it’s mostly made of gas and has very low density.",
  "The observable universe is about 93 billion light-years across — and it's still expanding.",
  "A day on Mercury lasts about 59 Earth days, making it one of the slowest spinning planets.",
  "Black holes warp time and space so severely that not even light can escape them.",
"The largest volcano in the solar system is Olympus Mons on Mars — it’s nearly three times the height of Mount Everest.",
"There’s a diamond planet called 55 Cancri e, which may be largely made of carbon.",
"The light from the nearest star system, Alpha Centauri, takes over 4 years to reach us.",
"Some exoplanets orbit their stars so closely that a year lasts only a few hours.",
"A neutron star’s magnetic field can be over a trillion times stronger than Earth’s.",
"The Milky Way is on a collision course with the Andromeda Galaxy, expected in about 4 billion years.",
"A spoonful of a neutron star would weigh about 6 billion tons on Earth.",
"Jupiter has a persistent storm called the Great Red Spot, which has been raging for at least 350 years.",
"The Hubble Space Telescope has observed galaxies that formed just 400 million years after the Big Bang.",
"The coldest place in the universe is the Boomerang Nebula, with temperatures reaching -458°F (-272°C).",
"Pluto’s heart-shaped glacier is larger than Texas and Oklahoma combined.",
"There’s a rogue planet drifting through space with no star to orbit.",
"Some stars collapse into black holes so dense that their gravity bends light around them.",
"Our Sun makes a full orbit around the Milky Way approximately every 225 million years.",
"The James Webb Space Telescope can observe galaxies as they existed over 13 billion years ago.",
"If you fell into a black hole, time would appear to stop relative to someone far away.",
"There are over 100 billion galaxies in the observable universe, each with billions of stars.",
"Interstellar space is not empty — it’s filled with gas, dust, and cosmic rays traveling at near light speed.",
];

let currentFact = 0;
const factElement = document.getElementById("space-fact");

function showNextFact() {
  factElement.classList.add("fade-out");
  setTimeout(() => {
    currentFact = (currentFact + 1) % facts.length;
    factElement.textContent = facts[currentFact];
    factElement.classList.remove("fade-out");
  }, 1000);
}

// Initial fact
factElement.textContent = facts[0];
setInterval(showNextFact, 8000); // Change fact every 8 seconds
