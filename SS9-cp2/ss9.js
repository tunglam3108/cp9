////Ôn tập về Date()

///Khai báo 1 biến có KDL Date();
// let currentDate = new Date();
// console.log(currentDate);

// const specificDate = new Date("2024-03-29");

// const customDate = new Date(2018,11,24,10,33,30,0);
// console.log("customDate: ", customDate);

/*Gioi thieu kieu thuc: setInterval: la 1 phuong thuc dc su dung
de lap lai 1 ham hoac thuc thi mot doan ma voi 1 khoan thoi gian
co dinh giua moi lan goi.

Cu pháp và tham số
setInterval(function, miliseconds): Gọi hàm hoặc thực thi mã
sau mỗi hkoangr thời gian (dc đo = đơn vị mili giây)

*/


// const intervalID = setInterval(myCallback, 1000,);
// console.log("intervalID: ", intervalID);

// function myCallback(a,b){
//     console.log("In ra myCallback");
//}


/*
intervalID: la 1 so duy nhat xac dinh khoan thoi gian,
cho phep ban huy bo bang cach goi ham clearInterval()

De huy 1 khoan thoi gian, su dung ID tra ve tu setInterval()
*/


// const myInterval = setInterval(myFunction, 2000);
// clearInterval(myInterval)


/// Vi du hien thi thoi gian giong voi dong ho so


const intervalID = setInterval(updateTime, 1000);

function updateTime(){
    const date = new Date();

    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}