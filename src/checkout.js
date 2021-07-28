
const inventory =  require("./inventory.js").inventory;
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
        if (this.validateItem(itemId) != undefined ) {
            
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

    validateItem(searchItemId) {
        //returns item if item is in Inventory. Else return false
        for (let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            if (inventory[itemIndex].itemId == itemId){
                return true
            }
            else {
                return false
            }
          }
    }

    calculateDiscount() {
        //calculate the discount of items based on the available Deals
        //check the multi product deal ids for matches to items in receipt
        //if there is a match, check for the deal specifics.
        //if the number of items // deal qty >=1 (floor division), 
        //then apply the difference in price to the discount
        // originalDiscount = this.ttlDiscount;
        return "calculateDiscount() is not built yet"
        
    }

    countNumItems() {
        // calculates the number of items within the checkout items list
        // returns array of itemId,count
        // used primarily for the caclulateDiscount function
        // {itemId: qty, itemId: qty, //etc }
        
        let numItems = {};
        // {
        //   itemId: qty,
        // }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].itemId in numItems) {
                numItems[this.items[i].itemId] += 1;
            }
            else {
                numItems[this.items[i].itemId] = 1;
            }
                
          };
          return numItems;
    };
        
};