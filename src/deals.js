//listed deals
const MultiProductDeals = require('./multiProductDeals.js').MultiProductDeals;

exports.deals = [
    new MultiProductDeals("100", 2, 1.10),  //orange
    new MultiProductDeals("101", 2,  0.80), //apple
    new MultiProductDeals("102", 2, 0.30), //bread
    new MultiProductDeals("103", 2,  2.50), //kitkat
    new MultiProductDeals("104", 10,  9.50), //mars bar
    new MultiProductDeals("302", 2,  4.50) //tissues 2 for 1
];
