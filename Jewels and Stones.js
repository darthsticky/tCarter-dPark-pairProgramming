/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {    //comparing two different strings
    var counter = 0;
    for(var i=0;i<J.length;i++){//for each character in J
        for(var k in S){
            if(S[k]===J[i]){//checking to see if char in J matches char in S
            counter++;
            }//increment our counter
        }
    } 
    return counter;//return counter
};

/*Transformation Steps:
Input= 'aA', 'aAAbbbb'
Iteration   |   Current Char    |   Current Counter |   Counter When Matched
1           |        'a'        |            0      |             1
2           |        'A'        |            1      |             3
Iteration ends
Return counter
*/

//output represents a single integer of what is matched successfully
