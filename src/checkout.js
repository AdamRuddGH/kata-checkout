
const inventory =  require("./inventory.js").inventory;
const deals = require("./deals.js").deals;
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
        //returns item if item is in Inventory. Else return undefined
        for (let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            let currentInventoryItem = inventory[itemIndex];
            if (currentInventoryItem.itemId.toString() === searchItemId){
                return currentInventoryItem;
            }
          }
        return undefined;
    }

    calculateTtl(self) {
        //calculate the total of all items in the checkout, without factoring in any discounts
        const priceTtl = 0;

        this.ttlNoDiscount = priceTtl;
    }

    calculateDiscount(self) {
        //calculate the discount of items based on the available Deals
        //check the multi product deal ids for matches to items in receipt
        //if there is a match, check for the deal specifics.
        //if the number of items // deal qty >=1 (floor division), 
        //then apply the difference in price to the discount
        // originalDiscount = this.ttlDiscount;


        const countedItems = this.countNumItems();
        let discountTtl = 0;

        for (const [key, value] of Object.entries(countedItems)) {


            for (let i = 0; i < deals.length; i++) {
                const singleDeal = deals[i];

                if (singleDeal.itemId === key && value >= singleDeal.qty) {
                    
                    const multiplier =  Math.floor(value / singleDeal.qty); //get the floor of the division
                    const discount = this.getItem(singleDeal.itemId).itemPrice * singleDeal.qty * multiplier * -1;
                    const dealPrice = multiplier * singleDeal.dealPrice;
                    discountTtl += (dealPrice + discount); //this is experiencing some precision issues with float
                }
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