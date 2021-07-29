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

    

    it('should be able to find an item by ID - item with id 101',() => {
        assert.equal(myCheckout.validateItem('101').itemId,'101');
    });

    it('Counting: should show 3 Apples (101 x3), 2 Kitkats (103x2)',() => {
        const itemCount = myCheckout.countNumItems();
        assert.equal(itemCount["101"],3);
        assert.equal(itemCount["103"],2);
    });

    it('Discount Calculation: should be able to find items in the list of counted items',() => {
        myCheckout.calculateDiscount();
        console.log(myCheckout.ttlDiscount);
        // assert.equal(myCheckout.ttlDiscount,);
    });

   });


    

 