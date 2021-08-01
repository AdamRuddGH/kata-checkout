//inventory
const StoreItem = require("./storeItem.js").StoreItem;

exports.inventory = [
    //itemId, itemName, itemPrice
    new StoreItem("100", "Orange", 0.80),
    new StoreItem("101", "Apple",  0.50),
    new StoreItem("102", "Bread",  0.20),
    new StoreItem("103", "Kitkat",  1.95),
    new StoreItem("104", "Mars",  1.50),
    new StoreItem("105", "Chips",  3.20),
    new StoreItem("106", "CornChips",  3.40),
    new StoreItem("200", "Yoghurt",  5.00),
    new StoreItem("201", "Milk",  2.25),
    new StoreItem("202", "Custard",  1.40),
    new StoreItem("203", "Butter",  1.00),
    new StoreItem("301", "Soap",  1.20),
    new StoreItem("302", "Tissues",  4.50),
    new StoreItem("303", "Toilet Paper Jumbo",  15.00),
    new StoreItem("304", "Toilet Paper 6 pack",  7.00)
];
