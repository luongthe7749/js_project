// alert('hi javascrip basic')

// khai bao bien


// var age='26'

// goi ham thong bao
// alert(fullName)
// alert(age)

// hàm cơ bản trong js

/**
 * Alert
 * Console
 * Confirm
 * prompt
 * Set timeout
 * Set interval
 */

// var fullName = 'luong van the'

// console.log(fullName) // dùng để debug trong console

// confirm('Xac nhan ban du tuoi') // dùng để xác thực




// prompt('Xac nhan ban du tuoi') // có ô imput

// setTimeout(function() {
//     alert('thong bao')
// }, 1000) // 1000 là mili giây. sau đó sẽ gọi hàm alert

// var timerId =  setInterval(function() {
//     console.log('day la log '+ Math.random())
// },1000)  // cứ 1000 mili giây, hành động console.log sẽ được lặp lại 1 lần

// // Clear intervals sau 6 giây khi dùng hàm setTimeout() kết hợp với clearInterval()
// setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000);



/**
 * giới thiệu về toán tử trong js
1. toán tử số học
2. toán tử gán
3. toán tử so sánh
4. toán tử logic
 */


/**
 toán tử số học
 + cộng 
 - trừ
 * nhân
 ** lũy thừa (mũ)
 / chia
 % chia lấy số dư
 ++ tăng 1 giá trị số
 -- giảm 1 giá trị số


 */

 // 2. toán tử gán

//  var a=1
//  var b=2
//  var c = a+b

//  console.log(c);

 // tien to : ++a : cộng xong mới gán
 // hau to : a++  : gán xong mới cộng


 /**
 toan tu so sanh
 ==   : bang
 !=   : khong bang
 >    : lon hon
 <      : nho hon
 >=     : lon hon hoac bang
 <=     : nho hon hoac bang 

 var a=1
var b=2
toan tu so sanh:
if(a<b){
    alert('dung')
}
  */



// toan tu logic: if(tra ve kieu gia tri boolean){}
// if(a>0 && b>0){
//     alert('a&b lon hon 0')

// toan tu logic:
// && : and 
// || : or
// !  : not
//  */

 /**
 Boolean  : kieu gia tri true - false
  */

/**
 * 0
 * false
 * ""-''
 * undefine     ==> dieu kien sai trong if()
 * NaN
 * null
 */
/**


/**
 * Kiểu dữ liệu trong nguyen thủy - Primitive Data
 * 
 * number
 * string
 * boolean
 * undefined
 * null
 * symbol
 */

/**
 * Dữ kiệu phức tạp - Complex Data
 * 
 * Function
 * Object
 */

// number :
//var a = 1
//var b = 1.5

//console.log(typeof a)
// string type

//var fullName = 'hello \'world'

// boolean
// var isSuccess = true

// undefined
//var age

// null
// var isNull = null

// symbol
// var id = Symbol('id') // unique
// var id2 = Symbol('id')

// console.log('id == id2') // false


// function
// var myFunctiom = funtion() {
//     alert('hello world');
// }

// Object
// var myObject = {
//     name : 'the',
//     age : 18,
//     adress : 'ha noi'
//     myFunctiom: function(){
//     }
// };


// var myArray = [
//     'Java',
//     'php',
//     'ruby'
// ]

/**
 *  tóan tử so sánh p2  ==> so sánh cả string vs number
 *  ===
 *  !==
 */

// var a= 1
// var b = '1'  

// console.log(a===b) // false
// console.log(a!==b) // false

/**
 * Truthy - Falsy
 *-- bất cứ giá trị nào trong js khi chuyển đổi sang kiểu dữ liệu boolean
 mà có giá trị true thì ta gọi đó là truthy, ngược lại là falsy
 * 
 *  
 */

// var a=1
// var b=2
// var result = 'A' && 'B' && 'C'
// console.log(result)  // C

// var result = 'A' || 'B' || 'C'
// console.log(result)  // A

// var result1 = 'A' && 'null' && 'C'
// console.log(result1)  // null

// var result2 =  null || 'B' || 'C'
// console.log(result1)  // B


/**
 * 1 ham
 * --- mot khoi ma
 * --- lam 1 viec cu the
 * 
 * 2 loai ham
 * ---- built-in
 * ----- tu dinh nghia
 * 
 * 
 * 3 tinh chat
 * 
 * ---khong thuc thi khi dinh nghia
 * --- se thuc thi khi duoc goi
 * ---- co thge nhan tham si
 * --- co the tra ve 1 gia tri
 * 
 */

// tao ham dau tien
//  var age = 10

//  function showDialog(){
//         alert('hello world')
//  }
//  showDialog();
 
/**
 *     tham so
 *  dinh nghia
 *  kieu du lieu
 *  tinh private
 *  
 * 
 *   2 truyen tham so
 *  ---- 1 tham so
 * ----- nhieu tham so
 * 
 *  3  argument?
 * - doi tuong arguments
 * -- gioi thieu vong for of
 * 
 *  */ 

// vd tham so:

// function writeLog(message) {
//     console.log(message)
// }

// writeLog('hello world')  //hello world


// function writeLog(message, message2) {
//     console.log(message)
//     console.log(message2)
// }

// writeLog('hello woorld', 'xin chao') // hello woorld xin chao

// function writeLog() {
//     console.log(arguments)
// }

// writeLog('1','2','3')   /// 1 2 3


// //

// function writeLog(){
//     var myString = ''
//     for(var pagram of arguments){
//         myString += `${pagram} - `
//     }
//     console.log(myString)
// }
// writeLog('the 1', 'the 2','the 3','the 4')  // the 1 - the 2 - the 3 - the 4 - 

// return trong function ---> tra ve

// function cong(a,b){
//     return a + b
// }
// var result = cong(2,8)
// console.log(result)


// mot so dieu can biet ve function
/**
 *  1. khi function dat cung ten -> khai bao sau se duoc ghi de
 *  2. khai bao bien trong ham -> co nhung chi duoc thuc hien hanh dong trong function thoi
 *  3. dinh nghia ham trong ham -> 
 * 
 */

// function hello() {
//     function hello2() {
//         console.log('hello')
//     }
//     hello2()
// }
// hello()


// cac loai function
/**
 1: Declaration function:  ( hosting -- co the thuc hien hanh dong khi duoc goi ngay truoc ca ham hanh dong)

 function hello() {
    
}

2 Expression function 

var hello = function hello() {
    
}



 */


// lam viec vs chuooi
//var myString = 'hello world'

// 1 length
//console.log(myString.length)

//2 find index

//console.log(myString.indexOf('l'),2) // 3

// 3 cut string
//console.log(myString.slice-(-3,-1)) // orl

// replace\

//console.log(myString.replace(/hello/g, 'xinchao')) // xin chao world

// convert to uppercase  - lowercase
//console.log(myString.toUpperCase())

// 7 trim

//console.log(myString.trim())  //// loai bo tat ca casc khoang trang

// 8 split

//var language = 'js, hp, ruby'
//console.log(language.split(', ')) // ["js"," hp"," ruby"]  --> chuyen thanh kieu array

//9 get a character by index

// const mystring2 = 'hello word'
// console.log(mystring2.charAt(0)) // h

// number 
//  ---- tostring()
// ----- fixed()

// mang Array
/**
 * --- co the chua tat ca cac loai kieu du lieu
 * --- kiem tra data type : Array.isArray()  // true
 * ---truy xuat phan tu trong mang : 
 *      console.log(tenmang[0])
 * 
 * 
 * -------
1. to String() -> 
2. John   ---- console.log(tenmang.John(' - '))
3.Pop    ------  console.log(tenmang.pop())  // xoa element cuoi mang & tra ve phan tu da xoa
4. Push  ----- console.log(tenmang.push('php')) // them phan tu vao cuoi mang & tra ve do dai moi cua mang
5. shift  ----- console.log(tenmang.shift())  // xoa element dau mang & tra ve phan tu da xoa
6. unshift  ---- console.log(tenmang.unshift('dart'))  // them 1 phan tu vao dau mang va tra ve do dai moi cua mang
7. splicing ----
            tenmang.splice(1,2) -> xoa phan tu thu 1 va 2
            console.log(tenmang) // xoa, cat, chen phan tu moi vao mang
            tenmang.splice(1,1, 'dart') -> 1: vi tri dat con tro, 1 : vi tri element muon xoa, 'dart' element duoc chen vao vtri 1

 8. concat ---noi 2 array lai voi nhau
------------  console.log(tenmang.concart(tenmang2))
9. slicing
------------   console.log(tenmang.slice(1, 2))  -> cat tu vi tri 1 - vtri 2 cua mang ( 0-2)
                                                    neu chi truyen vao 1 thi se lay tu phan tu 1 den phan tu cuoi
        ex:        const number = ['1','2','3','4','5','6','7']
                   console.log(number.slice(2))  // 34567
                   console.log(number.slice(2, 5)) // 345
*/


// Object trong js
/**
 





 */

// var number = {
//     s1: '1',
//     s2:'2',
//     s3: '3',
// }
//     getName: function(){
//         return this.s1
//     }

// console.log(number.getName())

// number.s4 = '4' // them 1 key & value trong onject

// delete(number.s3)  // 

// console.log(number.s3)

// var mykey = 's3'
// console.log(number[mykey])



// var emailKey = 'email'
// var number = {
//     s1: '1',
//     s2:'2',
//     s3: '3',
//     [emailKey]: 'lkljlkjkj@dsfsd.ds'
// }


// function User(firstname, lastname, avt) {
//     this.firstname = firstname
//     this.lastname = lastname  
//     this.avt = avt

//     this.getname = function(){
//         return `${this.firstname} ${this.lastname}`
//     }
// }

// User.prototype.className = 'F8'           // them thuoc tinh classname cho bang thiet ke
// User.prototype.getClassName = function(){   // goi ham de tra ve thuoc tinh class name trong constructor ( bang thiet ke)
//     return this.className;
// }


// var author = new User('the','luong','avt')      // them doi tuong cho thuoc tinh trong bang thiet ke (constructor)
// var user = new User('hoang','nguyen','avt2')    // them doi tuong cho thuoc tinh trong bang thiet ke (constructor)

// console.log(user.getname())  // nguyen hoang
// console.log(author)         //User {firstname: 'the', lastname: 'luong', avt: 'avt'}
// console.log(user)                 


// author.title = 'chia se dao tao tai f8'  // them thuoc tinh cho doi tuong trong bang thiet ke (constructor)
// user.comment = 'hello world'            // them thuoc tinh cho doi tuong trong bang thiet ke (constructor)

// console.log(author)
// console.log(user)               //main.js:460 User {firstname: 'hoang', lastname: 'nguyen', avt: 'avt2'}  


// // doi tuong date

// var date =new Date()

// console.log(date)

// var year = date.getFullYear()
// var month = date.getMonth()
// var day = date.getDate()

// console.log(`${day}/${month}/${year}`)

// math object  
/**
math.pi
math.round
math.abs
math.ceil
math.floor
math.random
math.min
math.max
 */


// lenh re nhanh - toan tu 3 ngoi if-else ><!= (it dieu kien)

// var date = 2
// if(date === 2){

// }else if(date === 3){

// }else if(date === 4){

// }else{

// }


//  lenh re nhanh switch

// var date = 2
// switch(date){
//     case 2:
//         console.log('thu 2')
//         break
//      case 3:
//             console.log('thu 3')
//             break
//     case 4:
//         console.log('thu 4')
//         break
//     case 5:
//         console.log('thu 5')
//         break
//     default:
//         console.log('khong biet')
// }
// switch(date){
//     case 2:
//     case 3:
//     case 4:
//         console.log('thu 2,3, 4')
//         break
//     case 5:
//         console.log('thu 5')
//         break
//     default:
//         console.log('khong biet')
// }


// toan tu 3 ngoi - ternary operator

// var a = 1
// var b = 2
// var c = a > 0 ? 'a lon hon 0' :'a nho hon 0' 



// vong lap for

// for(i= 1; i<=1000; i++) {
// console.log(i)
// }

// // for in --- lap key cua doi tuong (object)



// // for of

// var number = ['1','2','3','4','5']

// for(var value of number){
//     console.log(value)
// }


// var number = ['xin chao']

// for(var value of number){
//     console.log(value)
// }

// var info = {

// }

// for(var value of number){
//     console.log(value)
// }


// // vong lap while :
// var i =0
// while(i<1000){
//     console.log(i)
//     i++;
// }

// vong lap do..while



// break & continue trong vong lap

// vong lap long nhau

// for(var i =5; i<=100; i++){
//     if(i%5 !==0){
//         continue
//     }
//     console.log(i)
// }


// de quy






//// BT1 C1 

// function nguyenduong(number){
//     if(number %1 ==0 && number >0){
//         return `${number} la so nguyen duong`
//     }else{
//         return `${number} la so nguyen am`
//     }
// }
// console.log(nguyenduong(-1))

// //C2 check so nguyen am

// function nguyenduong(number1){
//     return (Number.isInteger(number1) && number1<0)
// }
// console.log(nguyenduong(-1))


//// BT2 C1 
// function totalArray(arr){
//     var total = 0
//     for(var i=0; i< arr.length; i++){
//         total += arr[i]
//     }
//     return total
// }

// console.log(totalArray([1,2,3,4,5,6,7,8,9]))


//  giai pt bac 1
// function ptb1 (a,b){
//     var x 
//     if(a!==0){
//             return `${a}x + ${b} = 0  --> x = ${-b/a}` 
//     }else{
//         console.log('a phai khac 0 - pt vo nghiem')
//     }
// }
// console.log(ptb1(15,53))


//
// function ptb1 (a){
   
//     if(a<2){
//     return `${a} khong la so nguyen to` 
//    }
//    else{
//     for( var i = 2; i<=a;){
//         if(a%1 == 0 && a%a == 0 && a%i !== 0){
//             return `${a} la so nguyen to`
//     }else{
//         return `${a} khong la so nguyen to`        
//     }
// }
//    }
    
// }
// console.log(ptb1(-5))

// if(a %1 == 0 && a%a == 0 && a%2 !==0){
            
//     if(a%i == 0){
//         return `${a} la so nguyen to`
//     }else{
//         return `${a} khong la so nguyen to`
//     }
// }else{
//     return `${a} khong la so nguyen to`
// }

// }



// mang 
// foreach : 
// every :  chi duyet qua phan tu dau tien neu dieu kien ptu do la sai
// some : chi can 1 dieu kien dung - >> tra ve true luon
// find : chi can tifm thay 1 dieu kien thoa man  - >> tra ve thuoc tinh cuar doi tuong luon
// filter : tim thay nhieu doi tuong thoa man  - >> tra ve danh sach cac doi tuong 
// map
// reduce


// var depthArray = [1, 2, [3, 4], 5, 6, [ 7, 8, 9 ]]

// var totalValue = depthArray.reduce(function(total, number) {
//    return total.concat(number)    
// },[])

// console.log(totalValue)

//////


// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 tittle: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 tittle: "Javascript"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 tittle: "PHP"
//             },
//             {
//                 id: 2,
//                 tittle: "NodeJS"
//             }
//         ]
//     }
// ]

// var monhoc = topics.reduce(function(tong, number,index){
//         return tong.concat(number.courses)
//         // var tongmonhoc = monhoc2.reduce(function(total2, number2){
//         //     return total2.concat(number2.tittle)
//         // },[])
// },[])

// // console.log(monhoc)

// var tongmonhoc = monhoc.map(function(courses){
//       return `${courses.tittle}`
      
// })

// console.log(tongmonhoc)
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
// "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//   }
// ];


//     var mangmoi = []
//     for(var i = 0; i< watchList.length; i ++){

//         // console.log(watchList[i].Director)    
//             if(watchList[i].Director == 'Christopher Nolan'){
//              mangmoi.push(watchList[i])
//             }
//     }
//     var tongdiem = 0
//     for(var j = 0; j< mangmoi.length; j ++){
//             // console.log(mangmoi[j].imdbRating)
//             tongdiem += Number(mangmoi[j].imdbRating)
//     }
//     console.log(tongdiem/mangmoi.length)
    
    
    


// var mangphim = watchList.filter(function(phim){
//     return phim.Director == 'Christopher Nolan'
// },[])

// var tongdiem = mangphim.reduce(function(tong, diem){
//     return tong + Number(diem.imdbRating)
// },0)



// console.log(tongdiem/mangphim.length)

// Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

// Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
    
//     var object = {}
//           arr.reduce(function(key, value, index){
//             //    return  object.key[0] = key[1], object.value[0] = value[1] 
//             tennn = key[0].toSing
//             return  object.name = key[1], object.age = value[1] 
//                     // var tenn = key[0]
//                     // return  object.tenn = tenn                    
//             },)
            
// console.log(object); // { name: 'Sơn Đặng', age: 18 }

// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
//     function ok (array){

//         var oke =  array.reduce(function(key, value, index){
//             //    return  object.key[0] = key[1], object.value[0] = value[1] 
//             key[value[0]] = value[1]
//                      return key
                     
//                     // var tenn = key[0]
//                     // return  object.tenn = tenn                    
//             },{})
//             return oke
//     }
    
     
 

// console.log(ok(arr)); // { name: 'Sơn Đặng', age: 18 }



//// include() method




////////  call back



// function sumcb(a,b){
//     return a+b
// }

// function calculate(a,b,tong){
//     return tong(a,b)
//     }
// calculate(1,2, sumcb)   


// Array.prototype.myMap = function(cb){
// var output = []
// var cbLeng = this.length
// for(var i = 0; i<cbLeng; ++i){
//  var result = cb(this[i],i)
//  output.push(result)
// }
// return output
// }

// const numbers = [1,2,3]

// console.log(numbers.myMap(function(number){
//     return number*2
// }))

// console.log(numbers.myMap(function(number,index){
//     return number*index
// }))



//
//   Array.prototype.myFilter = function(cb){
//     var result =[]
//     for(var index in this[index]){

//     }
//   }

// my some method : tim phan tu thoa man dieu kien va tra ve ket qua khi tim thay phan tu dau tien thoa man -> tra ve true hoac false

// Array.prototype.mySome = function(cb) {
    
//         for (var index in this){
//             if(this.hasOwnProperty(index)){
//                 if(cb(this[index], index, this)){
//                     return true
                    
//                 }
//             }
//         }
    
//     return false
    
// }

/// every method : duyet qua tat ca cac phan tu. chi can co 1 phan tu cos thuoc tinh khac cac phan tu con lai -> tra ve false -> tra ve true hoac false


// Array.prototype.myEvery = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             if(!callback(this[index], index, this)){
//                 return false
//             }
//         }
//     }
//     return true
// }


// const number = [1,3,7,5]

// console.log(number.myEvery(function(number){
//     return number%2 !==0
// })) ///// true



//////   HTML DOM (document - object - model). chung ta cos the dunbg js truy cap vao DOM de thay doi element, attribute, text trong file HTML

// có 3 thành phần 


/**
1. element <a> <href>,...
2, attribute < a color, background,...></>
3. text
 */

// node

// co the la element, attribute, text



// API : APPLICATION POROGRAMING INTERFACE  


// html : tieu chuan cua w3c

// - ban chat dom k phai js ma la viet bang js thong qua cac web api

/**
CÁC BẠN CÓ THỂ HIỂU NHƯ THẾ NÀY :
Khi đọc đoạn code HTML, trình duyệt sẽ xây dựng cấu trúc dạng cây (DOM tree) bao gồm các “DOM node” để giúp quản lí mọi thứ, tương tự như việc bạn xây dựng một cây gia phả để giữ thông tin về mọi người trong dòng họ vậy.

Mỗi phần tử trên DOM tree là một node. Mỗi text là một node. Ngay cả comment cũng là node! Một node đơn giản chỉ là một “mảnh” trên trang web. Và cũng tương tự như trong một cây gia phả, mỗi node có thể có các node con (nghĩa là một mảnh có thể chứa các mảnh khác).

Nếu muốn thay đổi giá trị các thẻ HTML, bạn không cần vào thẳng file HTML thay đổi lại mà chỉ cần thao tác trên DOM. Các phương thức DOM cho phép chúng ta truy cập đến cây cấu trúc và thay đổi cấu trúc, dữ liệu, style, nội dung của document.

Ở mỗi môi trường sẽ cung cấp các phương thức DOM khác nhau.Ví dụ trình duyệt sẽ cung cấp cho chúng ta các WEB APIs, còn NodeJs thì có thể dùng jsdom

Trình duyệt cung cấp cho chúng ta hàng ngàn WEB APIs, có những cái bạn sẽ không bao giờ dùng đến. Bạn cũng không cần phải nhớ hết, chỉ cần dùng một số cái cơ bản dưới đây, còn lại không biết chỗ nào search google là được.
 */




// document object


//  ELEMENT : ID, TAG , CLASS, ...

// var headingNote =  document.getElementById('heading')
// console.log(headingNote)

// var headingNodes =  document.getElementsByClassName('heading')
// console.log(headingNodes)

// var headingNodes =  document.getElementsByTagName('p')  // it dung
// console.log(headingNodes)


// // CSS selector . HTML collectiom

// var headingNodes =  document.querySelector('.box.heading')
// console.log(headingNodes)

// var headingNodes =  document.querySelectorAll('heading')
// console.log(headingNodes)


// console.log(document.forms['form-1']) // form-1 ; id
// console.log(document.anchors) // get element by name attribute


// var noidungclass = document.querySelector('description')
// console.log(noidungclass)


// DOM attribute
// setattribute & get atrribute co the them va get duoc attribute trong element ma k can attribute do hop le trong element

// DOM Text Node
// innerText : tra lai y nhung gi minh nhin thay tren giao dien web
// textContent: tra lai toan bo nhung noi dung co trong element - k bi anh huong boi cac attribute khac



// set Element vào trong 1 element:

// innerJTML : them element node & textNode, attribute Note vao trong 1 element  || lay ra HTML trong element khi goi den
// outerHTML : them element node moi. ghi de element cu khi minh goi den element cu luon || lay ra HTML cua ca element moi
/**





 */

// function render(html){
//     var value = document.querySelector('ul')
//   return  value.innerHTML = html
   
// }

// console.log(render(`
//     <li>khoa hoc 1</li>,
//     <li>khoa hoc 2</li>,
//     <li>khoa hoc 3</li>
// `))


// var courses = ['HTML&CSS','JS','PHP','JAVA']

// function render(mang){
//     var theul = document.querySelector('ul')
//     var monhoc = mang.map(function(course){
//       return  `<li>${course}</li>`
//     })

//     return theul.innerHTML = monhoc
// }
// console.log(render(courses))


// DOM CSS
// var thedivred = document.querySelector('.red')
// var theP = document.querySelector('p')
// thedivred.style.backgroundColor = '#f00'
// theP.style.color = '#f05123'



// ClasssList property
// add
// contains
// remove
// toggle

/////DOM EVENT

// 1. attribute event
// 2. assign event using element note gan sk sd element note

// var clicktext = document.querySelector('h1')

// clicktext.onclick= function(){
//   clicktext.classList.toggle("click")
  
// }


// 3, input - Select
// 4, keyup - down

//5. preventDefault
//6. stopPropagation


// Eventlistener - geteventlistener

//BT1
// function chuyendoi(chuoi){
//   var mangmoi = chuoi.split('')
// return mangmoi.reverse().join('')

// }
// console.log(chuyendoi("hello"))  /// olleh

// BT1 c2
// function chuyendoi(chuoi){
//     var mang = chuoi.split('')
//     var mangmoi = []
//   for(i = mang.length; i>=0; i--){
//       mangmoi.push(mang[i])
//   }
//   return mangmoi.join('')
//   // console.log(mangmoi.length)
//   }
//   console.log(chuyendoi("hello"))


// BT2

// function giaithua(number){
// var tong = 1
// if(number >0){
//   for(i = number; i>=1; i--){
//     tong *= i
// }
// return tong
// }else if (number == 0){
//   return 1
// }else{
//     console.log("giai thua khong ton tai")
// }

// }
// console.log(giaithua(5))


// BT3
// function timchu(str){
//   var sodainhat =0

// return str.length
// }
// console.log(timchu('xin chao cac ban'))



// JSO LA 1 DINH DANG DU LIEU ( CHUOI)  javascrip object notation
// giup the hien cac kieu du lieu : number, boolean , null, object, string
// ma hoa en code - giai ma decode
// Stringify / parse 0 chuyen doi tu javascip sang json / tra lai json sang javascrip


// Promise
// - sync : dong bo

// console.log(1)
// console.log(2)

// thang nao goi truoc -> chay truoc, goi sau chay sau

// ---call back trong js la 1 thao tac bat dong bo. nhung se co 1 so van de (call back hell. code bi roi) nen minh se su dung promise es6 moi ra
// --- de tao ra 1 promise  thif bentrong se co 2 tham so sesolve, reject. sau do se tao ra 2 phuong thuc la .then va catch. been trong se co 1 callback function
// --- then la khi resolve thanh cong se tra ve con catch la khi that bai se tra ve.

// - async : bat dong bo : setTimeout, setInterval, fetch, XMLHttp Request, Filereading, requestAnimationFrame 
// setTimeout(function(){
//   console.log(1)
// },1000)   --> day qua web api --> day tiep qua callback queue--> day sang call stack, sau 1 s thi thuc hien hanh dong

// console.log(2) --> thuc hien cai nay truoc


// - noi dau
// // callback hell
// // pyramid od doom
// - ly thuyet - cach hoat dong

// var promise = new Promise(
//   //Executor
//   function(resolve, reject){
//     // LOgic
//     // thanh cong  resolve()
//     // that bai  reject()
//   }
// )
//promise  // co 3 trang thai : pending, fullfilled, rejected
/**
 .then(function(){
  khi thanh cong se lot vao thang nay
})
.catch(function(){
  khi that bai se lot vao thang nay
})
.finally(function(){
  khi thanh cong hay that bai deu se lot vao thang nay
})
 */



// - thuc hanh - vi du

// var promise = new Promise(
//   function(resolve,reject){
    // Code(những công việc cần làm)
    //Thành công resolve();
        // có thể truyền tham sô vào resolve để thằng then nhận
    // Thất bại reject();
         // có thể truyền tham sô vào resolve để thằng catch nhận
    //==== Ví dụ====  
    
    

    /**
     resolve([{  
      name:‘Javascipt’,
      cost: 20000
    },{
      name:‘Java’,
      cost: 30000
    }])
    // ====== End ví dụ======

  });
promise
  .then(function(a){
     */


      /*Khi nào funtion promise trả về 
      thành công resolve thì hàm then đc gọi 
      /
     // a tham số của hàm resolve như vị dụ trên
     var costs = a.map(function(a){ return a.cost});//Lấy giá trị cost trong mảng a
     console.log(costs);// in ra ví dụ
  })
  .catch(function(){
      /
      Khi nào funtion promise trả về
      thất bại reject thì hàm catch đc gọi
      /
  })
  .finally(function(){
      /
      Khi thành công hoặc thất bại thì
      thằng finally cũng được gọi
        })
      */




//   function sleep(ms){
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     })
// }

// sleep(2000)
//     .then(
//         function(){
//             console.log(1)
//             return sleep(2000);
//         }
//     )

//     .then(
//         function(){
//             console.log(2)
//             return sleep(2000);
//         }
//     )
//     .then(
//         function(){
//             console.log(3)
//             return sleep(2000);
//         }
//     )


// var users =  [
//   {
//     id: 1,
//     name: 'Kien Dam'
// } ,
// {
//   id: 2,
//   name: 'Son Dang'
// }
// ]

// var comments = [

//   {id:1,
//   user_id: 1,
//   content: 'Anh son ra video chua?'
//   },

//   {id:2,
//     user_id: 2,
//     content: 'Vua ra xong em oi'
//     }
// ]

// // lay comment
// // tu comment, lay user_id
// // tu user id_lay nameuser

// // tao ham de lay comment
// function getComments (){
//   return new Promise (function(resolve){
//     // lam gia mang yeu 1 second
//     setTimeout(function(){
//       resolve(comments)
//     },1000)
//   })
// }
// // tao ham lay user tu id
// function getUserById(userId){
// return new Promise(function(resolve){
//     // loc qua tung element cua mamg user va lay ra id cua user trung voi user_id cua comment
//     var result = users.filter(function(user){
//       return userId.includes(user.id)
//     })
//     // lam cham 1 second
//     setTimeout(function(){
//       resolve(result)
//     },1000) 
// })
// }


// // getUserById([1,2])
// // .then(function(users){
// // console.log(users)
// // })

// getComments()
// .then(function(comments){
//   // console.log(comment)
//   // dung phuong thuc map() lay ra user_id cua mang comment
//   var userId = comments.map(function(comment){
//     return comment.user_id
//   })
//   // console.log(userId)
//   // return getUserById(user_id)
// })


// .then(function(user){
// // users, comment o truoc la key con users, comments o sau la values
// // ca 2 deu tra ve 1 mang moi
// return {
//   users : users,
//   comments : comments
// }
//     // ouput : return
//                 // {users: Array(2), comments: Array(2)}
//                     // comments: Array(2)
//                         // 0: {user_id: 1, content: ‘Anh son ra video chua?’}
//                         // 1: {user_id: 2, content: ‘Vua ra xong em oi’}
//                     // users: Array(2)
//                         // 0: {id: 1, name: ‘Kien Dam’}
//                         // 1: {id: 2, name: ‘Son Dang’}
//                 // Xem cái output mà không hiểu thì mấy ông từ từ ngẩm lại đi nha!
//                 // Hiểu tới đó mới tiếp tục được

// })

// .then(function(data) {
//   // Lấy ra thẻ ul qua id
//   var commentBlock = document.getElementById('comment-block')
//   // tạo chuỗi rỗng để thêm nội dung vào thẻ ul
//   var html = '';
//   // Lặp qua mảng comments trong object data được return ở trên
//   data.comments.forEach(function(comment) {
//       // Lặp qua mảng users trong object data được return ở trên
//       // kiểm tra id của user có trùng với user_id của comment không
//       var user = data.users.find(function(user) {
//           return user.id === comment.user_id;
//       })
//       // thêm giá trị vào chuỗi html rỗng được tạo ở trên
//       html += `&lt;li&gt;${user.name}: ${comment.content}&lt;/li&gt`
//   })
//   // thay đổi textNode của thẻ ul
//   commentBlock.innerHTML = html
// })




// FETCH
// var postApi = 
// 'https://jsonplaceholder.typicode.com/posts'
// // response
// fetch(postApi)
// .then(function(response){
//   return response.json()
//   //json.parse  : json -> javascript type
// })
// .then(function(posts){
//   var htmls = posts.map(function(post){
//     return `<li>
//     <h2>${post.title}</h2>
//     <p>${post.body}</p>
//     </li>`
//   })
//   var html = htmls.join('')
//   document.getElementById('post-block').innerHTML = html
// })
// .catch(function(error){
//   console.log('error')
// })


// var courseApi = 'http://localhost:3000/courses'

// function start(){
//   getCourses(renderCourses)
// }

// start()

// function getCourses(callback){
//   fetch(courseApi)
//   .then(function(response){
//     return response.json()
//   })
//   .then(callback)
// }
// function renderCourses(courses){
//     var listCourseBlock = 
//     document.querySelector("#list-courses")
//     var htmls = courses.map(function(course){
//       return `<li>
//       <h4>${course.name}</h4>
//       <p>${course.description}</p>
//       </li>`
//     })
// listCourseBlock.innerHTML = htmls.join('')
// }
// function handleCreateForm(){
//   var name = document.querySelector()
//   var description = document.querySelector()


// }
// import logger from './logger.js'
// import * as constants from './constants'
// import {
//   TYPE_LOG,
//   TYPE_WARN,
//   TYPE_ERROR
// }from './constants.js'

// function logger(log, type = TYPE_LOG){
//   console[type](log)
// }

// logger('Test message...',TYPE_ERROR)


// Fn.bind()
 