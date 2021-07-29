
const inventory =  require("./inventory.js").inventory;
const deals = require("./multiProductDeals.js").deals;
const CheckoutLogger = require("./logger.js").CheckoutLogger;

exports.Checkout = class Checkout {
    constructor() {
        this.items = [];
        this.ttlNoDiscount = 0.00;
        this.ttlDiscount = 0.00;
        this.ttlWithDiscount = 0.00;
        this.checkoutlogger = new CheckoutLogger()
    }


    addItem(itemId) {
        //add an item to the checkout list
        itemId = itemId.toString();
        if (this.getItem(itemId) != undefined ) {
            
            try {
                this.items.push(itemId);
            }
            catch (exception) {
                this.checkoutlogger.log(exception);
            }
            this.calculateDiscount();

        }
        else {
            this.checkoutlogger.log(`Error adding item: ${itemId} not valid`)
        }
    }

    getItem(searchItemId) {
        //returns item if item is in Inventory. Else return false
        for (let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            let currentInventoryItem = inventory[itemIndex];
            if (currentInventoryItem.itemId.toString() === searchItemId){
                return currentInventoryItem;
            }
          }
        return undefined;
    }

    calculateDiscount(self) {
        //calculate the discount of items based on the available Deals
        //check the multi product deal ids for matches to items in receipt
        //if there is a match, check for the deal specifics.
        //if the number of items // deal qty >=1 (floor division), 
        //then apply the difference in price to the discount
        // originalDiscount = this.ttlDiscount;

        // console.log("show counted items");
        const countedItems = this.countNumItems();
        // console.log(countedItems);

        let discountTtl = 0;

        for (const [key, value] of Object.entries(countedItems)) {
            console.log(`here's calculatediscount: ${key}: ${value}`);

            for (let i = 0; i < deals.length; i++) {
                const singleDeal = deals[i];
                
                if (singleDeal.itemId === key && value >= singleDeal.qty) {
                    multiplier =  Math.floor(value / singleDeal.qty); //get the floor of the division
                    const discount = this.getItem(singleDeal.itemId) * singleDeal.qty * multiplier * -1;
                    const dealPrice = multiplier * singleDeal.dealPrice;

                    discountTtl += (dealPrice + discount);
                }
                //get the item original price then subtract that 
            }
          }

        this.ttlDiscount = discountTtl;
        
    }

    countNumItems(self) {
        // calculates the number of items within the checkout items list
        // returns array of itemId,count
        // used primarily for the caclulateDiscount function
        // {itemId: qty, itemId: qty, //etc }
        
        let numItems = {};

        for (let i = 0; i < this.items.length; i++) {
            const itemsSingleItem = this.items[i];

            if (itemsSingleItem in numItems) {
                numItems[itemsSingleItem] += 1;
            }
            else {
                numItems[itemsSingleItem] = 1;
            }
                
          };
          return numItems;
    };
        
};