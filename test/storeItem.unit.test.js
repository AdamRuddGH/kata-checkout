const StoreItem = require('../src/storeItem.js').StoreItem;

describe('StoreItem creation', () => {

    const myItem = new StoreItem("101","Apple",0.50)
    it('Should initialise an item successfully with all fields',() => {        
         expect(myItem.itemId).to.equal(281);
         expect(myItem.itemName).to.equal("Apple");
         expect(myItem.itemPrice).to.equal(0.50);
        });
    });