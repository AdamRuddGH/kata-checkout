


// exports.MultiProductDeals = 
class MultiProductDeals {
    constructor(itemId, qty, dealPrice) {
        this.itemId = itemId; // item class
        this.qty = qty; // eg. 3
        this.dealPrice = dealPrice; // eg. "1.20"
        this.dealMessage = `${qty} for \$${dealPrice}`; // eg. "3 for 1.20"
    }

};


// exports.deals = [
//     //itemId, qtl, itemPrice for amount
//     new MultiProductDeals("100", 2, 1.10),  //orange
//     new MultiProductDeals("101", 5,  2.00), //apple
//     new MultiProductDeals("102", 2, 0.30), //bread
//     new MultiProductDeals("103", 3,  1.95), //kitkat
//     new MultiProductDeals("104", 10,  9.50) //mars bar
//     // new MultiProductDeals("105", "Chips",  3.20),
//     // new MultiProductDeals("106", "CornChips",  3.40),
//     // new MultiProductDeals("200", "Yoghurt",  5.00),
//     // new MultiProductDeals("201", "Milk",  2.25),
//     // new MultiProductDeals("202", "Custard",  1.40),
//     // new MultiProductDeals("203", "Butter",  1.00),
//     // new MultiProductDeals("301", "Soap",  1.20),
//     // new MultiProductDeals("302", "Tissues",  4.25),
//     // new MultiProductDeals("303", "Toilet Paper Jumbo",  15.00),
//     // new MultiProductDeals("304", "Toilet Paper 6 pack",  7.00)
// ];

exports.MultiProductDeals = MultiProductDeals;