// ////Khai bao class phan so
// class PhanSo {
//     //////ham khoi tao thuoc tinh
//     constructor(tu, mau){
//         this._tu = tu;
//         this._mau = mau;
//     }
//     ////Phuong thuc Set
//     setTu(tuMoi){
//         this._tu = tuMoi;
//     }   
//     setMau(mauMoi){
//         this._mau = mauMoi;
//     }
//     ////Phan thuc get
//     getTu(){
//         return this._tu;
//     }
//     getMau(){
//         return this._mau;
//     }

// ////Phuong thuc cong hai phan so
//     cong(ps){
//         let tu = this._tu * ps._mau + this._mau * ps._tu;
//         let mau = this._mau * ps._mau;

//         return new PhanSo(tu, mau);
//     }
//     tru(ps){
//         let tu = this._tu * ps._mau - this._mau * ps._tu;
//         let mau = this._mau * ps._mau;

//         return new PhanSo(tu, mau);
//     }
//     nhan(PhanSo){
//         let tu = this._tu * ps._tu;
//         let mau = this._mau * ps._mau;

//         return new PhanSo(tu, mau);
//     }
//     /////// a/b : c/d = a*d/b*c
//     chia(PhanSo){
//         let tu = this._tu * ps._mau;
//         let mau = this._mau * ps._tu;
//     }

//     ////Phuong thuc rut ngon phan so
//     rutGon(){
//         let a = this._tu;
//         let b = this._mau;
//         while(b !== 0){
//             let temp = b;
//             b = a%b;
//             a = temp;
//         }
//         let ucln = a;
//         return new PhanSo(this._tu/ucln, this._mau/ucln)
//     }

//     hienThiPhanSo(){
//         return this._tu + "/" + this._mau
//     }
// }

// let PhanSo1 = new PhanSo(1, 2);
// let PhanSo2 = new PhanSo(3, 4);

// let tong = PhanSo1.cong(PhanSo2)
// console.log(tong.rutGon().hienThiPhanSo());
// let hieu = PhanSo2.tru(PhanSo2)
// console.log(hieu.rutGon().hienThiPhanSo());
// let tich = PhanSo2.nhan(PhanSo2)
// console.log(tich.rutGon().hienThiPhanSo());
// let thuong = PhanSo2.chia(PhanSo2)
// console.log(thuong.rutGon().hienThiPhanSo());







////Bai 1
class HCN{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }

    CV(){
        let chuvi = (this._width + this._height) * 2;
        return chuvi
    }
    DT(){
        let dientich = this._width * this._height;
        return dientich
    }
    hienThiThongTin(){
        return 
    }
}

HCN1 = new HCN(2, 3)
HCN1.CV()   
console.log(HCN1.CV());
HCN2 = new HCN(3, 4)
HCN2.DT()
console.log(HCN2.DT());