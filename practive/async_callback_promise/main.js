
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
//             // su dung phuong thuc include de kiem tra xem UserId co?? n????m trong user.id hay kh??ng. n????u co?? se?? tra?? v???? true, con kh??ng se?? tra?? v???? false
//            // du??ng ?????? lo??c ra nh????ng UserId ti??m th????y trong comment ???? trong array users
//             return UserId.includes(user.id)
//         })
//         // tra ve result bao gom nhung uid co?? trong comment ????????c ti??m th????y trong array users[]
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
//         // userId chinh la comment.user_id duoc return ???? tr??n
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
//     // data ???? ????y chi??nh la?? 1 object ????????c return ???? tr??n ( bao g????m users va?? comments)
//         function(data){
//             // tro?? ??????n id comment-block trong html
//             var commentBlock = document.getElementById('comment-block')
//             // go??i html = 1 chu????i r????ng
//             var html = ''
//             // du??ng foreach ?????? get ra 1 ma??ng g????m ca??c comment co?? trong array comments[] co?? t??n la?? comment
//             data.comments.forEach((comment)=>{
//                 // go??i 1 bi????n co?? t??n user bao g????m t????t ca?? ca??c user co?? trong object data
//                 var user = data.users.find((user)=>{
//                 // du??ng find ?????? lo??c ra t????t ca?? ca??c id trong object data tru??ng v????i ca??c user_id trong array comment ????????c khai ba??o trong foreach()
//                     return user.id === comment.user_id
//                 })
//                 // ga??n bi????n html r????ng ????????c khai ba??o ???? tr??n tha??nh the?? <li> bao g????m t??n user va?? comment cu??a user ??o??</li>
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