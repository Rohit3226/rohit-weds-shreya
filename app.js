(function () {
  const eventMarkup = (event) => {
    const theme = eventThemes[event.category];
    return `
      <a class="event-card theme-${event.category}" href="event.html?event=${encodeURIComponent(event.id)}" aria-label="View details for ${event.title}">
        <div class="event-time"><time>${event.time}</time><span>${theme.symbol}</span></div>
        <div class="event-card-body">
          <p class="event-type">${theme.label}</p>
          <h3>${event.title}</h3>
          <p>${event.venue}</p>
        </div>
        <span class="event-arrow" aria-hidden="true">→</span>
      </a>`;
  };


  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  const passengerTableMarkup = (passengers) => {
    if (!Array.isArray(passengers) || passengers.length === 0) return "";

    return `
      <section class="passenger-section" aria-labelledby="passenger-heading">
        <h3 class="passenger-heading" id="passenger-heading">Passenger Details</h3>
        <div class="passenger-table-wrapper">
          <table class="passenger-table">
            <thead>
              <tr>
                <th scope="col">Train / Flight</th>
                <th scope="col">Departure Date</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Arrival Date</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Passenger Name</th>
                <th scope="col">Coach</th>
                <th scope="col">Seat No.</th>
                <th scope="col">Berth</th>
              </tr>
            </thead>
            <tbody>
              ${passengers.map((passenger) => `
                <tr>
                  <td>${escapeHTML(passenger.transport || "—")}</td>
                  <td>${escapeHTML(passenger.departureDate || "—")}</td>
                  <td>${escapeHTML(passenger.departureTime || "—")}</td>
                  <td>${escapeHTML(passenger.arrivalDate || "—")}</td>
                  <td>${escapeHTML(passenger.arrivalTime || "—")}</td>
                  <td>${escapeHTML(passenger.name)}</td>
                  <td>${escapeHTML(passenger.coach || "—")}</td>
                  <td>${escapeHTML(passenger.seat || "—")}</td>
                  <td>${escapeHTML(passenger.berth || "—")}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  };

  const roomTableMarkup = (roomAllocations) => {
    if (!Array.isArray(roomAllocations) || roomAllocations.length === 0) return "";

    return `
      <section class="room-section" aria-labelledby="room-heading">
        <h3 class="room-heading" id="room-heading">Room Allocation &amp; Check-in Details</h3>
        <p class="room-note">Check-in and check-out timings are provisional and can be updated once the original timings are confirmed.</p>
        <div class="room-table-wrapper">
          <table class="room-table">
            <thead>
              <tr>
                <th scope="col">Floor</th>
                <th scope="col">Room No.</th>
                <th scope="col">Guest</th>
                <th scope="col">Check-in Date &amp; Time</th>
                <th scope="col">Check-out Date &amp; Time</th>
              </tr>
            </thead>
            <tbody>
              ${roomAllocations.map((room) => `
                <tr>
                  <td>${escapeHTML(room.floor || "—")}</td>
                  <td>${escapeHTML(room.roomNo || "—")}</td>
                  <td>${escapeHTML(room.guest || "—")}</td>
                  <td>${escapeHTML(room.checkInDate || "—")}${room.checkInTime ? ` · ${escapeHTML(room.checkInTime)}` : ""}</td>
                  <td>${escapeHTML(room.checkOutDate || "—")}${room.checkOutTime ? ` · ${escapeHTML(room.checkOutTime)}` : ""}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  };

    const journeyList = document.querySelector("#journey-list");
  if (journeyList) {
    const days = [...new Set(weddingEvents.map((event) => event.day))];
    journeyList.innerHTML = days.map((day) => {
      const events = weddingEvents.filter((event) => event.day === day);
      return `
        <div class="day-schedule">
          <div class="day-marker"><strong>${day}</strong><span>2026</span></div>
          <div class="events-grid">${events.map(eventMarkup).join("")}</div>
        </div>`;
    }).join("");
  }

  const countdown = document.querySelector("[data-countdown]");
  if (countdown) {
    const target = new Date("2026-12-30T07:55:00+05:30").getTime();
    const fields = {
      days: countdown.querySelector("[data-days]"),
      hours: countdown.querySelector("[data-hours]"),
      minutes: countdown.querySelector("[data-minutes]"),
      seconds: countdown.querySelector("[data-seconds]")
    };
    const updateCountdown = () => {
      const distance = target - Date.now();
      if (distance <= 0) {
        countdown.innerHTML = '<p class="countdown-complete">The auspicious hour is here. <br />Celebrate with us!</p>';
        return;
      }
      const seconds = Math.floor(distance / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      fields.days.textContent = String(days).padStart(3, "0");
      fields.hours.textContent = String(hours).padStart(2, "0");
      fields.minutes.textContent = String(minutes).padStart(2, "0");
      fields.seconds.textContent = String(seconds % 60).padStart(2, "0");
    };
    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  const eventContent = document.querySelector("#event-content");
  if (eventContent) {
    const id = new URLSearchParams(window.location.search).get("event");
    const event = weddingEvents.find((item) => item.id === id);
    if (!event) {
      eventContent.innerHTML = `
        <section class="not-found section">
          <p class="eyebrow">Celebration details</p>
          <h1>That event could not be found.</h1>
          <p>Please return to the complete celebration plan and select an event.</p>
          <a class="button button-dark" href="index.html#journey">View all celebrations</a>
        </section>`;
    } else {
      const theme = eventThemes[event.category];
      document.title = `${event.title} | Rohit & Shreya`;
      const map = event.map
        ? `<a class="button button-outline" href="${event.map}" target="_blank" rel="noopener">${event.mapLabel} <span aria-hidden="true">↗</span></a>`
        : `<span class="status-pill large">Exact venue map to be announced</span>`;
      eventContent.innerHTML = `
        <section class="event-hero theme-${event.category}">
          <div class="event-hero-art" aria-hidden="true">${theme.symbol}</div>
          <div class="event-hero-copy">
            <p class="eyebrow">${event.date}</p>
            <p class="event-theme-label">${theme.label}</p>
            <h1>${event.title}</h1>
            <p class="event-summary">${event.summary}</p>
          </div>
          <div class="event-stamp"><strong>${event.time}</strong><span>${event.venue}</span></div>
        </section>
        <section class="event-details section">
          <div class="detail-main">
            <p class="eyebrow">At a glance</p>
            <h2>Everything you need for this moment</h2>
            ${event.passengers && event.passengers.length ? "" : `<ul class="detail-list">${event.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`}
            ${passengerTableMarkup(event.passengers)}
            ${roomTableMarkup(event.roomAllocations)}
            <div class="detail-actions">${map}</div>
          </div>
          <aside class="help-panel">
            <p class="eyebrow">Need a hand?</p>
            <h3>We are only a call away.</h3>
            <p>For travel questions or event-day assistance, contact Raghunath.</p>
            <a href="tel:+919866581502">Call Raghunath · +91 98665 81502</a>
          </aside>
        </section>`;
    }
  }
})();
