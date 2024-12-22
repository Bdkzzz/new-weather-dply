const axios = require('axios'); // Import axios

exports.handler = async (event) => {
  const apiKey = "70a546ad786c480fa55121320242509"; // Replace with your actual API key
  const query = event.queryStringParameters.q;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing query parameter 'q'" }),
    };
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;

  try {
    const response = await axios.get(url); // Use axios instead of fetch
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
