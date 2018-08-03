const express = require('express');
const { getCoffeeShops }  = require('./venueApi');
const { getRandomVenue } = require('./venuePicker');

const router = express.Router();

router.get('/:query', async(req, res) => {
    const query = req.params.query;

    const venuesResponse = await getCoffeeShops(query);
    const chosenVenue = getRandomVenue(venuesResponse);
    res.send(chosenVenue);
});

module.exports = router;