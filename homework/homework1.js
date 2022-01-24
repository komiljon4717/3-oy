/*=====================================1=========================*/

// function wordPattern(pattern, word) {
//     let count = 0
//     let arr = []
//     if (pattern.length !== word.split(' ').length) {
//         return false
//     }
//     pattern = pattern.split('')
//     for (let i = 0; i < pattern.length; i++) {
//         for (let k = 0; k < array.length; k++) {
//             if (pattern[i] === pattern[k]) {
                
//             }
//         }
        
//     }
//     console.log(count);
// }

// wordPattern("abba", 'dog, cat, cat, dog')

/*===========================2==============================*/

// function replacer(word1, word2) {
//     word1 = word1.trim()
//     let newWord = ''
//     for (let i = 0, k = 0; i < word1.length; i++) {
//         if (word1[i] === '*') {
//             newWord += word2[k]
//             k++
//         }else newWord += word1[i]      
//     }
//     return newWord
// }

// console.log(replacer("H*kim se* qa*erda*an?", 'anys'));

/*===========================3==============================*/


// function leftRotations(str) {
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str.slice(1) + str.slice(0, 1))
//         str = str.slice(1) + str.slice(0, 1)
//     }
//     return arr
// }

// console.log(leftRotations("asd"));

/*===========================4=============================*/  //399

function smallestTransform(num) {
    let count = num
    num += ''
    num = num.split('')
    for (let i = 0; i < num.length; i++) {
        let a = 0
        for (let k = i + 1; k < num.length; k++) {
            a += Math.abs(+num[i] - +num[k])
        } 
        if (count > a && a !== 0) {
            count = a
        }
       
    }
    return count
}

console.log(smallestTransform(153));



/*===========================5=============================*/

// function mapLetters(str) {
//     let obj = {}

//     for (let i = 0; i < str.length; i++) {
//         if (!obj[str[i]]) {
//             obj[str[i]] = [i]
//         }
//         else{
//             obj[str[i]].push(i)
//         }
//     }
//     return obj
// }

// console.log(mapLetters("illma"));










































