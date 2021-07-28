var assert = require('assert');
const Checkout = require("../src/checkout.js").Checkout;




describe('Checkout creation', () => {

    const myCheckout = new Checkout();
    const newItems = [
        "101",
        "102",
        "200",
        "301",
        "103",
        "103",
        "302",
        "101", 
        "101"
    ];
    for (let i = 0; i < newItems.length; i++) {
        myCheckout.addItem(newItems[i]);
      };

    
    it('should initialise with 9 products',() => {        
        assert.equal(myCheckout.items.length,9);
       });

    it('should show 3 Apples, 2 Kitkats',() => {
        let itemCount = myCheckout.countNumItems();
        assert.equal(itemCount["101"],3);
        assert.equal(itemCount["103"],2);
    });

    it('should be able to find an item',() => {
        assert.equal(myCheckout.validateItem('101').itemId,'101');
    });

    

   });


    

 