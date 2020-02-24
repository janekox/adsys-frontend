const ads = [
    {
        title: "Used bike",
        image: "https://0.allegroimg.com/s512/03d14e/0ca727674004a6b2a0bb00417620/BERNARD-L-Fixed-gear-single-speed-kolarzowka",
        condition: 'Brand new',
        price: 1900,
        email: 'fake@gmail.com',
        phone: "+48649832456",
    },
    {
        title: "Brand new iphone",
        image: "https://www.mediaexpert.pl/media/cache/gallery/images/13/1358878/Smartfon_APPLE_iPhone_8_Plus_64GB_Zloty-Front-Tyl.jpg",
        condition: 'Brand new',
        price: 4900,
        email: 'fake@gmail.com',
        phone: "+4815876456",
    },
    {
        title: "Laptop",
        image: "https://www.notebookcheck.net/uploads/tx_nbc2/0_1425_sz_1_i_222364_02.jpg",
        condition: 'Brand new',
        price: 3400,
        email: 'fake@gmail.com',
        phone: '+4412345678912',

    }











];

const MockApi = {
    getAds: () => {
        return new Promise(resolve => resolve(ads));
    },
    createAd: (data) => {
        ads.push(data);
        return Promise.resolve();
    }
};

export default MockApi;

