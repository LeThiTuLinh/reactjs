//khởi tạo object
    // const computer={
    //     key1: value1,
    //     key2:value2,
    //     keyn:valuen
    // }
    // const computer={
    //     name:"lenovo thinkpad",
    //     price:10,
    //     vender:"lenovo",
    //     color:'purple'
    // };

    //cách 2 để khởi tạo object

// truy xuất dữ liệu
    // Cách 1:dùng khi biết rõ key
    //console.log(computer.price);==console.log(computer['price']) - trong ngoặc vuông cần có dấu nháy 

    // cách 2: dùng khi key là gia trị của biến khác, nếu key là một số hặc 1 chuỗi/ có kí tự đặc biệt thì ko dùng đc cách 1
    //==console.log(computer['price']) - trong ngoặc vuông cần có dấu nháy
    //let price='abc'
    //console.log(computer[price]) - undefine

//update: thay đổi giá trị
// const student = {
// 	name: 'Nguyễn Văn A',
//     gender: 'girl'
// };
// console.log(student);
// student['name'] = 'Trần Thị B';
// //student.name = 'Trần Thị B';
// // set thêm 1 giá trị
// student.age = 15;
// console.log(student);
// //xóa giá trị
// delete student.gender;
// console.log(student);

// const listStudent = [
// 	{
// 		name: 'Nguyễn Văn A',
// 		gender: 'girl',
// 	},
// 	{
// 		name: 'Trần Thị B',
// 		gender: 'girl',
// 		skills: ['C++', 'Python'],
// 	},
// ];
// console.log(listStudent[1].skills[0]);


// duyệt object
// const student={
//     name:'Trần Thị B',
//      gender:'girl',
//      skills:['c++','python'],
// };
// // dùng for in để in lần lượt 
// for(let key in student){
//     console.log(key);
//     //console.log(student[key]);
// }

// sự khác nhau giữa kiểu dữ liệu tham chiếu và kiểu dữ liệu nguyên thủy ;
// -nguyên thủy: gán giá trị :
// arr1[2,1,3];
// arr2=arr1;
// -tham chiếu : gán địa chỉ ô nhớ 
// arr1[2,1,3];
// arr2=arr1;
// Nếu muốn dùng tham chiếu để gán gia trị thì :
// const arr1=[1,2,3];
// const arr2=[];
// for(let element of arr1){

// };



                                               //FUNCTION: khi cần sử dụng lại
// function nameFS(parameter1,...parameterN: tham số truyền vào hàm){
//     //code block: đoạn code cần đóng gói
// }


// tính tổng các số từ A->N
//A=1;N=10;
//A=-20;N=100;
//A=1;N=500;
//A=6;N=90;

// cách 1: dùng vòng lặp for
//cách 2: dùng function
// function calSum(A,N){
//     let sum=0;
//     for(let i=A;i<=N ;i++){
//         sum += i;
// }
//      console.log(sum);
//     }
//     calSum(1,10);
//     calSum(-20,100);
//     calSum(1,500);
//     calSum(6,90);

// function longer(name){
//     // console.log('hello '+ name);
//      return 'hello '+ name;
// }
// const text=longer('Văn A');
// longer('Văn A');
// console.log(text);

  
//Ex
//Bài 1
// function a(name){
//     console.log("hello word "+ name);
// }
// a('Nguywn A')

//bài 2
// function c(a,b){
//     console.log((a+b)**2);//in ra màn hình 
//return (a+b)**2 // đầu ra 
// }
// c(2,1)  // in ra màn hình
//console.log(c(3,4))// đâu rA hoặc trả về

//Bài 3
// let a=Number(prompt("nhap số a "));
// function d(){
//     let a=Number(prompt("nhap số a "));
//     if(a>0){
//         console.log(a);
//     }else{
//         return a;
//     }
// }
// d();

// function A(){
//     console.log('functionA');
// }
// function B(callback){
//     callback();// gọi hàm thông qua parameter
//     console.log('functionB');
// }
// B(A)

//setTimeout(callback,n) : thực hiện một nhiệm vụ sau n milisecond 1000ms=1s
// function longer(){
//     console.log('text timeout')
// }setTimeout(longer,2000)
//c2:
// setTimeout(function(){
//     console.log('text timeout');
// },3000);

//setInterval(callback,n): thực hiện nhiệm vụ theo chu kì sau n millisecond

// function longer(){
//     console.log('text timeout')
// }setInterval(longer,2000)
//c2:
// setInterval(function(){
//     console.log('text timeout');
// },3000);// Nó sẽ chạy liên tục ko dừng lại , muốn dừng phaie dùng clearInterval
//clearIntarval 
