
const cities = [
  { name: "LAS VEGAS",     era: "circus",   date: "MAY 02, 2027", venue: "Zappos Theater" },
  { name: "CHICAGO",       era: "baby",     date: "MAY 06, 2027", venue: "United Center" },
  { name: "NEW YORK",      era: "toxic",    date: "MAY 10, 2027", venue: "Madison Square Garden" },
  { name: "BOSTON",        era: "oops",     date: "MAY 14, 2027", venue: "TD Garden" },
  { name: "SAN FRANCISCO", era: "blackout", date: "MAY 18, 2027", venue: "Chase Center" },
  { name: "LOS ANGELES",   era: "gimme",    date: "MAY 22, 2027", venue: "Crypto.com Arena" }
];

let currentPage = 0;
const PAGE_SIZE = 2; 

const pairs = [];
for (let i = 0; i < cities.length; i += PAGE_SIZE) pairs.push(cities.slice(i, i + PAGE_SIZE));
document.getElementById("locations").innerHTML = pairs.map((pair, p) => `
  <div class="pair">${pair.map(c => `
    <button class="city" onclick="openPage(${p})">
      ${c.name}!
      <span class="info">${c.date} / ${c.venue}</span>
    </button>`).join("")}
  </div>
`).join("");

function openPage(n) {
  currentPage = n;
  document.getElementById("cover").hidden = true;
  document.getElementById("magazine").hidden = false;
  showPage();
}

function showPage() {
  const stops = cities.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);
  document.getElementById("spread").innerHTML = stops.map(c => `
    <div class="stop" data-era="${c.era}">
      <h2>${c.name}!</h2>
      <p class="date">${c.date}</p>
      <p class="venue">${c.venue}</p>
    </div>
  `).join("");
}

function nextPage() {
  if ((currentPage + 1) * PAGE_SIZE < cities.length) { currentPage++; showPage(); }
}
function previousPage() {
  if (currentPage > 0) { currentPage--; showPage(); }
}
function backToCover() {
  document.getElementById("magazine").hidden = true;
  document.getElementById("cover").hidden = false;
}
