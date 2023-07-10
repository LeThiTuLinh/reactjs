                                                                                            // dùng for thay cho while
                                                                                            // for(...;true;..){
                                                                                            //     if(condition){
                                                                                            //         code
                                                                                            //         break;
                                                                                            //     }
                                                                                            // }

                                                                                            // Kiểu dữ liệu nguyên thủy:5 kiểu;
                                                                                            // kiểu dữ liệu tham chiếu; array,object;

// cách khởi tạo arr
    // cách 1
        // let arr=[]; mảng rỗng
        // let arr=[1,2,3,"a",null,undefined,true,[4,5,6]];
    // cách 2 
        // let arr = new Array();
        // console.log(arr)

                                                                                            // CRUD:  C: CREAT
                                                                                            //        R:READ
                                                                                            //        U:UPDATE
                                                                                            //        D:DELETE


// let arr=[1,2,3,"a",null,undefined,true,[4,5,6]];
    // console.log(arr);
// // thay đổi một phần tử trong mảng
    // arr[0]='một';
    // console.log(arr);
// //Kiểm tra độ dài của mảng 
    // console.log(arr.length)
// //lấy lần luợt từng phần tử ( duyệt mảng)
    //cách 1:lấy đc index(vị trítrí)
        // for(let i=0;i< arr.length;i++){
        //     consoel.log(i);
        // }
    //cách 2: ko lấy đc index ,chỉ lấy đc giá trị
        // for(let number of arr){
        //     console.log(number);
        // }

// let arr=[1,5,6,8];
// console.log(arr[0],arr[3]);
// console.log(arr[3]);

// let c=arr[1]+arr[3];
// console.log(c);

// let a=arr[1];
// arr[1]=arr[3];
// arr[3]=a;
// console.log(arr);


//Bài 1
// let arr=[1,5,6,8];
// for(let i=0;i< arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
//     }


//Bài 2
// let arr=[1,5,6,8];
// let sum=0;
// for(let i=0;i< arr.length;i++){
//     sum +=arr[i]
    
//     }
//     console.log(sum);

//BÀI 3: TÌM PHẦN TỬ NHỎ NHẤT TRONG MẢNG
// let arr=[1,5,6,8];
//  let min=arr[1];
//  for (let number of arr){
//     if( number<min){
//         min=number;
//         console.log(min)
//     }
//  }


                                                                    //Thêm phần tử vào mảng 
                                                                    // - đầu mảng :<tên mảng>.unshift(...,..,..)
                                                                    // - cuối mảng:<tên mảng>.push(...,...,)
//  let arr=[1,5,6,8];
//  console.log(arr);
// // arr.push(2,15);
//  arr.splice(1,0,3);
// console.log(arr)

                                                                    // xóa phần tử tròng mảng , 
                                                                    // -đầu mảng:<tên mảng>.shift() 
                                                                    // -cuối mảng:<tên mảng>.pop() chỉ xóa đc 1 phần tử , muốn xóa nhiều phần tử cùng lúc phải pop nhiều lần 

                                                                    // splice
                                                                    // -dùng splice để xóa phẦN tử ở bất kì đâu trong mảng
                                                                    // -splice(index,deleteCount: số lượng phần tử muốn xóa )
                                                                    // --arr.splice(2,1);//2 là vị trí index
                                                                    // --Nếu số lượng phần tử muốn xóa >=2 thì nó sẽ xóa phần tử tiếp theo sau vị trí đấy
                                                                    // --arr.splice(2):  deleteCount ko có gì nó sẽ xóa hết phần tử phía sau
                                                                    // --arr.splice(2,0): mảng không thay đổi;
                                                                    // --arr.splice(arr.length-1,1): xóa phần tử cuối;


                                                                    // -dùng splice để thêm phần tử
                                                                    // -splice(index,deletecount,phần tử thêm);
                                                                    // --deleteCount=0 thì thêm phần tử vào 
                                                                    // --deleteCount=1 thì xóa phần tử ở index và thay phần tử thêm vào

// let arr=[1,2,5,8,9];
// tính tích các phần tử trong mảng đó
// let a=1;
// for(let i=0;i<arr.length;i++){
    
//     a *=arr[i];
//     }
//     console.log(a);

// tìm số nhỏ nhất chia hết cho 2 
// let arr=[1,2,5,8,9];
// let min=arr[1];
// for(let number of arr){
//     if(number%2==0 ){
//         if( number<min){
//             min=number;
//             console.log(min);
//         }
//     }
// }

//tính gía trị lớn nhất chia hêts cho 3
// let arr=[1,2,5,8,9];
// let max=arr[1];
// for(let number of arr){
//     if(number>max){
//         if(number%3==0){
//             max=number;
//             console.log(max);
//         }
//     }
// }

// tính giá trị trung bình của mảng
// let arr=[1,2,5,8,9];
// let sum=0;
// let avg=1

// for(let number of arr){
//     sum +=number;
//     avg=sum/arr.length;
// }
// console.log(avg);


// lọc ra các số nguyên tố trong mảng
// let arr=[1,2,5,8,9];
// for(let number of arr){
//     console.log(number);
//     let count=0;
//     for(let i=1;i<=number;i++){
//         if(number % i===0 ){
//             count +=1;
//            } 
//     }
//     }
//     if(count===2){
//         conssole.log(number,"là số nguyên tố");
//     }else{
//         conssole.log(number,"không phải là số nguyên tố");

//     }

// // kiểm tra xem tất cả phần tử trong mảng lớn hơn 20 không
// let isExit=true;
// for(let number of arr){
//     if(number<=20){
//         isExit=false
//         break;
//     }
// }
// if(isExit ===true){
//     console.log('phần tử trong mảng lớn hơn 20');
// }else{
//     console.log('phần tử trong mảng nhỏ hơn 20');

// }

//kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
// let arr=[1,2,5,8,9];
// let isExit=true;
// for(let number of arr){
//     if(number<=10){
//         isExit=false
//         break;
//     }
// }
// if(isExit ===true){
//     console.log('có phần tử nhỏ hơn 10');
// }else{
//     console.log('không có phần tử nhỏ hơn 10');

// }

//Nhập vào số n cho đến khi n là 1 số trong mảng s.
//cách 1
// let n=Number(prompt("nhap n:"));
// let arr=[1,3,5,7,6,2];
// for(let number of arr){
//     if(number==n){
//          console.log(n,"là số có trong mảng");
//          break;
//     }else{
//         n=Number(prompt("nhap n:")); 
//     }
    
// }

// cách 2:dùng icludes
//  let arr=[1,3,5,7,6,2];
// // console.log(arr.includes(-10));
// let n;
// do{
//     n = Number(prompt('Mời bạn nhập n:'));
// } while (arr.includes(n) === false);








