
// // vi du ve callback 1

// function funcParent(text, callback) {
//     console.log(text);
    
//     callback(text);
// }

// function funcCallback(text) {
//     console.log('Callback: ' + text);
// }

// funcParent('Hello World', funcCallback);

// // vi du ve callback 2

// function funcParent(text, callback) {
//     console.log(text);
    
//     callback(text);
// }

// funcParent('Hello World', function(text) {
//     console.log('Callback: ' + text);
// });

// // vd 3
// function calculate(a,b, callback){
//     return callback(a,b)
     
// }

// function sumCb (a,b){
//     return a+b
// }
// function subCb (){
//     return a-b
// }
// function multiCb (){
//     return a*b
// }
// function divCb (){
//     return a/b
// }
// // caculate(1,2, sumCb) // output : 3
// console.log(calculate(1,2, sumCb))

// // 



// var a= 1
// var b = '1'  

// console.log(a===b) // false
// console.log(a!==b) // false



// convert to uppercase  - lowercase
//9 get a character by index

// let myComputer = {
//     type: "laptop",
//     brand: "Sony",
//     os: "Windows 7",
//     graphicCard: "NVIDIA",
//   };

// console.log(myComputer.type); // laptop
// console.log(myComputer.brand); // Sony

// console.log(myComputer["type"]); // => laptop
// console.log(myComputer["brand"]); // => Sony



// var users = [
//     {
//         id: 1,
//         name: 'kien dam'
//     },
//     {
//         id: 2,
//         name: 'son dang'
    
//     },
//     {
//         id: 3,
//         name: 'hung dam'
//     }
// ]
// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'anh son chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'vua ra xong em oi'
//     },
//     {
//         id: 1,
//         user_id: 1,
//         content: 'cam on anh'
//     }
    
// ]
// // b1 : get ra comments
// function getComments(){
//     return new Promise (function(resolve){
//         resolve(comments)
//     })
// }
// // tu user_id, get ra
// function getUserId(UserId){
//     return new Promise((resolve)=>{
        
//         // goi filter de lay ra tat ca cac object trong array users ( moi object gom id va name)
//         var result = users.filter((user)=>{ 
//             // su dung phuong thuc include de kiem tra xem UserId có nằm trong user.id hay không. nếu có sẽ trả về true, con không sẽ trả về false
//            // dùng để lọc ra những UserId tìm thấy trong comment ở trong array users
//             return UserId.includes(user.id)
//         })
//         // tra ve result bao gom nhung uid có trong comment được tìm thấy trong array users[]
//         resolve(result)
//     })
// }
// getComments()
// .then(
//     (comments)=>{
//         // get ra user_id tu comment
//         var userId = comments.map((comment)=>{
//             return comment.user_id
//         })
//         // userId chinh la comment.user_id duoc return ở trên
//         return getUserId(userId)
//         // user chinh la result duoc tra ve trong ham getUserId() : cac id co trong comment duoc tim thay trong users[]
//         .then((users)=>{
//         // 
//         console.log(users)

//             // return{
//             //     users : users,
//             //     comments : comments
//             // }
//         })
//     })
//    .then(
//     // data ở đây chính là 1 object được return ở trên ( bao gồm users và comments)
//         function(data){
//             // trỏ đến id comment-block trong html
//             var commentBlock = document.getElementById('comment-block')
//             // gọi html = 1 chuỗi rỗng
//             var html = ''
//             // dùng foreach để get ra 1 mảng gồm các comment có trong array comments[] có tên là comment
//             data.comments.forEach((comment)=>{
//                 // gọi 1 biến có tên user bao gồm tất cả các user có trong object data
//                 var user = data.users.find((user)=>{
//                 // dùng find để lọc ra tất cả các id trong object data trùng với các user_id trong array comment được khai báo trong foreach()
//                     return user.id === comment.user_id
//                 })
//                 // gán biến html rỗng được khai báo ở trên thành thẻ <li> bao gồm tên user và comment của user đó</li>
//                 html += `<li>${user.name}: ${comment.content}</li>`
//             })
//             commentBlock.innerHTML = html
//         })



// const ages = [3, 10, 28, 20];
 
// // function checkAge(age) {
// //   return age > 20;
// // }
 
// let agee = ages.find((age)=>{
//    return age > 20
// });
// console.log(agee); // 28

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// // SonDN fixed - Active size wrong size on first load.
// // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
// requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });


function math(sum, different){
    var a = sum
}