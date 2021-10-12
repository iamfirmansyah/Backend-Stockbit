const arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']; 

function groupAnagrams(arr = []) { 
    let groupAnnagram = {}; 

    arr.forEach(j => { 
        var word = j.split("").sort().join(""); 

        if (groupAnnagram[word]) { 
            groupAnnagram[word].push(j); 
        } else { 
            groupAnnagram[word] = [j]; 
        } 
    });

    return Object.values(groupAnnagram); 
}

console.log(groupAnagrams(arr));