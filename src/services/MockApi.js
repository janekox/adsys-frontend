const ADSYS_BACKEND_ADDRESS = 'http://localhost:4000';
const ads = [
    {
        _id: "cdaed56d-8712-414d-b346-01905d0026f1",
        title: "Used bike",
        image: "https://0.allegroimg.com/s512/03d14e/0ca727674004a6b2a0bb00417620/BERNARD-L-Fixed-gear-single-speed-kolarzowka",
        condition: 'Brand new',
        price: 1900,
        description: 'xxxx xxxxxxxx xxxxxx xxxxxxx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxx xxxx xxxxxxxxxx xxxxx xxxxxxx xxxxxxxxxxxxx xxxxxxxxxx xx xxxxxxxxx xxx x xxxxxxxxx x xxxxxxx xxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxxx xxxxx xxxx xxxx xxx',
        email: 'fake@gmail.com',
        phone: "+48649832456"
    },
    {
        _id: "cdaed56d-8712-414d-b346-01905d0026f2",
        title: "Brand new iphone",
        image: "https://www.mediaexpert.pl/media/cache/gallery/images/13/1358878/Smartfon_APPLE_iPhone_8_Plus_64GB_Zloty-Front-Tyl.jpg",
        condition: 'Brand new',
        price: 4900,
        description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        email: 'fake@gmail.com',
        phone: "+4815876456"
    },
    {
        _id: "cdaed56d-8712-414d-b346-01905d0026f3",
        title: "Laptop",
        image: "https://www.notebookcheck.net/uploads/tx_nbc2/0_1425_sz_1_i_222364_02.jpg",
        condition: 'Brand new',
        price: 3400,
        description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        email: 'fake@gmail.com',
        phone: '+4412345678912'
    }
];

function responseHandler(res) {
    console.log(res);
    return res;
}

function errorHandler(err) {
    console.error('NETWORK ERROR');
    console.error(err);
}

function httpRequest(endpoint, config = {method: 'GET'}) {
    const url = ADSYS_BACKEND_ADDRESS + endpoint;

    if (config.data) {
        config.body = JSON.stringify(config.data);
        delete config.data;
    }

    return fetch(url, config).then(responseHandler).catch(errorHandler);
}

const MockApi = {
    getAd(id) {
        return new Promise((resolve) => {
            const foundAd = ads.find(ad => ad._id === id);
            resolve(foundAd);
        });
    },
    getAds: () => {
        // httpRequest('/ad').then((data) => {
        //     console.log(data);
        // });

        return new Promise(resolve => resolve(ads));
    },
    createAd: (data) => {
        ads.push(data);
        return Promise.resolve();
    }
};

export default MockApi;

