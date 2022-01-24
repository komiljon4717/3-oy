/*===============================map===================================*/


// Array.prototype.myMap = function (callback) {
//     let safe = []
//     for (let i = 0; i < array.length; i++) {
//         let cond = callback(this[i], i, this)
//         if (cond) {
//             safe[safe.length] = this[i]
//         }
//     }
//     return safe
// }

// let array = [6, 5, 4, 3, 2, 1]
// let res = array.myMap(el => {
//     return el > 3
// })
// console.log(res);



/*===============================pop===================================*/


// Array.prototype.myPop = function () {
//     let removeNumber = this[this.length - 1]
//     this.length = this.length - 1
//     return removeNumber
// }

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.myPop());
// console.log(arr);


/*===============================shift===================================*/


// Array.prototype.myShift = function () {
//     let newArray = [...this]
//     let removeNum = newArray[0]
//     this.length = 0
//     for (let i = 1; i < newArray.length; i++) {
//         this[this.length] = newArray[i]
//     }
//     return removeNum
// }


// let arr2 = [1, 2, 5, 4, 5]
// console.log(arr2.myShift());
// console.log(arr2);


/*============================unshift==================================*/

// Array.prototype.myUnshift = function (...elements) {
//     let newArr = [...this]
//     this.length = 0
//     this.push(...elements, ...newArr)
//     // return this
// }


// let numbers = [4, 5, 6, 7, 8, 9]
// numbers.myUnshift(1, 2, 3);
// console.log(numbers);



/*============================slice==================================*/

// Array.prototype.mySlice = function (start, end = this.length + 1) {
//     let newArray = []
    
//     if (start <= 0 && end < 0) {
//         start = Math.abs(start)
//         end = Math.abs(end)
//         let copyArr = []

//         for (let k = this.length - 1; k >= 0; k--) {
//             copyArr[copyArr.length] = this[k]
//         }

//         console.log(copyArr);
//         for (let j = 0; j < copyArr.length; j++) {
//             if (j >= end && start > j) {
//                 newArray[newArray.length] = copyArr[j]
//             }else if (j === start) {
//                 return newArray.reverse()
//             }             
//         }
//     }else{

//         for (let i = 0; i < this.length; i++) {
//             if (i >= start && end > i) {
//                 newArray[newArray.length] = this[i]
//             }else if (i === end) {
//                 return newArray
//             }     
//         }

//     }
//     return newArray
// }

// let array1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"]

// console.log(array1.mySlice(-3, -1));






/*===============================trim===================================*/

// String.prototype.myTrim = function () {
//     let newstr = ''
//     for (let i = 0; i < this.length; i++) {
//         if (this[i - 1] !== " " && this[i + 1] !== " " || this[i] !== ' ') {
//             newstr += this[i]
//         }
//     }
//     return newstr
// }

// let a = "       salom dunyo       "
// console.log(a.myTrim());


/*===============================split===================================*/

// String.prototype.mySplit = function (char, limit) {
//     let strArr = []
//     let str = ''
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === char) {
//             strArr.push(str)
//             str = ''
//         }else{
//             str += this[i]
//         }
//     }
//     strArr.push(str)
//     return strArr;
// }


// let text = "How are you doing today?";

// console.log(text.mySplit('H'));

// console.log(text.split('H'));














/*=========================homework========================*/


// function filter(arr, conf) {
//     let store = []
    
//     for (let i = 0; i < arr.length; i++) {
//         let cond = Object.keys(conf).length
//         for (const key in arr[i]) {
//             if (arr[i][key] === conf[key]) {
//                 count++
//             }
//         }

//         if (count === cond){
//             store.push(arr[i])
//         }   
//     }

//     return store;
// }



// let users = [
//     { name: 'ali', job: 'coder', age: 25, gender: 'male' },
//     { name: 'hikmat', job: 'coder', age: 20, gender: 'male' },
//     { name: 'abror', job: 'dentist', age: 12, gender: 'male' },
//     { name: 'malika', job: 'coder', age: 32, gender: 'female' },
//     { name: 'ali', job: 'designer', age: 24, gender: 'male' },
//     { name: 'hafsa', job: 'teacher', age: 20, gender: 'female' },
// ]


// let t = [
//     {x:10, y: 20, z:4},
//     {x:10, y: 44, z:13},
//     {x:17, y: 45, z:77}
// ]

// console.log(filter(users, {name: 'malika', gender: 'female'}));




























