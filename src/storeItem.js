exports.StoreItem = class StoreItem { 
    constructor(itemId, itemName, itemPrice) {
      if( itemId === undefined || itemName === undefined || itemPrice === undefined ) {
        throw "StoreItem must contain values for itemId, itemName, itemPrice"
      }
      try{
        this.itemId = itemId.toString();
        this.itemName = itemName.toString();
        this.itemPrice = Number(itemPrice);
      }
      catch {
        throw "itemId should be String, itemName should be String, itemPrice should be a Number"
      }
    }
  }
