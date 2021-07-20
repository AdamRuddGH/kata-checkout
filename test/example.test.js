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