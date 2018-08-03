const express = require('express');
const { getVenues }  = require('./venueApi');
const { getRandomVenue } = require('./venuePicker');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { });
});

router.get('/search', async(req, res) => {
    const query = req.query.query;
    const venuesResponse = await getVenues(query);
    const chosenVenue = getRandomVenue(venuesResponse);
    
    res.render('index', { 
        query,
        venueName: chosenVenue.name,
        venueAddress: chosenVenue.address
    });
});

module.exports = router;