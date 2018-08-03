exports.getRandomVenue = function(venues) {
    const numberOfVenues = venues.length;
    const randomIndex = Math.floor(Math.random() * numberOfVenues);

    return getBasicInfo(venues[randomIndex]);
};

function getBasicInfo(venue) {
    const basicInfo = {
        name: venue.name,
        address: venue.location.address
    };

    return basicInfo;
};