// // str split - X
// // str join - X
// // str indexOf - X
// // Array map - X
// // Array find - X
// // Array filter - X
// // Array includes*** - X
// // Array reduce*** - X

// //IndexOf___________________________________________________________________________________________
// function Idx (ar, e, from = 0){
//   for (let i = from; i < ar.length; i++) {
// 	    if (ar[i] === e) {
//             return i
//         }
//     }
//  return '-1'
// }
//  const arr = [1,2,3,4,2];
// const ar = 'hi hy'
// let result = Idx(ar, 'h', 1)
// let result1 = Idx(arr, 2)
//  console.log(result)

// //Map___________________________________________________________________________________________
// function  CustMap  (arr, callbackFunc) {
//     let newArr = [];
//     let x = arr.length;
//     for (let i = 0; i < x; i++) {
//       let counter = callbackFunc(arr[i]);
//       newArr.push(counter);
//     }
//     return newArr;
//   };

//   function callbackFunc (elem) {
//     return elem*2;
//   }

//   let arr = [1997, 2000, 2020];
//   console.log(CustMap(arr, e => e * 2));
//   console.log(CustMap(arr, callbackFunc) )

// //Filter___________________________________________________________________________________________
// function  CustFilt (arr, cb) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// // function callbackFunc (elem) {
// //       return elem.length > 8;
// //     }

// // arr = [1, 2, 3]
// // console.log(CustFilt(arr, callbackFunc) )
// // // console.log(CustFilt(arr, e => e > 1));

// arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(CustFilt(arr, callbackFunc) )

// //Find___________________________________________________________________________________________
// function CustFind (arr, callbackFunc) {
//   for (var i = 0; i < arr.length; i++) {
//       if ( callbackFunc(arr[i]) === true ) {
//           return arr[i];
//       }
//   }
// }

// function callbackFunc(elem) {
//   return elem > 20;
// }
//  let arr = [3, 10, 18, 20];
// //  console.log(CustFind(arr, callbackFunc) )
//  console.log(CustFind(arr, e => e > 20));
//Join___________________________________________________________________________________________
// function join(arr, sep) {
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (i != arr.length - 1) {
//       if (sep == null) {
//         res += arr[i] + ",";
//       }
//       if (sep || sep == "") {
//         res += arr[i] + sep;
//       }
//     } else {
//       res += arr[i];
//     }
//   }
//   return res;
// }
// let arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//  let res = join(arr,'')
//  console.log(res)

//split___________________________________________________________________________________________
// function CustSplit (elem, splitVal) {
//   const outputArr = [];
//   let string = this;
//     string = elem;
//   let nextVal = '';
//   const splitlength = splitVal.length;
//   let i = 0;

//   if (splitVal === "") {
//     for (let i = 0; i < string.length; i++) {
//       outputArr.push(string[i]);
//     }
//     return outputArr;
//   }
// while(i < string.length) {
//   // When the current character is same as splitVal's first character
//   if (string[i] === splitVal[0]) {
//     let split_length_remaining = splitlength - 1;
//     let split_length_passed = 1;
//     let similarSplit = string[i];
//     while(split_length_remaining) {
//       if (string[i + split_length_passed] === splitVal[split_length_passed]) {
//         similarSplit += string[i + split_length_passed];
//         split_length_passed++;
//         split_length_remaining--;
//       } else {
//         break;
//       }
//     }
//     if (!split_length_remaining) {
//       outputArr.push(nextVal);
//       nextVal = '';
//     } else  {
//       nextVal += similarSplit;
//     }
//     i = i + split_length_passed;
//   } else {    // When the current character is different from `splitVal` 's first character
//     nextVal += string[i];
//     i++;
//   }
// } outputArr.push(nextVal);
//  return outputArr;
// } 
// const str = 'How are you doing today';
// console.log(CustSplit(str, ' '))
// console.log(str.split(' '));

//includes___________________________________________________________________________________________
// function CustInclude (arr, e, from = 0){
//   for (let i = from; i < arr.length; i++) {
// 	    if (arr[i] === e) {
//             return true
//         }
//     }
//  return 'false'
// }
// let arr = [1997, 2000, 2020];
// console.log(CustInclude(arr,1997,2))
// console.log(arr.includes(1997,2))

//reduce___________________________________________________________________________________________
// function CustReduce (data, cb, initialValue) {
//   if(!initialValue) {
//     let value = data[0]
//      for(let i = 1; i < data.length; i++) {
//         value = cb(value, data[i])
//       } 
//     return value
//   } else {
//     let value = initialValue
//      for(let i = 0; i < data.length; i++) {
//         value = cb(value, data[i])
//       } 
//     return value
//   }
// }
// function cb (a,b){
// return a+b;
// }

// // let arr = [1997, 2000, 2020,3333];
// // console.log(CustReduce(arr, cb))  








