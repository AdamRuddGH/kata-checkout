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
        "302",
        "302",
        "302",
        "302",
        "302",
        "302",
        "302",
        "302",
        "302",
        "302",
        "101", 
        "101"
    ];
    for (let i = 0; i < newItems.length; i++) {
        myCheckout.addItem(newItems[i]);
      };

    
    it('should initialise with 9 products',() => {        
        assert.equal(myCheckout.items.length,newItems.length);
       });

    

    it('should be able to find an item by ID - item with id 101',() => {
        assert.equal(myCheckout.getItem('101').itemId,'101');
    });

    it('Counting: should show 3 Apples (101 x3), 2 Kitkats (103x2)',() => {
        const itemCount = myCheckout.countNumItems();
        assert.equal(itemCount["101"],3);
        assert.equal(itemCount["103"],2);
        assert.equal(itemCount["302"],11);
        assert.equal(itemCount["102"],1);
        assert.equal(itemCount["200"],1);
    });

    it('Discount Calculation: should be able to find items in the list of counted items, resulting in a non NaN or Non Undefined output, and a discount ttl of $-24.10',() => {
        myCheckout.calculateDiscount();
        assert.notEqual(myCheckout.ttlDiscount,undefined);
        assert.notEqual(myCheckout.ttlDiscount,NaN);
        //101 2 for 80c savings 20c
        //302 savings = $22.50
        //103 (kitkat) 1.95 each 2 for 2.50 savings $1.40
        //est savings $24.10
        assert.equal(myCheckout.ttlDiscount,-24.10);

    });

    it('Should not have a ttl price without discounts of 0',() => {
        assert.notEqual(myCheckout.ttlNoDiscount,0);
    });

   });

   describe('Discount calculation', () => {

   });
    

 