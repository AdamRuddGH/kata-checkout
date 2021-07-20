

export class StoreItem {   //looks like Item is a reserved name
    

    constructor(itemId, itemName, itemPrice) {
      this.itemId = itemId;
      this.itemName = itemName;
      this.itemPrice = itemPrice;
    }
    pingpong() {
        console.log("This is the Item Class")
    }
  }

export class MultiProductDeals {
    constructor(itemId, itemName, qty, dealType, deal) {
        this.item = item; //item class
        this.qty = qty;
        this.dealType = dealType;
        this.deal = deal;
    }

}

export class Purchases {
    constructor() {
        this.items = [];
        this.grossPrice = 0.00;
        this.discount = 0.00;
        this.netPrice = 0.00;
    }

    calculateDiscount() {
        //calculate the discount of items based on the available Deals

        //check the multi product deal ids for matches to items in receipt
        //if there is a match, check for the deal specifics.
        //if the number of items // deal qty >=1 (floor division), 
        //then apply the difference in price to the discount
        originalDiscount = this.discount;
        
    }
}

// const my_item = new Item(1,"ss",2);
// my_item.pingpong()