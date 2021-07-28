const { assert } = require('chai');

describe('Check inventory', () => {

    const inventory = require('../src/inventory.js').inventory;

    it('Inventory array should not be empty',() => {        
         (inventory.length).should.not.equal(0);
         (inventory).should.not.equal(undefined);
        });
    });