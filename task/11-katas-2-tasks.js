'use strict';

/**
 * Returns the bank account number parsed from specified string.
 *
 * You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 * The machine scans the paper documents, and produces a string with a bank account that looks like this:
 *
 *    _  _     _  _  _  _  _
 *  | _| _||_||_ |_   ||_||_|
 *  ||_  _|  | _||_|  ||_| _|
 *
 * Each string contains an account number written using pipes and underscores.
 * Each account number should have 9 digits, all of which should be in the range 0-9.
 *
 * Your task is to write a function that can take bank account string and parse it into actual account numbers.
 *
 * @param {string} bankAccount
 * @return {number}
 *
 * Example of return :
 *
 *   '    _  _     _  _  _  _  _ \n'+
 *   '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
 *   '  ||_  _|  | _||_|  ||_| _|\n'
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
 *   '|_||_  _||_| _||_|  ||_| _|\n',
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
 *   '|_||_  _||_| _||_| _||_| _|\n',
 *
 */
function parseBankAccount(bankAccount) {
    var map = [];
    map.push([" _ ",
              "| |",
              "|_|"]);
    map.push(["   ",
              "  |",
              "  |"]);
    map.push([" _ ",
              " _|",
              "|_"]);
    map.push([" _ ",
              " _|",
              " _|"]);
    map.push(["   ",
              "|_|",
              "  |"]);
    map.push([" _ ",
              "|_ ",
              " _|"]);
    map.push([" _ ",
              "|_ ",
              "|_|"]);
    map.push([" _ ",
              "  |",
              "  |"]);
    map.push([" _ ",
              "|_|",
              "|_|"]);
    map.push([" _ ",
              "|_|",
              " _|"]);
    var Arr=bankAccount.split('\n');
    Arr.pop();
    var result='';
    for(var i=0;i<Arr[0].length;i+=3){
        for(var j=0;j<10;j++){
            if(Arr[0].slice(i,i+3).includes(map[j][0]) && Arr[1].slice(i,i+3).includes(map[j][1]) && Arr[2].slice(i,i+3).includes(map[j][2]))
                result+=j;
        }
    }
    return result;
}


/**
 * Returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the specified column number.
 * Lines can be broken at word boundaries only.
 *
 * @param {string} text
 * @param {number} columns
 * @return {Iterable.<string>}
 *
 * @example :
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 26 =>  'The String global object',
 *                                                                                                'is a constructor for',
 *                                                                                                'strings, or a sequence of',
 *                                                                                                'characters.'
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 12 =>  'The String',
 *                                                                                                'global',
 *                                                                                                'object is a',
 *                                                                                                'constructor',
 *                                                                                                'for strings,',
 *                                                                                                'or a',
 *                                                                                                'sequence of',
 *                                                                                                'characters.'
 */
function* wrapText(text, columns) {
    //throw new Error('Not implemented');
    var Arr=text.split(' '),
        result=[];
    var temp='';
    for(let i=0;i<Arr.length;i++){
        if(Arr[i].length+temp.length<=columns )
            temp=temp+Arr[i]+' ';
        else{
            result.push(temp.slice(0,-1));
            temp=Arr[i]+' ';
        }
    }
    result.push(temp.slice(0,-1));
    for(let i of result)
        yield i;
}


/**
 * Returns the rank of the specified poker hand.
 * See the ranking rules here: https://en.wikipedia.org/wiki/List_of_poker_hands.
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
const PokerRank = {
    StraightFlush: 8,
    FourOfKind: 7,
    FullHouse: 6,
    Flush: 5,
    Straight: 4,
    ThreeOfKind: 3,
    TwoPairs: 2,
    OnePair: 1,
    HighCard: 0
}

function getPokerHandRank(hand) {
    throw new Error('Not implemented');
    hand=hand.map(x=>getCardId(x)).sort();
    var countStrFl=0,
        countOfKind=0;
    for(var i=0;i<hand.length-1;i++){
        if(hand[i]+1===hand[i+1]) countStrFl++;
        if(hand[i]+13===hand[i+1]) countOfKind++;
    }
    if(countStrFl===hand.length-1) return PokerRank.StraightFlush;

    return PokerRank.HighCard;
}

function getCardId(value) {
    var a;
    var b;
    var c;
    if(value.length===2) {
        a = value[0];
        b = value[1];
    }
    else{
        a = value[0];
        b = value[2];
    }
    //if (typeof a === 'number'){ c = a - 1;}
    if( a > '1' && a <= '9'){
        c = a.charCodeAt(0) - '1'.charCodeAt(0);
    }
    else {
        if(a==='A'){c=0;}
        if(a==='1'){c=9;}
        if(a==='J'){c=10;}
        if(a==='Q'){c=11;}
        if(a==='K'){c=12;}
    }
    if(b==='♣'){return c;}
    if(b==='♦'){return c+13;}
    if(b==='♥'){return c+26;}
    if(b==='♠'){return c+39;}
}
/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +, vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectanles does not matter.
 * 
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 * 
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+              '+------------+\n'+
 *    '|            |\n'+              '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+       =>     '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+              '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'               '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
function* getFigureRectangles(figure) {
   //throw new Error('Not implemented');
    var Arr=figure.split('\n');
    Arr.pop();
    var result=[];
    for(var i=0;i<Arr.length-1;i++){
        var left=-1;
        for(var j=0;j<Arr[i].length;j++) {
            if (Arr[i][j]==='+' && left>-1 && i!=Arr.length-1 && Arr[i+1][j]!==' ') {
                var count=i+1;
                while(Arr[count][j]!=='+')
                    count++;
                count--;
                left++;
                result.push([j - left,count - i]);
            }
            if (Arr[i][j] === '+' && Arr[i+1][j]!==' ') {
                left = j;
            }
        }
    }
    for(let i of result){
        yield getRectangleString(i[0], i[1]);
    }
    function getRectangleString(width, height) {
        return '+' + '-'.repeat(width)+'+\n'+('|'+' '.repeat(width)+'|\n').repeat(height)+'+' + '-'.repeat(width)+'+\n';
    }
}


module.exports = {
    parseBankAccount : parseBankAccount,
    wrapText: wrapText,
    PokerRank: PokerRank,
    getPokerHandRank: getPokerHandRank,
    getFigureRectangles: getFigureRectangles
};
