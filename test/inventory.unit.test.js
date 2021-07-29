// const { assert } = require('chai');
var assert = require('assert');
const inventory = require('../src/inventory.js').inventory;

describe('Check inventory', () => {

    it('Inventory array should not be empty or undefined',() => {       
        assert.notEqual(inventory.length,0);
        assert.notEqual(inventory,undefined);
        });
    });