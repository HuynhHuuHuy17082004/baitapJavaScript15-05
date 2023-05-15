/*Bài 1 : Tính tiền lương*/ 
/*
//Mô hình 3 khối //
//Input
1.Đề cho tiền lương 1 ngày là 100.000
2.Đề cho công thức là tiền lương = lương 1 ngày * số ngày làm
//process
1.Dom Lương 1 ngày 
2.Dom số ngày làm
3.Dom button
4.gắn thực thi cho button
5.dùng những dữ liệu đã Dom để tính kết quả rồi gán vào biến
//Output
1.Dán biến vào nút button đã Dom ra trước đó 
*/

var luongMotNgay = document.getElementById("luongMotNgay");
luongMotNgay.value = "100000";
var songaylam = document.getElementById("soNgayLam");
var btn = document.getElementById("buttonTinhLuong");
btn.onclick = function(){
    
var tittle;
tittle = 'Tiền lương nhân viên:'
var ketqua ;
var result = document.getElementById('result');
ketqua = songaylam.value * luongMotNgay.value;
result.value=(' Tiền lương nhân viên : ') + ketqua + (' đồng');

};




/*Bài 2 : Tính giá trị Trung Bình*/
/*
//Mô hình 3 khối//
//Input
1.Đề cho bảo nhập vào 5 số thực 
2.Theo công thức tính giá trị trung bình bằng tổng 5 số cộng lại chia 5
//Process
1.DOM tới số thực 1 lấy ra giá trị value của nó 
2.DOM tới số thực 2 lấy ra giá trị value của nó 
3.DOM tới số thực 3 lấy ra giá trị value của nó 
4.DOM tới số thực 4 lấy ra giá trị value của nó 
5.DOM tới số thực 5 lấy ra giá trị value của nó 
6.Tính giá trị Trung Bình rồi gán vào biến
//OUTPUT
7.Cuối cùng là DOM tới biến muốn hiển thị kết quả rồi gán biến kết quả vào biến đó
*/
var btnTinhGiaTriTB = document.getElementById('buttonTinhGiaTriTB')

btnTinhGiaTriTB.onclick=function(){
    var sothuc1 = document.getElementById('sothuc1').value;
    var sothuc2 = document.getElementById('sothuc2').value;
    var sothuc3 = document.getElementById('sothuc3').value;
    var sothuc4 = document.getElementById('sothuc4').value;
    var sothuc5 = document.getElementById('sothuc5').value;
var giatriTB;
giatriTB = (parseFloat(sothuc1) + parseFloat(sothuc2)+ parseFloat(sothuc3)+ parseFloat(sothuc4) + parseFloat (sothuc5) )/5;
document.getElementById('resultGiaTriTB').value=(' Giá trị Trung Bình: ') + giatriTB;
}


/* Bài 3 : Quy đổi tiền
//Mô hình 3 khối
//Input
1.Đề cho 1 USD bằng 23.500 VND 
2.Công thức lấy số tiền USD nhân với số VND quy đổi ra 1 USD
//PROCESS
1. DOM tới các phần tử cần lấy các thành phần để tính toán
2. Khai báo biến rồi gán phép tính đã tính vào trong 
//OUTPUT
1. DOM tới biến muốn chứa kết quả rồi gắn biến có chứa kết quả vào trong biến vừa DOM tới  
*/
var sotien1USD = document.getElementById('sotien1USD');
sotien1USD.value='23500';
var buttonTinhUSD=document.getElementById('buttonTinhUSD');
buttonTinhUSD.onclick=function(){
    var soUSD = document.getElementById('soUSD').value;
    var ketquaquydoi ;
    ketquaquydoi = sotien1USD.value * soUSD;
    var resultTinhUSD = document.getElementById('resultTinhUSD');
    resultTinhUSD.value= ' Số tiền VNĐ sau khi quy đổi: ' + (ketquaquydoi)+ ' VNĐ';

}


//BÀI 4 : TÍNH CHU VI DIỆN TÍCH



var buttonTinhGiaTriHCN = document.getElementById('buttonTinhGiaTriHCN');
buttonTinhGiaTriHCN.onclick=function(){
    var chieurong = document.getElementById('chieurong').value;
    var chieudai = document.getElementById('chieudai').value;
    var chuvi;
    chuvi=(parseFloat(chieurong) + parseFloat (chieudai))*2;
    var dientich;
    dientich=(chieudai*chieurong);
 document.getElementById('resultGiaTriHCN').value=' Chu vi HCN là: '+ chuvi + 'm';
 document.getElementById('resultGiaTriHCN2').value=' Diện Tích HCN là: '+ dientich +' métvuông';
}



//Bài 5 : Tính tổng 2 ký số
document.getElementById('buttontinhtongkyso').onclick=function(){
    var kyso = +document.getElementById('kyso').value; 
    var kyso1 = kyso % 10;
    var kyso2 = Math.floor(kyso/10);
    var tong2kyso;
    tong2kyso = kyso1 + kyso2 ;
    document.getElementById('resulttinhtongkyso').value=' Tổng của 2 ký số = '+ tong2kyso;
}



