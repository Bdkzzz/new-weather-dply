const fetch = require('node-fetch');

exports.handler = async (event) => {
  const apiKey = "70a546ad786c480fa55121320242509"; // Replace this with your WeatherAPI key
  const query = event.queryStringParameters.q;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing query parameter 'q'" }),
    };
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
