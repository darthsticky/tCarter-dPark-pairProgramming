/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let matchedWords = [];      //establish empty array
    let row1 = /[qwertyuiop]/   //establish 3 regex that represents the rows
    let row2 = /[asdfghjkl]/
    let row3 = /[zxcvbnm]/
    for(var i=0;i<words.length;i++){//for each string in words
        let currWord = words[i];    //string.split store element
        let match1 = currWord.match(row1).join('');//establish r1,r2,r3 value 
        let match2 = currWord.match(row2).join('');
        let match3 = currWord.match(row3).join('');
            if(currWord===match1 || currWord===match2 || currWord===match3){
                //if string equals joined r1 regex, push value to empty array
                matchedWords.push(currWord);
        }
    }
    return matchedWords;//return array
};
/*
Input: an array containing strings
Output: an array containing successful strings
{
    row1: [array of letters]
    row2: [array of letters]
    row3: [array of letters]
}

if(!(x>0 && y>0) || !(x>0 && z>0) || !(y>0 && z>0))
*/