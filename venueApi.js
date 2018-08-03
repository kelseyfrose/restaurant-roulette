const axios = require('axios');

//FILL IN CREDENTIALS
const CLIENT_SECRET = '';
const CLIENT_ID = '';

exports.getVenues = async function(query) {
    try {
        const response = await axios.get('https://api.foursquare.com/v2/venues/search', {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                ll: '40.7243,-74.0018',
                query: query,
                v: '20180323',
                limit: 10
            }
        });
        return response.data.response.venues;
    } catch (error) {
        console.log(error);
    }
};