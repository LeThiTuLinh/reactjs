//bài 1, In ra dãy số từ 1 đến 500.
    /*for(let i=1;i<=500;i++) {
        console.log(i);
    }*/

//bài 2,In ra các số chia hết cho 2 và 3 từ 1 đến 300.
     /*for(let i=1;i<=300;i++) {
        if(i%2==0 && i%3==0){
            console.log(i);
        }
    }*/
// bài 3,Tính tổng các số chẵn trong đoạn [-30, 50].
    /*for(let i=-30;i<=50;i++){
        if(i%2==0){
            let s=0;
            s=s+i;
        console.log(s);
        }
    }*/
// bài 4,Nhập vào số n. Tính giai thừa của số n.
    /*
    let n=Number(prompt("Nhạp n:"));
    let gt=1;
    for(let i=gt; i<=n;i++){
        gt=gt*i;
    }
    alert(gt);
    */
//Bài 5, Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x. 
    /*let a=3;
    let b=2;
    while(a>b){
        a=Number(prompt("nhap a:"));
        b=Number(prompt( "nhap b:"));
    }
    let x=Number(prompt("Nhạp x:"));
    if(x>=a && x<=b){
        for(let i=a;i<=b;i++){
            if(i % x ==0){
                console.log(i);
            const min=Math.min(...i);
                console.log(min);
            }
        }
    }*/


//Bài 6, Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau:

    /*let n=1; 
    while (n<2){
        n=Number(prompt("Nhạp n:"));
    }
    let s=0;
    for(let i = 1; i <= n; i++){
    s =s+ 1/(i*(i+1));
    }
    console.log(s);*/
    
    

//7. Nhập vào số n. Hãy in ra số ước của n.
    /*let n=Number(prompt("Nhạp n:"));

    for(let i = 1; i <= n; i++){
        if(n % i === 0) {
            console.log(i);
        }
    }*/

//8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
        /*let n=Number(prompt("Nhạp n:"));
        if(n>1 && n%1==0 && n %n==0){
            console.log("n là số nguyên tố");
        }else{
            console.log("n khong phai là số nguyên tố");
        }*/


//9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
    /*let s = prompt("Nhap chuoi s chi gom chu so : ")
    let l = Number(prompt("Nhap so l: "))

    while (s.length < l)
    {
        s= '0'+ s;
    }
    alert(s);*/

//10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.
    /*let m = -2;
    let n = -2;
    while (m < 0 || n < 0) {
    m = Number(prompt("Nhap so m: "))
    n = Number(prompt("Nhap so n: "))
    }
    let UCLN=1;
    for(let i = 1; i <= m && i <=n ; i++){
    if(m % i===0 && n % i=== 0){
        UCLN=i;
        }
    }
    alert(UCLN);*/


//11. Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.
/*let m = -2;
let n = -2;
 while (m < 0 || n < 0) {
   m = Number(prompt("Nhap so m: "))
   n = Number(prompt("Nhap so n: "))
}
let UCLN=1;
for(let i = 1; i <= m && i <=n ; i++){
if(m % i===0 && n % i=== 0){
    UCLN=i;
    }
}
let BCNN=1;
BCNN=(m*n)/UCLN;
alert(BCNN);*/

/*12. Trò chơi đoán số:
Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
*/
/*let correct = Math.floor(Math.random() * 100);
let answer = Number(prompt("Hay nhap so ban muon: "))
for(let i=1;i<=5;i++){
    if(correct===answer){
        alert("Chúc mừng bạn đã đoán đúng");
        break;
    }else{
        
        answer=Number(prompt("Rất tiếc! bạn đã đoán sai .Hãy nhập lai: "));
    }
}alert("Bạn đã thua cuộc,số đúng là: "+ correct );*/

//13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
    /*let n=11;
    while(n<2 ||n>10){
        n=Number(prompt("nhap n:"));
    }
    for(let i=1;i<=10;i++){

        console.log(n,'x',i,'=',n* i);
    }*/



//14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
/*let n=1;
while(n<2){
    n=Number(prompt('Nhap n:'));
}
for(let i=1;i<=n;i++){
    for ( let j = 1; j <= n; j++){
        console.log("*");
    }  
    console.log("\n");
} */

//15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
let m=Number(prompt("nhap m:"));
let n=Number(prompt("nhap n:"));
for (let i = 1; i <= m; ++i){
   for (let j = 1; j <= n; ++j){
      console.log("*");
}

}
//16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
/*let n=2;
while(n<3){
    n=Number(prompt('Nhap n:'));
}
for(let i=1;i<=n;i++){
    for ( let j = 1; j <= i; j++){
    console.log ("*");
    }
}*/

/*17. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
Nếu BMI < 18.5 → in ra “Nhẹ cân”
Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
Nếu 23 <= BMI < 25 → in ra “Thừa cân”
Nếu BMI >= 25 → in ra “Béo phì”*/
   /* let w = Number(prompt('nhap can nang W'));
    let h = Number(prompt('nhap chieu cao h'));
    console.log("w ", w);
    console.log("h ", h);
    const m= w /(h*h);
    console.log('m:' , m);

    if(m < 18.5){
        alert ("nhẹ cân");
    } else if( 18.5<=m && m<=23){
        alert("binh thường");
    }else if( 23<=m && m<=25){
        alert("Thùa cân");
    } else{
        alert("béo phì");
    }*/








                // nhap từ bàn phím so nguyen n
            //in ra màn hình tong 2 só đó 
                    /* 
                    let n= number(prompt('mời bạn nhap n'));
                    let m=number(prompt('mời bạn nhap m'));

                    console.log(n+m);*/

                /*let w = Number(prompt('nhap can nang W'));
                let h = Number(prompt('nhap chieu cao h'));
                console.log("w ", w);
                console.log("h ", h);
                const m= w /(h*h);
                console.log('m:' , m);

                if(m < 18.5){
                    alert ("nhẹ cân");
                } else if( 18.5<=m && m<=23){
                    alert("binh thường");
                }else if( 23<=m && m<=25){
                    alert("Thùa cân");
                } else{
                    alert("béo phì");
                }*/

            // tìm hiểu Switvh-case

            //vong lặp
            /*for(let i= 100; i>= 1; i--) {
                console.log(i);
            }*/
            /* c1:
            for(let i=1; i<=100;i++)  
            {
                if(i%2===0){
                    console.log(i);
                }
            }
            c2
            for(let i=2;i<=100, i=i+2)
            console.log(i);*/

            // in ra một số ngẫu nhiên ra màn hình , tới khi số đấy <5 thì dừng lại 
            /*let theNumber=10;
            while(theNumber>=5){
            theNumber= Math.floor(Math.random()*10);
                console.log(theNumber);
            }*/
            /*let theNumber=1;
            while(theNumber<=200)
            {
                theNumber=theNumber+1;
                console.log(theNumber);
            }*/

            /*let x=101;
            let y=-10;
            while((x<0||x>100)||(y<0 ||y>100)||x>y ){
                x=Number(prompt("nhap x:"));
                y=Number(prompt( "nhap y:"));
            }
            while(x<y){
                console.log('x:',x);
                console.log('y:',y);
                x++;
                y--;
            }*/

            /*for(let i=1;i<=3;i++){
                if(i===2){
                    continue;// bỏ qua bước này nhảy qua bước tiếp theo
                    break;// thoát khỏi vòng lặp 
                }
                console.log(i);
            }*/

