    // Basic Leaflet.js Map Initialization (if using Leaflet)
    const map = L.map('map').setView([40.7128, -74.0060], 10); // Example coordinates: NYC
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);
