// ///một đối tượng date moi;
// let takeDate = new Date();

// ///Chung ta co the truyen gia trij khoi tao vao nhu: date, string, number nao nhu ngay, thanng

// let takeDate1 = new Date()
// let takeDate2 = new Date(value)
// let takeDate3 = new Date(dateString);
// let takeDate4 = new Date(year, month);
// let takeDate5 = new Date(year, month, day, hours, minutes, seconds, miliseconds);


// ////vi du cu the

let today = new Date();
console.log("today: ", today);

let birthDay = new Date('August 31, 2008 01:30:00');
console.log("birthDay: ", birthDay);

let birthDay2 = new Date('2008-08-31T01:30:00');
console.log("birthDay2: ", birthDay2);

let birthDay3 = new Date('2008,08,31');
console.log("birthDay3: ", birthDay3);


///short date: trong JS co 4 dinh dang co ban cua 1 chuoi ngay thang gom:
///short date, long date, full date, va ISO date


let shortDate1 = new Date('03-03-2024');
console.log("shortDate1: ", shortDate1);

let shortDate2 = new Date('03/03/2024');
console.log("shortDate2: ", shortDate2);

let shortDate3 = new Date('2024-03-03');
console.log("shortDate3: ", shortDate3);


let date1 = new Date("2024-03-22");
let date2 = new Date("2024-04-22");
let difference_In_Time =
date2.getTime() - date1.getTime();

console.log("difference_In_Time: ", difference_In_Time);

let difference_In_Days =
difference_In_Time/(1000 *3600 *24);
console.log("So ngay giua 2 ngay la: ", difference_In_Days);



///kiem tra 1 nam co phai nam nhuan hay ko

function isLeapYear(year){
    return (year % 4 == 0 && year %100 !== 0) || (year % 400 ==0);

}
console.log(isLeapYear(2024));
