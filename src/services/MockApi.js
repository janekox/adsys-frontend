const ads = [
    {
        title: "Used bike",
        phone: "+48649832456",
        image: "https://0.allegroimg.com/s512/03d14e/0ca727674004a6b2a0bb00417620/BERNARD-L-Fixed-gear-single-speed-kolarzowka",
        price: 1900,
        description: "Donec volutpat ullamcorper dui quis egestas. Ut sed placerat eros."
    },
    {
        title: "Brand new iphone",
        phone: "+4815876456",
        image: "https://www.mediaexpert.pl/media/cache/gallery/images/13/1358878/Smartfon_APPLE_iPhone_8_Plus_64GB_Zloty-Front-Tyl.jpg",
        price: 4900,
        description: "Ut sed placerat eros."
    },
    {
        title: "Laptop",
        phone: "+486843243",
        image: "https://www.notebookcheck.net/uploads/tx_nbc2/0_1425_sz_1_i_222364_02.jpg",
        price: 3400,
        description: "Ut convallis purus eu purus euismod."
    }
];

const MockApi = {
    getAds: () => {
        // TODO replace with HTTP call to backend
        return new Promise(resolve => resolve(ads));
    },

    // TODO add method for creating advertisement
};

export default MockApi;

