alert("xin chao")


// 3 từ khóa để khởi tạo biến 
//var
//let
//const

//1.var/let và const
    // từ khóa var dùng để khai báo 1 biến và biến đó có thay đổi giá trị
        /* var a=10;
        console.log(a);
        a=20;
        console.log(a);*/

    // từ khóa var dùng để khai báo 1 biến và biến đó có thay đổi giá trị
        /*let b=40;
        console.log(a);
        b=50;
        console.log(a);*/

    //từ khóa const(constaint) dùng để khai báo 1 biến hằng số và không thể thay đổi giá trị
        /*const c=100;
        console.log(c);
            c=200;
        console.log(c);*/
        /*let b;
        console.log(b);
        b=20;
        console.log(b);
    -khi khởi tạo biến let và var không nhất thiết phải luôn gắn giá trị khởi tạo
    -khi khởi tạo biến bằng const thì luôn gắn giá trị khởi tạo
        const c;
        console.log(c)*/
//2.var và let/const
    // var có cơ chế hoisting ,const và let không có cơ chế hoisting
        /* console.log(a);
        var a=10;
        console.log(a);
        =>var a;
        console.log(a);
        a=10;
        console.log(a);*/
    //scope : biến được khởi tạo bằng từ khóa var sẽ là global scope: dùng đc ở mọi phạm vi
        /*{
            var couse1 ="HTNL";
            let couse2 ="css";
            const couse3 ="js";
        }
            console.log(couse1);
            console.log(couse2);
            console.log(couse3);*/

    // khởi tạo biến có dữ liệu là number và string
        /* let c=10;
        let paragraph="đây là đoạn văn";
        let paragraph='đây là đoạn văn';
        let paragraph="đây là đoạn văn";*/

        //underfined : kiểu dữ liệu không xác định 
        // null: kiểu rỗng
        //boolean: true,false

    // toán tử number
        /* let a=500;
        let b=10;
        console. log(a +  -  *  /  % b): cộng ,trừ ,nhân ,chia, chia lấy phần dư
        console. log(a ** b): Lũy thừa a^b;
        console. log(a ++  b--): tăng a lên 1, giảm b xuống 1;*/
    // toán tử string :+ nối chuỗi 
        /* const textA ='hello';
        const textB ='hura';
        const textC= textA+textB;
        console.log(textc)*/
        /* let a=10;
        let b='20';
        let c =a+b : thành dữ liệu string  1020
        let c=a - * / b: thành kiểu dữ liệu number*/ 
    // toánn tử  so sánh 
        /*let a=10;
        let b='10'
        a bằng b hay không
        console.log (a==b):true vì chỉ so sánh giá trị
        console.log (a===b):false vì so sánh cả giá trị và kiểu dữ liệu
        a khac b hay không
        console.log(a!=b): false  vì không khacs nhau
        console.log(a!==b): true vì khác nhau về kiểu dữ liệu*/

    /* (a==b)&&(b==c); và
    (a==b)||(b==c); hoặc
    !(a==b);        phủ định*/


            /*Bài 1
            x = true, y = true, z = false

            x && y && z → false
            x && y && !z → true
            (x && y) || z → true
            (x && y) || !z → true
            x && (y || z) → true
            x && !(y || z) → false
            x && (y || !z) → true
            x && (!y || z) → false

            Bài 2
            name = ‘AAA’, age = 20, isGood = true

            age + 10 = 30
            age % 3 = 2
            name + ‘ BBB’ = 'AAA BBB'
            !isGood = false

            name == ‘aaa’ && age >= 20 → false
            name != ‘aaa’ && isGood → true
            !(age < 10) && !isGood → false
            Bài 4
            x = true, y = false, z = 10
            x && y → F 
            x && !y → T
            x && z == 10 → T
            (x && z == 10) → T
            !(x && z == 10) → F
            !(x && z == 50) → T

            x && y && z == 10 → F
            x && !y && z == 10 → T
            x || y || z == 10 → T
            (x && y) || z != 10 → F
            !(x && z == 10) || y → F


            Bài 3
            a = 10, b = 20, c = 30, d = '40'

            a + b + c =60  
            a - b / c = 9.3 
            a - (b * c) = -590
            d - (a * b) - c =-190
            a + b + c + d = 6040
            d + a + b + c = 40102030
            d + a - b + c =4020 
            a - b + d - c = -1040-30=-1070 
            = '-1040' - 30 = -1070
            d - c + a - b = 0 
            a * b + d * c = 1400
            */

/* if (dieu_kien){
   code
   }       */
