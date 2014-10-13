var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

 var arrFibonacci = [1,2,3,5,8,13,21,34,55,89];


function filterEvens(element) {
  if (element%2===0) return element;
}

var arrEvens = arrFibonacci.filter(filterEvens);


describe('filterEvens(), takes a Number as an input and returns a Number if even', function(){
    it('should be a type of function named filterEvens()', function(){
        assert.typeOf(filterEvens,'function');
    });
    it('should return even number when fed an even number', function(){
        assert.strictEqual(filterEvens(2),2);
    });
    it('should return undefined when fed an odd number', function(){
        assert.strictEqual(filterEvens(3),undefined);
    });
});

//console.log(arrEvens);
//fibonacci: function(limit){ /* . . . */ },
//filterEvens: function(list){ /* . . . */ },
//sum: function(list){ /* . . . */ }
