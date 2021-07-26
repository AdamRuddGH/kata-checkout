import { inventory } from "./inventory.mjs";
import { Logger } from "./logger.mjs";


export class StoreItem { 
    //For each Item which will be part of the checkout
    constructor(itemId, itemName, itemPrice) {
      this.itemId = itemId;
      this.itemName = itemName;
      this.itemPrice = itemPrice;
    }
  }

export class MultiProductDeals {
    constructor(itemId, qty, dealPrice, dealMessage) {
        this.itemId = itemId; // item class
        this.qty = qty; // eg. 3
        this.dealPrice = dealPrice; // eg. "1.20"
        this.dealMessage = dealMessage; // eg. "3 apples for 1.20"
    }

}

export class Checkout {
    constructor() {
        this.items = [];
        this.ttlNoDiscount = 0.00;
        this.ttlDiscount = 0.00;
        this.ttlWithDiscount = 0.00;
    }

    addItem(itemId) {
        //add an item to the checkout list
        itemId = itemId.toString();
        if (this.validateItem(itemId) == true ) {
            
            try {
                this.items.push(itemId);
            }
            catch (exception) {
                Logger.log(exception);
            }
            calculateDiscount();

        }
    }

    validateItem(itemId) {
        //returns true if item is in Inventory
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
        originalDiscount = this.ttlDiscount;
        
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


// export var inventory = [
    
// ]

export var deals = [
    new MultiProductDeals(101, 3, 1.2, "3 apples for $1.20"),
    new MultiProductDeals(103, 2, 1, "2 Kitkats for $1.00")
];