// +Truthy và falsy

// Các giá trị của Falsy:
// -false
// -0 (số không)
// -'' or "" (chuỗi rỗng)
// -null
// -undefined
// -NaN
// còn lại là truthy

// if(condition//truthy){
 //     //code
 // }

//TOÁN TỬ 3 NGÔI
//codition?code1:code2
                                                            // -Nếu n>5=>number=10
                                                            // -Nếu n<5=>number=-10
                                                            //n  nhập từ bàn phím

                                                            // let n=prompt('nhap n:');
                                                            // let number = n > 5 ? 10 :-10;
                                                            //console.log(number);

//Nullish operator : sử dụng nếu n là falsy hoặc truthy thì gán giá trị ,ko sử dụng đc với ĐK nhất định (như n>5 truthy thì gán giá trị a còn falsy thì gán giá trị b)
                                                            //Tạo 2 biến number và n , nếu n là giá trị truthy => number=n
                                                            //nếu n là giá trị falsy =>number=20
                                                            // let n;
                                                            // let number1=n||20;// phạm vi lớn hơn ??
                                                            // let number2=n??20;// n là null và undefine mới lấy là falsy ,còn lại là truthy
                                                            // console.log(number1);
                                                            // console.log(number2);


//ECMAScript2015 <=>ES6
//ECMAScript2023

// ARROW function
                                                            // function sum(a,b){
                                                            //     return a+b;
                                                            // }
                                                            // console.log(sum(3,5));
                                                            // //===
                                                            // const sum=(a,b)=>{
                                                            //     return a+b;
                                                            // };
                                                            // console.log(sum(3,5));
//Nếu chỉ có 1 dòng code  thì const sum=(a,b)=> a+b;
//Nếu chỉ có 1 dòng code và return về object thì const sum=(a,b)=> ( { a + b } );
//nên dùng từ khoán const để khai báo funtion

//Syntax tổng quát : 
// const/let nameFs=(parameter)=>{
//     //code
// }
//ko có context và cơ chế hosting 

//rest operator (dùng params vecter)
// chỉ dùng đc 1 lần trong funtion và phải để ở cuối

                                                            //Viết hàm tính tổng các số truyền vào
                                                            //-1,2.5.8.3;
                                                            //1,-4
                                                            //10,20,70,90
                                                            //1,2,3,4,5,6,7,8,9


                                                            // const sum =(a,b,...args)=> {
                                                        
                                                            //     let sumnumber = 0;
                                                            //     for (let mang of args ){
                                                            //         sumnumber += mang;
                                                                   
                                                            //     } 
                                                            //     return  a+b+sumnumber; 
                                                                 
                                                            // }  ;    
                                                            // console.log(sum(1,2,5,8,3));   
                                                            // console.log(sum(1,-4));                                             
                                                            // console.log(sum(10,20,70,90));                                             
                                                            // console.log(sum(1,2,3,4,5,6,7,8,9));     

//Spread Operator (dùng với mảng và object)
// trong object chỉ có 1 giá trị key duy nhất
//giúp trải phẳng (duyệt) từng phần tử cho vào mảng 
                                                            // // const listNumber1 = [1,2,3];
                                                            // // const listNumber2 = [...listNumber1];
                                                            // // listNumber[0]=10;
                                                            // // console.log('listNumber1:'+listNumber1);
                                                            // // console.log('listNumber2:'+listNumber2);
// // // thay vì phải dùng mảng rỗng xong duyêt phần tử  for(let element of arr1)

                                                            // // const listNumber1 = [1,2,3];
                                                            // // const listNumber2 = [4,...listNumber1,7,6];
                                                            // // console.log('listNumber1:'+listNumber1);
                                                            // // console.log('listNumber2:'+listNumber2);

                                                            // const student ={
                                                            //     age:15,
                                                            // };
                                                            // const student2={...student, name:'Tran Thi B', age:16};// Thay đổi giá trị của age=16
                                                            // student.name='nguyen A';
                                                            // console.log(student);
                                                            // console.log(student2);

//template string
// dùng để nối chuỗi hoặc xuống dòng 
                                                            // let birthday ='01/01/1895'
                                                            // let course='javascript'
                                                            //Bạn a sinh nhật ngày dd/mm/yyyy, môn học yêu thích là course
                                                            //const str="Bạn A sinh ngay "+birthday +' môn học yêu thích là '+course;
                                                            // ===
                                                            // const str=`Bạn A sinh ngay ${birthday} môn học yêu thích là ${course}`;

                                                            // muốn xuống dong mình có thể dùng kí tự đặc biệt \n hoặc dùng template string
                                                            // const str=`dòng1
                                                            // dong2
                                                            // dòng 2`;
                                                            // console.log(str);

//destructuring 
 //dùng với object                                                     
                                                        // const student={
                                                        //     age:20,
                                                        //     name: 'Tran Thi B',
                                                        // };
                                                        // //const age=student.age;// code bình thường
//Muốn lấy giá trị từ object để tạo một biến riêng biệt 
// muốn đổi sang một tên khác trong object
//gán giá trị mặc định (level)
                                                        // // const{age, name}=student;
                                                        // // tạo biến tuổi trùng với giá trị age trong object student
                                                        // const{age:tuổi ,name ,level /** có thể khởi tạo level=1 */}=student;
                                                        // student.age=35;
                                                        // console.log(age);//lỗi bởi vì mình đã đổi tên biến sang tuổi nên ko sử dụng đc nó nữa
                                                        // console.log(name);
                                                        // console.log(tuoi);
                                                        // console.log(level);//undefind , vì object chua có key level

// dùng với mảng
                                                        // const numbers=[1,2,3,4];
                                                        // const [number1,number2,number3]=numbers;//số 4 chưa lấy ra được
                                                        // console.log(number1);
                                                        // console.log(number2);
                                                        // console.log(number3);
                                                        // const[,,number]=numbers;//nếu muốn lấy giá trị ở vị trí thứ 3;
                                                        // console.log(number);
                                                        // const[,...number5]=numbers;//nếu muốn lấy các giá trị từ vị trí thứ 2 về sau
                                                        // console.log(number5);
// // dùng để swap các vị trí trong mảng
                                                        // const number6=[1,2];
                                                        // const[numberA,numberB]=number6
                                                        // const number7=[numberA,numberB];

//object.keys(): trả về các phần tử dạng mảng của key trong object
                                                        // console.log(object.keys(student));
//object.value(): lấy toàn bộ value trong object trả về dạng mảng
                                                        //  console.log(object.value(student));
// kiểm tra xemm key có tồn tại trong object hay chưa
                                                        //console.log(student.hasOwnProperty('level'));// trả lời true / false                                                        

