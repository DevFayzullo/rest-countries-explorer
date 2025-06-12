import "../css/main.css";
import "./mode";

import request from "./request";
import { createCountryInfo } from "./updateUI";

const querySting = window.location.search;
const urlParams = new URLSearchParams(querySting);
let country = urlParams.get("country");

if (!country) {
  alert("No country parameter found in URL.");
} else {
  // Clean up `/` at the start
  if (country.startsWith("/")) {
    country = country.slice(1);
  }

  const countryAPI = `https://restcountries.com/v3.1/${country}`;

  request(countryAPI)
    .then((data) => {
      if (!data || !data.length) {
        alert("Country not found.");
        return;
      }
      createCountryInfo(data[0]);
    })
    .catch((err) => {
      alert("Xatolik: " + err.message);
    });
}
