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

function solution(){
    return {
        solveFor: function(limit){
            return 0;
        },
        /**
         * @param Number limit
         * @return Array of Number in fibonacci sequence up to limit
         */
        fibonacci: function(limit){
            var prev = 1, curr = 2, temp;
            var sequence = [ 1, 2 ];

            //Check for minimum sequence
            if ( limit < 3 ){
                return [ ];
            }

            while ( prev + curr < limit ){
                temp = prev + curr;
                prev = curr;
                curr = temp;

                sequence.push(temp);
            }
            return sequence;
        }
        filterEvens: function(list){
            return list.filter (function(){
                return ( item % 2 === 0);
            });
        }
        sum: function(list){
            var total=0;
            arr.forEach(function(element){
               total+=element;
            });
            return total;
        }
    }
}

//sum(arrEvens);

describe('Project Euler No. 2', function(){
    var S; // or var S = solution();

    beforeEach(function(){
        S = solution();
    });

    describe('fibonacci sequence', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.fibonacci);
            assert.deepEqual(S.fibonacci(0), [ ]);
        });
        it('should calculate fibonacci numbers for a small sample', function(){
            assert.deepEqual(S.fibonacci(3), [ 1, 2 ]);
            assert.deepEqual(S.fibonacci(5), [ 1, 2, 3 ]);
            assert.deepEqual(S.fibonacci(10), [ 1, 2, 3, 5, 8 ]);
            assert.deepEqual(S.fibonacci(20), [ 1, 2, 3, 5, 8, 13]);
        });
    });

    describe('filterEvens', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.filterEvens);
        });
        it('should filter out evens', function(){
            assert.deepEqual(S.filterEvens([ 1 ]), [ ]);
            assert.deepEqual(S.filterEvens([ 2 ]), [ 2 ]);
            assert.deepEqual(S.filterEvens([ 1, 2 ]), [ 2 ]);
            assert.deepEqual(S.filterEvens([ 1, 2, 3 ]), [ 2 ]);
        });
    });

    describe('sum values in a list', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.sum);
            assert.equal(S.sum([ ]), 0);
        });
        it('should sum items', function(){
            assert.equal(S.sum([ 1 ]), 1);
            assert.equal(S.sum([ 2 ]), 2);
            assert.equal(S.sum([ 1, 1 ]), 2);
            assert.equal(S.sum([ 1, 2 ]), 3);
            assert.equal(S.sum([ 3, 1, 4 ]), 8);
        });
    });

    describe('solveFor', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.solveFor);
        });

        it('should be able to solve simple examples', function(){
            assert.equal(S.solveFor(0), 0);

        });
    });
});

//console.log(arrEvens);
//fibonacci: function(limit){ /* . . . */ },
//filterEvens: function(list){ /* . . . */ },
//sum: function(list){ /* . . . */ }
