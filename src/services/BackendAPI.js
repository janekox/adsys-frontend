'use strict';

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
function httpPost(path, data) {
    const config = {method: 'POST', body: JSON.stringify(data)};
    const endpointURL = ADSYS_BACKEND_ADDRESS + path;
    return fetch(endpointURL, config).then(response => response.json())
}

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
    getAdByHash: (hash) => httpRequest(`/hash/${hash}`),
    removeByHash: (hash) => httpRequest(`/remove/${hash}`),
    getAds: (userInput) => {
        var path = '/ads';
        if (userInput) {
            path += `?title=${userInput}`;
        }
        return httpRequest(path);
    },
    createAd: (data) => httpPost('/ad', data)
}

export default BackendAPI;

