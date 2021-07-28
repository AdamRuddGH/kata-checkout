


exports.MultiProductDeals = class MultiProductDeals {
    constructor(itemId, qty, dealPrice, dealMessage) {
        this.itemId = itemId; // item class
        this.qty = qty; // eg. 3
        this.dealPrice = dealPrice; // eg. "1.20"
        this.dealMessage = dealMessage; // eg. "3 apples for 1.20"
    }

}
