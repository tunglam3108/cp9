// let a;
// console.log(a);


// let b = 2;
// {
//     {
//         {
//             var a = 1;
//         }
//         console.log(b);
//     }
// }

// console.log(a);

// 
// toan tru
// 1.toan tu gan: =
// 2.toan tu so hoc: +, -, *,/
// 3.toan tu so sanh: >, <, ==, ===, >=, <=, !=, !== (1 == "1")
// 4.toan tu 3 ngoi: (<dieukhien>)?<thuc hien lenh neu dk dung><thuc hien lenh neu dk sai>
// 5.toan tu logic: &&, ||, ++a, --a, b++, b--;

/*gia thich 
++a : den cau lenh nay a da dc tang 1 don vi
--a : den cau lenh nay a da dc giam 1 don vi
b++: sau cau lenh nay b da dc tang len 1 don vi
b--: sau cau lenh nay b da dc giam xuong 1 don vi


// Example:
console.log(2 > 1 && 3 > 2 && 100 > 1 && -1 < -2 && 3 > 1); //&& su dung de tim dieu kien sai, neu 
console.log( 1 > 2 || 3 > 1 || 0 > 2); //|| su dung de tim dieu kien true, neu ko co => tra ve
//toan tu 3 ngoi*/

// let p = 3; 
// let q = 7;
// let r = 10;
// let result = ++p * q-- + --r + p++;
// //
// let result2 = result + --p * p-- + q++ + r--; 
// console.log("result2: ", result2);



// let str = "Hello";
// let updatedSTR = str++ + "World";
// console.log("updatedSTR: ", updatedSTR);/// khong haot dong voi string


// let number = [1,2,3,4,5];
// let i = 2;
// console.log(number[i++]);//3


///// ham mui ten: khai bao tong 2 so
// function sum(a,b){
//     return a + b;
// }


// const sum1 = (a, b) => {
//     return a + b;
// }


// // viet tat lai thanh nhu sau
// const sum2 = (a, b) => a + b;

// //ham ko tham so
// const alert1 = () => {
//     alert("Day la ham ko tham so");
// };


// alert1();

// console.log(
//     sum1(1,2)
// );


// let arr1 = [1,2,3];
// // let arr2 = arr1; ///ko su dung toan tu =  de sao chep mang
// let arr2 = [...arr1];
// arr2[3] = "da thay doi nhe"
// console.log(arr1);

// let arr3 = ["hi", "hello", "bong jua"];
// let arr4 = [...arr1, ...arr2, ...arr3];
// console.log("arr4: ", arr4);


//////Array function nang cao
let arr = [1,2,3,4,5];
///////////yeu cau in ra mang moi co cac gia tri ben trong mang gap doi mang cu;
// let arr2 = arr.map(item => item*2);
// console.log("arr2: ", arr2);

//////////yeu cau inra mang moi co chua cac gia trij la so chan trong mang cu;
let arr3 = arr.filter((item) => item%2 == 0);
console.log("arr3: ", arr3);