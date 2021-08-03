/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
     
    const sentArr = sentence.split(' ');
    const Trie = {};
    
    
    const insert = (word) => {
        let curr = Trie;
        for(let i = 0; i < word.length; i++){
            if(curr[word[i]] == undefined) curr[word[i]] = {};
            curr = curr[word[i]];
        }
        curr.isWord = true;
    }
    
    const hasStr = (str) =>{
        let currNode = Trie;
        let temp = ''
        for(let s of str){
            if (currNode[s] === undefined ) return [false,''];
            currNode = currNode[s];
            temp += s;
            
            if(currNode.isWord !== undefined && currNode.isWord) return [true,temp];
        }   
        return [false,''];
    }
    
    
    
    for(let s of dictionary) insert(s);
    //console.log(Trie);
    
    let strFreq = {}
    
    for(let l = 0; l < sentArr.length; l++) {
          let [strInSent,str] = hasStr(sentArr[l]);
          if(strInSent) sentArr[l] = str; 

    }
    
    return sentArr.join(' ');
};



