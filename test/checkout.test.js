import { expect } from 'chai';
import * as Checkout from "../index.mjs";

describe('Item creation', () => {

    const myItem = new Checkout.StoreItem(281, "Apple", 0.50)
    it('should initialise with all fields',() => {        
         expect(myItem.itemId).to.equal(281);
         expect(myItem.itemName).to.equal("Apple");
         expect(myItem.itemPrice).to.equal(0.50);
        });
    });


describe('Checkout creation', () => {

    const myCheckout = new Checkout.Checkout;
    
    const newItems = [
        {itemId: 101, itemName: "Apple", itemPrice: 0.50},
        {itemId: 102, itemName: "Bread", itemPrice: 0.20},
        {itemId: 200, itemName: "Yoghurt", itemPrice: 5.00},
        {itemId: 301, itemName: "Soap", itemPrice: 1.20},
        {itemId: 103, itemName: "Kitkat", itemPrice: 1.95},
        {itemId: 302, itemName: "Tissues", itemPrice: 4.25}
    ];
    for (let i = 0; i < newItems.length; i++) {
        const myItem = new Checkout.StoreItem(newItems[i].itemId,newItems[i].itemName,newItems[i].itemPrice);
        myCheckout.items.push(myItem);
      };

    
    it('should initialise with 6 products',() => {        
        expect(myCheckout.items.length).to.equal(6);
       });
    it('should have an Apple as the first item, with price of 0.50',() => {        
        expect(myCheckout.items[0].itemName).to.equal("Apple");
        expect(myCheckout.items[0].itemPrice).to.equal(0.50);
       }); 
   });

    

 