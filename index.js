const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8000;

// FILL IN YOUR CREDENTIALS
const CLIENT_SECRET = '';
const CLIENT_ID = '';

app.get('/', async(req, res) => {
    const venues = await getCoffeeShops();
    const chosenVenue = getRandomVenue(venues);
    res.send(chosenVenue);
});

app.listen(PORT);

async function getCoffeeShops() {
    const response = await axios.get('https://api.foursquare.com/v2/venues/search', {
        params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            ll: '40.7243,-74.0018',
            query: 'coffee',
            v: '20180323',
            limit: 100
        }
    });
    return response.data.response.venues;
}

function getRandomVenue(venues) {
    const numberOfVenues = venues.length;
    const randomIndex = Math.floor(Math.random() * numberOfVenues);

    return getBasicInfo(venues[randomIndex]);
}

function getBasicInfo(venue) {
    const basicInfo = {
        name: venue.name,
        address: venue.location.address
    };

    return basicInfo;
}