// /////Khởi tạo kiểu dữ liệu (đối tượng/lớp)
// class Nguoi{
//     ///Ham khoi tao thuoc tinh
//     constructor(name, age, gender, country, id, hobbies, job){
//         //Gan du lieu cho thyuoc tinh cua class
//         this._name = name;
//         this._age = age;
//         this._gender = gender;
//         this._country = country;
//         this._id = id;
//         this._hobbies = hobbies;
//         this._job = job;
//     }

//     cry(){
//         alert("I am crying");
//     }
//     gaming(){
//         alert("I am a pro player");
//     }
//     introduct(){
//         return `My name is ${this._name} & i am a ${this._job} for 10 years`;
//     }
// }

// // //Khai bao bien co kieu du lieu la Nguoi.
// // let TungLam = new Nguoi("DoTungLam", 16, "Male", "VN", "31082008", ["....."], "Student")

// // ///Im ra ten cau doi tuong vuoi khai bao

// // console.log(TungLam._name);

// // /////Goi phuong thuc

// // // TungLam.cry();

// // TungLam.introduct();





// //////Tinh ke thua cua lap trinh huong doi tuong OOP
// class HocSinh extends Nguoi{
//     constructor(name, age, gender, country, id, hobbies, job, school, classId, studentId){
//         super(name, age, gender, country, id, hobbies, job);
//         this._school = school;
//         this._classId = classId;
//         this._studentId = studentId;


//     }

//     introduct(){
//         return super.introduct() + `. And now I learning at ${this._school} voi ma lop hoc la ${this._classId}`
//     }
// }

// let TungLam = new HocSinh("DoTungLam", 16, "Male", "VN", "31082008", ["....."], "Student", "Mindx School", "NPS-JSI18-HB", "31082008");

// console.log(
//     TungLam._name
// );


// console.log(
//     TungLam.introduct()
// );



class PhanSo {
    constructor(tu, mau){
        this._tu = tu;
        this._mau = mau;
    }
    
    

    cong(PhanSoKhac){
       const tuMoi = this._tu*PhanSoKhac._mau + this._mau*PhanSoKhac._tu;
       const mauMoi = this._mau* PhanSoKhac._mau;
       return new PhanSo(tuMoi, mauMoi);
    }
}

let PhanSo1 = new PhanSo(1,2);
let PhanSo2 = new PhanSo(3,4);
console.log(
    PhanSo1.cong(PhanSo2)
);