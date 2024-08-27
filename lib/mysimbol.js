'use strict';

// Global registry to store symbols by key
const mockSymbolRegistry = new Map();

function MockSymbol(description) {
    // Ensure it's called with new
    if (!(this instanceof MockSymbol)) {
        return new MockSymbol(description);
    }

    this.description = typeof description === 'string' ? description : String(description);
    this._id = Math.random().toString(36).substr(2, 9);
}

MockSymbol.prototype.toString = function() {
    return `Symbol(${this.description})`;
};

MockSymbol.prototype.valueOf = function() {
    return this;
};

MockSymbol.for = function(key) {
    if (mockSymbolRegistry.has(key)) {
        return mockSymbolRegistry.get(key);
    }
    const newSymbol = new MockSymbol(key);
    mockSymbolRegistry.set(key, newSymbol);
    return newSymbol;
};

MockSymbol.keyFor = function(symbol) {
    for (const [key, value] of mockSymbolRegistry) {
        if (value === symbol) {
            return key;
        }
    }
    return undefined;
};

// Static properties
MockSymbol.iterator = new MockSymbol('Symbol.iterator');
MockSymbol.asyncIterator = new MockSymbol('Symbol.asyncIterator');
// Add other well-known symbols as needed

module.exports = MockSymbol;