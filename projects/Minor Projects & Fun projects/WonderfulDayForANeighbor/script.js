class NeighborhoodApp {
  constructor() {
    this.announcements = this.loadData('announcements') || [];
    this.marketplaceItems = this.loadData('marketplaceItems') || [];
    this.giveaways = this.loadData('giveaways') || [];
    this.events = this.loadData('events') || [];
    this.foodDrives = this.loadData('foodDrives') || [];
    this.discussions = this.loadData('discussions') || [];
    
    this.init();
  }

  init() {
    this.renderAll();
    this.attachEventListeners();
  }

  loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  renderAll() {
    this.renderAnnouncements();
    this.renderMarketplace();
    this.renderGiveaways();
    this.renderEvents();
    this.renderFoodDrives();
    this.renderDiscussions();
  }

  renderAnnouncements() {
    const container = document.getElementById('announcement-list');
    
    if (this.announcements.length === 0) {
      container.innerHTML = '<div class="empty-state">No news yet. Share an update!</div>';
      return;
    }

    container.innerHTML = this.announcements.map((item, index) => `
      <div class="item">
        <h3>${this.escapeHtml(item.title)}</h3>
        <div class="meta">Posted on ${new Date(item.date).toLocaleDateString()}</div>
        <div class="content">${this.escapeHtml(item.message)}</div>
        <div class="actions">
          <button class="delete-btn" onclick="app.deleteAnnouncement(${index})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderMarketplace() {
    const container = document.getElementById('marketplace-list');
    
    if (this.marketplaceItems.length === 0) {
      container.innerHTML = '<div class="empty-state">No items for sale yet. List something!</div>';
      return;
    }

    container.innerHTML = this.marketplaceItems.map((item, index) => `
      <div class="item">
        <h3>${this.escapeHtml(item.name)}</h3>
        <div class="price">$${parseFloat(item.price).toFixed(2)}</div>
        <div class="content">${this.escapeHtml(item.description)}</div>
        <div class="contact-info">
          <strong>Seller:</strong> ${this.escapeHtml(item.seller)}<br>
          <strong>Contact:</strong> ${this.escapeHtml(item.contact)}
        </div>
        <div class="meta">Listed on ${new Date(item.date).toLocaleDateString()}</div>
        <div class="actions">
          <button class="contact-btn" onclick="app.showContact(${index}, 'marketplace')">Contact Seller</button>
          <button class="delete-btn" onclick="app.deleteMarketplaceItem(${index})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderGiveaways() {
    const container = document.getElementById('giveaway-list');
    
    if (this.giveaways.length === 0) {
      container.innerHTML = '<div class="empty-state">No giveaways available. Share items you no longer need!</div>';
      return;
    }

    container.innerHTML = this.giveaways.map((item, index) => `
      <div class="item">
        <h3>${this.escapeHtml(item.name)} 🎁</h3>
        <div class="content">${this.escapeHtml(item.description)}</div>
        <div class="contact-info">
          <strong>From:</strong> ${this.escapeHtml(item.giver)}<br>
          <strong>Contact:</strong> ${this.escapeHtml(item.contact)}
        </div>
        <div class="meta">Posted on ${new Date(item.date).toLocaleDateString()}</div>
        <div class="actions">
          <button class="volunteer-btn" onclick="app.claimGiveaway(${index})">I'm Interested</button>
          <button class="delete-btn" onclick="app.deleteGiveaway(${index})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderEvents() {
    const container = document.getElementById('event-list');
    
    if (this.events.length === 0) {
      container.innerHTML = '<div class="empty-state">No upcoming events. Create one!</div>';
      return;
    }

    container.innerHTML = this.events.map((item, index) => `
      <div class="item">
        <h3>${this.escapeHtml(item.name)}</h3>
        <div class="meta">
          📅 ${new Date(item.date).toLocaleDateString()}
          ${item.time ? '⏰ ' + item.time : ''}
        </div>
        <div class="content">${this.escapeHtml(item.details)}</div>
        <div class="actions">
          <button class="delete-btn" onclick="app.deleteEvent(${index})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderFoodDrives() {
    const container = document.getElementById('food-drive-list');
    
    if (this.foodDrives.length === 0) {
      container.innerHTML = '<div class="empty-state">No food drives scheduled.</div>';
      return;
    }

    container.innerHTML = this.foodDrives.map((item, index) => `
      <div class="item">
        <h3>${this.escapeHtml(item.name)}</h3>
        <div class="meta">📅 ${new Date(item.date).toLocaleDateString()}</div>
        <div class="content">${this.escapeHtml(item.details)}</div>
        <div class="actions">
          <button class="volunteer-btn" onclick="app.volunteerForFoodDrive(${index})">Volunteer</button>
          <button class="delete-btn" onclick="app.deleteFoodDrive(${index})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderDiscussions() {
    const container = document.getElementById('discussion-list');
    
    if (this.discussions.length === 0) {
      container.innerHTML = '<div class="empty-state">No discussions yet. Start a conversation!</div>';
      return;
    }

    container.innerHTML = this.discussions.map((item, index) => `
      <div class="item">
        <h3>${this.escapeHtml(item.title)}</h3>
        <div class="meta">Started on ${new Date(item.date).toLocaleDateString()}</div>
        <div class="content">${this.escapeHtml(item.content)}</div>
        <div class="actions">
          <button class="delete-btn" onclick="app.deleteDiscussion(${index})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  attachEventListeners() {
    document.getElementById('add-announcement-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      this.addAnnouncement({
        title: form.elements[0].value,
        message: form.elements[1].value,
        date: new Date().toISOString()
      });
      form.reset();
    });

    document.getElementById('add-marketplace-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      this.addMarketplaceItem({
        name: form.elements[0].value,
        price: form.elements[1].value,
        description: form.elements[2].value,
        seller: form.elements[3].value,
        contact: form.elements[4].value,
        date: new Date().toISOString()
      });
      form.reset();
    });

    document.getElementById('add-giveaway-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      this.addGiveaway({
        name: form.elements[0].value,
        description: form.elements[1].value,
        giver: form.elements[2].value,
        contact: form.elements[3].value,
        date: new Date().toISOString()
      });
      form.reset();
    });

    document.getElementById('add-event-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      this.addEvent({
        name: form.elements[0].value,
        date: form.elements[1].value,
        time: form.elements[2].value,
        details: form.elements[3].value
      });
      form.reset();
    });

    document.getElementById('add-food-drive-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      this.addFoodDrive({
        name: form.elements[0].value,
        date: form.elements[1].value,
        details: form.elements[2].value
      });
      form.reset();
    });

    document.getElementById('add-discussion-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      this.addDiscussion({
        title: form.elements[0].value,
        content: form.elements[1].value,
        date: new Date().toISOString()
      });
      form.reset();
    });
  }

  addAnnouncement(announcement) {
    this.announcements.unshift(announcement);
    this.saveData('announcements', this.announcements);
    this.renderAnnouncements();
  }

  deleteAnnouncement(index) {
    if (confirm('Are you sure you want to delete this announcement?')) {
      this.announcements.splice(index, 1);
      this.saveData('announcements', this.announcements);
      this.renderAnnouncements();
    }
  }

  addMarketplaceItem(item) {
    this.marketplaceItems.unshift(item);
    this.saveData('marketplaceItems', this.marketplaceItems);
    this.renderMarketplace();
  }

  deleteMarketplaceItem(index) {
    if (confirm('Are you sure you want to delete this listing?')) {
      this.marketplaceItems.splice(index, 1);
      this.saveData('marketplaceItems', this.marketplaceItems);
      this.renderMarketplace();
    }
  }

  showContact(index, type) {
    const item = type === 'marketplace' ? this.marketplaceItems[index] : this.giveaways[index];
    alert(`Contact: ${item.contact}\n\nReach out to ${item.seller || item.giver} to arrange pickup or delivery.`);
  }

  addGiveaway(giveaway) {
    this.giveaways.unshift(giveaway);
    this.saveData('giveaways', this.giveaways);
    this.renderGiveaways();
  }

  deleteGiveaway(index) {
    if (confirm('Are you sure you want to delete this giveaway?')) {
      this.giveaways.splice(index, 1);
      this.saveData('giveaways', this.giveaways);
      this.renderGiveaways();
    }
  }

  claimGiveaway(index) {
    const item = this.giveaways[index];
    alert(`Great! Contact ${item.giver} at:\n${item.contact}\n\nto arrange pickup of this item.`);
  }

  addEvent(event) {
    this.events.unshift(event);
    this.saveData('events', this.events);
    this.renderEvents();
  }

  deleteEvent(index) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.events.splice(index, 1);
      this.saveData('events', this.events);
      this.renderEvents();
    }
  }

  addFoodDrive(foodDrive) {
    this.foodDrives.unshift(foodDrive);
    this.saveData('foodDrives', this.foodDrives);
    this.renderFoodDrives();
  }

  deleteFoodDrive(index) {
    if (confirm('Are you sure you want to delete this food drive?')) {
      this.foodDrives.splice(index, 1);
      this.saveData('foodDrives', this.foodDrives);
      this.renderFoodDrives();
    }
  }

  volunteerForFoodDrive(index) {
    alert('Thank you for volunteering! The organizer will be notified.');
  }

  addDiscussion(discussion) {
    this.discussions.unshift(discussion);
    this.saveData('discussions', this.discussions);
    this.renderDiscussions();
  }

  deleteDiscussion(index) {
    if (confirm('Are you sure you want to delete this discussion?')) {
      this.discussions.splice(index, 1);
      this.saveData('discussions', this.discussions);
      this.renderDiscussions();
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new NeighborhoodApp();
});
