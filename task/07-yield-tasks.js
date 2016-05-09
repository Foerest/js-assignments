'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the lines sequence of "99 Bottles of Beer" song:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 * See the full text at
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * NOTE: Please try to complete this task faster then original song finished:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
function* get99BottlesOfBeer() {
    //throw new Error('Not implemented');
    var bottle = 99;
    var i=0;
    var words1=' bottles of beer on the wall, ';
    var Specwords1=' bottle of beer on the wall.';
    var words2=' bottles of beer.';
    var words3='Take one down and pass it around, ';
    var finish=new Array('1 bottle of beer on the wall, 1 bottle of beer.','Take one down and pass it around, no more bottles of beer on the wall.','No more bottles of beer on the wall, no more bottles of beer.','Go to the store and buy some more, 99 bottles of beer on the wall.');
    while (bottle>1){
        yield bottle.toString()+words1+(bottle--).toString()+words2;
        yield words3+bottle.toString()+((bottle===1)?Specwords1:words1.slice(0,-2)+'.');
    }
    while(i<4) {
        yield finish[i++];
    }
}


/**
 * Returns the Fibonacci sequence:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * See more at: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
function* getFibonacciSequence() {
    //throw new Error('Not implemented');
    var F1 = 0, F2 = 1;
    while (1){
        yield F1;
        var p=F1;
        F1=F2;
        F2=p+F2;
    }
}


/**
 * Traverses a tree using the depth-first strategy
 * See details: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in depth-first order
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */
function* depthTraversalTree(root) {
    //throw new Error('Not implemented');
    var Arr = [root];
    while (Arr.length > 0) {
        var v = Arr.pop();
        yield v;
        if (v.children) {
            for (var edges of v.children.reverse()) Arr.push(edges);
        }
    }
    /*var Arr=new Array(1);
    Arr.shift();
    //return Arr;
    while(1){
        if(root.visit!=1){
            yield root;
            root.visit=1;
            var i=1;
            while(Array.isArray(root.children) && i<root.children.length){
                Arr.unshift(root);
                i++;
            }
        }
        if(root.children instanceof Object)
            while(Array.isArray(root.children)){
                if(root.children[0].visit!=1){
                    yield root.children[0];
                    root.children[0].visit=1;
                }
                if(Array.isArray(root.children[0].children) && root.children[0].children.length>1)
                    Arr.unshift(root.children[0]);
                var p=root.children[0];
                root.children.shift();
                root=p;
            }
        if(Arr.length>0){
            root=Arr[0];
            Arr.shift();
        }
        else{
            return;
        }
        //yield Arr;
        //yield root.n;
    }*/
}


/**
 * Traverses a tree using the breadth-first strategy
 * See details: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in breadth-first order
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
function* breadthTraversalTree(root) {
    /*var Arr = [root];
    while (Arr.length > 0) {
        var v = Arr.shift();
        yield v;
        if (v.children) {
            for (var edges of v.children) Arr.push(edges);
        }
    }*/
    var Arr=[];
    while(1){
        if(root.visit!==2){
            yield root;
            root.visit=2;
        }
        var i=0;
        while(i<root.children.length){
            if(Array.isArray(root.children[i].children))
                Arr.push(root.children[i]);
            if(root.children[i].visit!=2)
                yield root.children[i];
            root.children[i].visit=2;
            i++;
        }
        if(Arr.length>0){
            root=Arr[0];
            Arr.shift();
        }
        else
        return;
    }
}


/**
 * Merges two yield-style sorted sequences into the one sorted sequence.
 * The result sequence consists of sorted items from source iterators.
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} the merged sorted sequence
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
function* mergeSortedSequences(source1, source2) {
    //throw new Error('Not implemented');
    var iterator1 = source1();
    var iterator2 = source2();
    var Arr = [];
    Arr.push(iterator1.next().value);
    Arr.push(iterator2.next().value);
    Arr.sort();
    yield* Arr;
}


module.exports = {
    get99BottlesOfBeer: get99BottlesOfBeer,
    getFibonacciSequence: getFibonacciSequence,
    depthTraversalTree: depthTraversalTree,
    breadthTraversalTree: breadthTraversalTree,
    mergeSortedSequences: mergeSortedSequences
};
