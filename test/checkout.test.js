import { expect } from 'chai';
import * as Checkout from "../index.mjs";

describe('Item creation', () => {

    const myItem = new Checkout.StoreItem("101")
    it('should initialise with all fields',() => {        
         expect(myItem.itemId).to.equal(281);
         expect(myItem.itemName).to.equal("Apple");
         expect(myItem.itemPrice).to.equal(0.50);
        });
    });


describe('Checkout creation', () => {

    const myCheckout = new Checkout.Checkout;
    
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
        const myItem = new Checkout.StoreItem(newItems[i].itemId,newItems[i].itemName,newItems[i].itemPrice);
        myCheckout.items.push(myItem);
      };

    
    it('should initialise with 9 products',() => {        
        expect(myCheckout.items.length).to.equal(9);
       });
    it('should have an Apple as the first item, with price of 0.50',() => {        
        expect(myCheckout.items[0].itemName).to.equal("Apple");
        expect(myCheckout.items[0].itemPrice).to.equal(0.50);
       }); 

    it('should show 3 Apples, 2 Kitkats',() => {
        let itemCount = myCheckout.countNumItems();
        expect(itemCount["101"]).to.equal(3);
        expect(itemCount["103"]).to.equal(2);
    });

    

   });


    

 