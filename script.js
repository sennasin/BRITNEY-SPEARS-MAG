
let currentPage = 0;

const tourStops = [
  [
    { city: "CHICAGO", date: "TOUR DATE", venue: "VENUE" },
    { city: "BOSTON", date: "TOUR DATE", venue: "VENUE" }
  ],
  [
    { city: "NEW YORK", date: "TOUR DATE", venue: "VENUE" },
    { city: "LAS VEGAS", date: "TOUR DATE", venue: "VENUE" }
  ],
  [
    { city: "SAN FRANCISCO", date: "TOUR DATE", venue: "VENUE" },
    { city: "LOS ANGELES", date: "TOUR DATE", venue: "VENUE" }
  ]
];

function openPage(pageNumber) {
  currentPage = pageNumber;

  document.getElementById("cover").hidden = true;
  document.getElementById("magazine").hidden = false;

  showPage();
}

function showPage() {
  const spread = document.getElementById("spread");
  const stops = tourStops[currentPage];

  spread.innerHTML = stops.map(stop => `
    <div class="stop">
      <h2 class="city">${stop.city}!</h2>
      <p class="date">${stop.date}</p>
      <p class="venue">${stop.venue}</p>
    </div>
  `).join("");
}

function nextPage() {
  if (currentPage < tourStops.length - 1) {
    currentPage++;
    showPage();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
}

function backToCover() {
  document.getElementById("magazine").hidden = true;
  document.getElementById("cover").hidden = false;
}
