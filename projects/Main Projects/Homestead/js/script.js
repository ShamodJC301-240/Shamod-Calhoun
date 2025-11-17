// Collapsible section functionality
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(section => {
      section.addEventListener('click', () => {
        section.classList.toggle('active');
        const content = section.querySelector('p');
        if (section.classList.contains('active')) {
          content.style.display = 'block';
          section.querySelector('span').textContent = '▲';
        } else {
          content.style.display = 'none';
          section.querySelector('span').textContent = '▼';
        }
      });
      // Start collapsed
      section.querySelector('p').style.display = 'none';
    });