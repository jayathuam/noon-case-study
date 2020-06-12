const { data } = require('./data');

/**
 * Get image information
 */
const getImageInfo = () => {
    return data.map(item => ({...item}));
}

module.exports = {
    getImageInfo
}
