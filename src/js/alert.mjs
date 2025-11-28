// Alert.js

export default class Alert {
  constructor(jsonPath = './alerts.json') {
    this.jsonPath = jsonPath;
  }

  async loadAlerts() {
    try {
      const response = await fetch(this.jsonPath);
      const alerts = await response.json();

      if (Array.isArray(alerts) && alerts.length > 0) {
        this.renderAlerts(alerts);
      }

    } catch (error) {
      console.error("Error loading alerts:", error);
    }
  }

  renderAlerts(alerts) {
    // Create the <section class="alert-list">
    const section = document.createElement('section');
    section.classList.add('alert-list');

    // Loop through alerts and create <p> items
    alerts.forEach(alert => {
      const p = document.createElement('p');
      p.textContent = alert.message;

      if (alert.background) p.style.background = alert.background;
      if (alert.color) p.style.color = alert.color;

      section.appendChild(p);
    });

    // PREPEND to <main> on the index page
    const mainElement = document.querySelector('main');

    if (mainElement) {
      mainElement.prepend(section);  // Required final step
    } else {
      console.warn('<main> element not found — alert section added to body instead.');
      document.body.prepend(section);
    }
  }
}
