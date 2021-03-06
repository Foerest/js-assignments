'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    //throw new Error('Not implemented');
    var a='Fizz';
    var b='Buzz';
    if(num%3===0 && num%5===0){
        return a+b;
    }
    else{
        if(num%3===0){
            return a;
        }
        if(num%5===0){
            return b;
        }
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    //throw new Error('Not implemented');
    var i=1;
    var result=1;
    while(i<=n){
        result=result*i;
        i++;
    }
    return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    //throw new Error('Not implemented');
    var result=0;
    for (n1; n1 <= n2; n1++) {
        result=result + n1;
    }
    return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    //throw new Error('Not implemented');
    if(c>=a && c>=b && a+b > c) return true;
    if(b>=c && b>=a && a+c > b) return true;
    return (a>=c && a>=b && b+c > a);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    //throw new Error('Not implemented');
    return (rect1.top + rect1.height >= rect2.top && rect1.left + rect1.width >= rect2.left);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    //throw new Error('Not implemented');
    /*if (circle.center.x === point.x && circle.center.y === point.y) {
        return true;
    }
    else {
        var a = Math.abs(circle.center.x-point.x);
        var b = Math.abs(circle.center.y-point.y);
        var g = Math.atan(b/a);
        return ((a/Math.cos(g)===0?1:a/Math.cos(g))*circle.radius+circle.center.x <= point.x && (b/Math.sin(g)===0?1:b/Math.sin(g))*circle.radius+circle.center.y <= point.y);
    }*/
    var a = Math.abs(circle.center.x-point.x);
    var b = Math.abs(circle.center.y-point.y);
    return Math.hypot(a,b) < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    //throw new Error('Not implemented');
    var i=0;
    var j=0;
    var count;
    for(i;i<str.length;i++){
        count=0;
        for(j=0;j<str.length;j++){
            if(str[i]===str[j] && j!==i) count++;
        }
        if(count===0) return str[i];
    }
    return null;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    //throw new Error('Not implemented');
    var str;
    if(isStartIncluded) str='[';
    else str='(';
    if(b > a) str=str+a+', '+b;
    else str=str+b+', '+a;
    if(isEndIncluded) str=str+']';
    else str=str+')';
    return str;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    //throw new Error('Not implemented');
    var i=0;
    var rs=new Array(str.length);
    for (i;i<str.length;i++){
        rs[i]=(str[str.length-1-i]);
    }
    return rs.join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    //throw new Error('Not implemented');
    var result=0;
    var temp=num;
    var len=0;
    while(temp>=1){
        len++;
        temp=Math.round((temp-5)/10);
    }
    var i=0;
    while (num >= 1 && i<len){
        result=result+(num%10)*Math.pow(10,len-i-1);
        num=Math.round((num-5)/10);
        i++;
    }
    return result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    //throw new Error('Not implemented');
    var tmp=ccn;
    var len=0;
    while(tmp>=1){
        len++;
        tmp=Math.floor(tmp/10);
    }
    var temp=new Array(len);
    var result=0;
    var i=0;
    while(ccn>0){
        //temp[i]=ccn%10;
        temp[i]=ccn-10*Math.floor(ccn/10);
        ccn=Math.floor(ccn/10);
        i++;
    }
    //temp.reverse();
    for(i=0;i<temp.length;i++){
        if(i%2===1){
            temp[i] = 2 * temp[i];
            if (temp[i] > 9) {
                temp[i] = temp[i] - 9;
            }
        }
        result = result + temp[i];
    }
    return result%10===0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    //throw new Error('Not implemented');
    var temp=0;
    var result=0;
    while (num >= 1){
        temp=temp+num%10;
        num=Math.round((num-5)/10);
    }
    while(temp >= 1){
        result=result+temp%10;
        temp=Math.round((temp-5)/10);
    }
    return result;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    //throw new Error('Not implemented');
    if(str.length%2===1){
        return false;
    }
    else{
        var Arr=['[',']','{','}','(',')','<','>'];
        var i =0;
        for(i=0;i<8;i+=2) {
            while(str.includes(Arr[i])){
                if(str.lastIndexOf(Arr[i+1])<str.indexOf(Arr[i]) || (str.lastIndexOf(Arr[i+1])-str.indexOf(Arr[i]))%2===0)
                    return false;
                str=str.substr(0,str.lastIndexOf(Arr[i]))+str.substr(str.lastIndexOf(Arr[i])+1,str.length-1);
                //str=str.substr(str.lastIndexOf(Arr[i]),1).replace(Arr[i], '');
                str=str.substr(0,str.indexOf(Arr[i+1]))+str.substr(str.indexOf(Arr[i+1])+1,str.length-1);
            }
        }
        return !str.length;
    }
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    //throw new Error('Not implemented');
    var d=Math.abs(endDate.getTime()-startDate.getTime());
    var temp=d;
    d=d/1000;
    if(d<=45.000) return 'a few seconds ago';
    d=d/60;
    if(d>0 && d<=45) return Math.ceil(d-0.5)===1?'a minute ago':Math.ceil(d-0.5).toString() + ' minutes ago';
    d=d/60;
    if(d>0 && d<=22) return Math.ceil(d-0.5)===1?'an hour ago':Math.ceil(d-0.5).toString() + ' hours ago';
    d=d/24;
    if(d>0 && d<=25)   return Math.ceil(d-0.5)===1?'a day ago':Math.ceil(d-0.5).toString()+' days ago';
    d=d/30;
    if(d>0 && d<=11.5) return Math.ceil(d-0.5)===1?'a month ago':Math.ceil(d-0.5).toString() + ' months ago';
    d=d/12;
    if(d>0 && d<=364)   return Math.ceil(d-0.5)===1?'a year ago':Math.ceil(d-0.5).toString() + ' years ago';
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    //throw new Error('Not implemented');
    var result=new Array(1);
    while(num>=1){
        result.push(num%n);
        num=Math.round((num-n/2)/n);
    }
    return result.reverse().join('');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    //throw new Error('Not implemented');
    var count= 0,c= -1,k= 1;
    while(k) {
        c++;
        k=0;
        count=0;
        for (var i = 0; i < pathes.length - 1; i++) {
            if (pathes[i].slice(c, c + 1) !== pathes[i + 1].slice(c, c + 1))
                continue;
            count++;
        }
        if(count===pathes.length - 1)
        k=1;
    }
    while(pathes[0].slice(c-1,c)!=='/' && c>1) {
        --c;
    }
    return pathes[0].slice(0,c);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    //throw new Error('Not implemented');
    var result=new Array(m1.length);
    var i= 0,j= 0, k= 0,l=0;
    for(i;i<m1.length;i++){
        result[i]=new Array(m2[i].length);
    }
    for(i=0;i<m1.length;i++) {
        for (j=0; j < m2[0].length; j++) {
            result[i][j]=0;
            for (k=0; k < m2.length; k++) {
                    result[i][j]=result[i][j]+m1[i][k]*m2[k][j];
            }
        }
    }
    return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    //throw new Error('Not implemented');
    var i, j,str,count1,count2,count3,count4;
    for(i=0;i< position.length;i++) {
        count1=count2=count3=count4=0;
        for (j=0; j < position.length-1; j++) {
            if(position[i][j]===position[i][j+1] && position[i][j]!==undefined) count1++;
            if(position[j][i]===position[j+1][i] && position[j][i]!==undefined) count2++;
            if(position[j][j]===position[j+1][j+1] && position[i][j]!==undefined) count3++;
            if(position[j][2-j]===position[j+1][1-j] && position[i][j]!==undefined) count4++;
        }
        if(count1===2) return position[i][j];
        if(count2===2) return position[j][i];
        if(count3===2) return position[j][j];
        if(count4===2) return position[j][2-j];
    }
    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
