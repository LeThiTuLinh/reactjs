// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
let arr=['Tìm','chuỗi','độ dài','nhỏ nhất'];
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
    // let min=arr[1];
    // for(let a of arr  ){
    //     if(min.length>a.length){
    //         min=a;
    //         console.log(a);
    //     }
    // }
// Tìm những chuỗi trong mảng có chứa giá trị text.
let text=prompt('nhap chuoi text');
let isExit=false;
for(let a of arr ){
    if(a===text){
        console.log('trong mảng có chuỗi chứa text'+a);
        isExit=true;
    }
}
if (isExist == false) {
    console.log("Khong co chuoi chua gia tri text")
}
// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).
