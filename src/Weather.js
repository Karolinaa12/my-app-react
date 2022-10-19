import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in NY is ${response.data.main.temp}`);
  }
  let apiKey = "ecc0d5f5b2ad413f8733e1ac7c345029";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
