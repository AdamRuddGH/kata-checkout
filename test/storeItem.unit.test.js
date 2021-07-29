var assert = require('assert');
const StoreItem = require('../src/storeItem.js').StoreItem;

describe('StoreItem creation', () => {

    const myItem = new StoreItem("101","Apple",0.50)
    it('Should initialise an item successfully with all fields',() => {        
         assert.equal(myItem.itemId.toString(),"101");
         assert.equal(myItem.itemName,"Apple");
         assert.equal(myItem.itemPrice,0.50);
        });

    it('should not create an item without a name or price', () => {
        
        //to do
    });
});