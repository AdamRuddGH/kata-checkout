

export class StoreItem { 
    //For each Item which will be part of the checkout
    constructor(itemId, itemName, itemPrice) {
      this.itemId = itemId;
      this.itemName = itemName;
      this.itemPrice = itemPrice;
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

export class Checkout {
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


    // populateCheckoutList() {
    //     console.log("populating list")
    //     const newItems = [
    //         {itemId: 101, itemName: "Apple", itemPrice: 3.95},
    //         {itemId: 102, itemName: "Bread", itemPrice: 0.20},
    //         {itemId: 200, itemName: "Yoghurt", itemPrice: 5.00},
    //         {itemId: 301, itemName: "Soap", itemPrice: 1.20},
    //         {itemId: 103, itemName: "Kitkat", itemPrice: 1.95},
    //         {itemId: 302, itemName: "Tissues", itemPrice: 4.25}
            
    //         // new StoreItem(101,"Bread",3.95), // this doesn't seem to execute before being added
    //         // new StoreItem(102,"Banana",0.20),
    //         // new StoreItem(200,"Yoghurt",5.00),
    //         // new StoreItem(301,"Soap",1.20),
    //         // new StoreItem(103,"Kitkat",1.95),
    //         // new StoreItem(302,"Tissues",4.25)
    //     ]
    //     for (let i = 0; i < newItems.length; i++) {
    //         const myItem = new StoreItem(newItems[i].itemId,newItems[i].itemName,newItems[i].itemPrice);
    //         this.items.push(myItem);
    //         // text += cars[i] + "<br>";
    //       }
        
    // }
}

