const ADSYS_BACKEND_ADDRESS = 'http://localhost:4000';

function responseHandler(res) {
    // read about parser, parsing, parse
    // .res function parse incoming response
    return res.json();
}

function errorHandler(err) {
    console.error('NETWORK ERROR');
    console.error(err);
    throw new Error(err);
}

/**
 * Proxy function for sending HTTP requests with javascript fetch
 *
 * @param String path
 * @param Object config
 * @returns {Promise<Response>}
 */
function httpRequest(path, config = {method: 'GET'}) {
    const endpointURL = ADSYS_BACKEND_ADDRESS + path;

    if (config.data) {
        config.body = JSON.stringify(config.data);
        delete config.data;
    }

    return fetch(endpointURL, config)
        .then(responseHandler)
        .catch(errorHandler);
}

const BackendAPI = {
    getAd: (id) => httpRequest(`/ad/${id}`),
    getAds: () => httpRequest('/ads'),
    createAd: () => false
};

export default BackendAPI;

