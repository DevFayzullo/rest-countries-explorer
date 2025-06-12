const cardsEl = document.querySelector(".cards");

export const createCountries = (countries) => {
  cardsEl.innerHTML = ""; // Clear previous content
  countries.forEach((country) => {
    const commonName = country.name?.common || "Unknown";
    const population = country.population?.toLocaleString() || "N/A";
    const region = country.region || "N/A";
    const capital = country.capital?.[0] || "No capital";
    const flags = country.flags?.svg || country.flags?.png || "";

    // li
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
      <a href="./about.html?country=/name/${commonName}">
        <img
          src="${flags}"
          alt="${commonName} flag"
          width="267"
          height="160" />
        <div class="cards__item-inner">
          <h3 class="cards__title">${commonName}</h3>
          <p class="population">Population: <span>${population}</span></p>
          <p class="region">Region: <span>${region}</span></p>
          <p class="capital">Capital: <span>${capital}</span></p>
        </div>
      </a>`;

    // ul
    cardsEl.appendChild(li);
  });
};

// ABOUT UI
const countryInfoEl = document.querySelector(".country-info");

export const createCountryInfo = (country) => {
  const {
    population,
    borders,
    capital,
    flags,
    name,
    region,
    tld,
    currencies,
    languages,
    subregion,
  } = country;

  const nativeName = name.nativeName
    ? Object.values(name.nativeName)[0]?.official
    : "Unknown";
  const currency = currencies ? Object.values(currencies)[0]?.name : "Unknown";
  const language = languages ? Object.values(languages).join(", ") : "Unknown";

  const borderCountries = borders
    ? borders
        .map(
          (border) =>
            `<a href="./about.html?country=/alpha/${border}">${border}</a>`
        )
        .join(" ")
    : "No border countries";

  countryInfoEl.innerHTML = `
    <img
      class="country-info__img"
      src="${flags.svg || flags.png}"
      alt="${name.common} flag"
      width="560"
      height="400" />
    <div class="country-info__content">
      <h2>${name.common}</h2>
      <ul class="country-info__list">
        <li class="country-info__item">
          <p class="name">
            Native Name: <span>${nativeName}</span>
          </p>
          <p class="population">
            Population: <span>${population.toLocaleString()}</span>
          </p>
          <p class="region">
            Region: <span>${region}</span>
          </p>
          <p class="sub-region">
            Sub Region: <span>${subregion || "N/A"}</span>
          </p>
          <p class="capital">
            Capital: <span>${capital?.[0] || "No capital"}</span>
          </p>
        </li>
        <li class="country-info__item">
          <p class="name">
            Top Level Domain: <span>${tld?.[0] || "N/A"}</span>
          </p>
          <p class="population">
            Currencies: <span>${currency}</span>
          </p>
          <p class="region">
            Languages: <span>${language}</span>
          </p>
        </li>
      </ul>

      <div class="country-info__borders">
        <h3>Border Countries:</h3>
        ${borderCountries}
      </div>
    </div>`;
};
