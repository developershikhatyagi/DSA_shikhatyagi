//=====traversing example========First-Example====//
// let data = [10, 20, 30, 40, 50]
// for(let i=0; i<data.length; i++);
// {
//     console.log(data); 
// }
    // let x=4;
    // console.log(data[x]);


    //=====traversing example========Second-Example====//
    // function getElement(){

    //     let el = document.getElementById('element').value
    //     if(el<data.length){
    //         alert(data[el]);
    //     }
    //     else{
    //         alert('please enter valid input');
    //     }
        
    // }

//====== Insertion example with js First-Method====//

// let data = [60, 30, 10, 67, 40];
// let newEl = 70;
// let position = 2;
// console.log(data);
// for(let i=data.length-1; i>=0; i--){

// if(i>=position){
//     data[i+1]=data[i];
//     if(i==position){
//         data[i]=newEl;
//     }
// }
// }

// console.log(data);


//====== Insertion example with js Second-Method====//

// function insertEl(){
//     let data = [60, 30, 10, 67, 40];
// let newEl = document.getElementById('newEl').value;
// let position = document.getElementById('position').value
// console.log(data);
// for(let i=data.length-1; i>=0; i--){

// if(i>=position){
//     data[i+1]=data[i];
//     if(i==position){
//         data[i]=newEl;
//     }
// }
// }
// console.log(data);
// }

// =====Deletion-example===First-example=======//
// let data = [30, 20, 45, 76, 20, 80];
// let  position = 3;
// for(let i=position; i<data.length-1; i++){
//     data[i]=data[i+1];
// }
// data.length= data.length-1;
// console.log(data);

// =====Deletion-example===second-example=======//
// function removeEl(){
//     let data = [30, 20, 45, 76, 20, 80];
// let  position = document.getElementById('remove').value;
// position = parseInt(position)
// for(let i=position; i<data.length-1; i++){
//     data[i]=data[i+1];
// }
// data.length= data.length-1;
// console.log(data);
// }

// ===========Search element in array ==========//
// let data = [20, 40, 60, 5, 10, 70, 80, 99];
// let item = 70;
// let index=undefined;

// for(let i=0; i<=data.length-1; i++){
//     if(data[i]===item){
//         index=i
//     }
// }
// console.log(index);
// console.log(data.indexOf(item))
// data.splice(2,1)
// console.log(data);

// ============Search-element-in-array-second-example=============//
// function searchElement(){
//     let data = [20, 40, 60, 5, 10, 70, 80, 99];
// let item = document.getElementById('searchEl').value;
// let index=undefined;

// for(let i=0; i<=data.length-1; i++){
//     if(data[i]==item){
//         index=i
//     }
// }
// console.log(index);
// console.log(data.indexOf(item))
// data.splice(2,1)
// console.log(data);
// }

// =============Merge-Two-array-in-DS-javascript==============//
// let data = [3, 7, 12, 34, 56, 90];
// let data2 = [20, 30, 40, 50];
// let data3 = [];
// for(let i=0; i < data.length; i++){
//     data3[i]=data[i];
// }
// for(let i=0; i < data2.length; i++){
//     data3[data.length+i]=data2[i];
// }
// console.log(data3);

// function register() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Register End');
//       resolve();
//     }, 2000);
//   });
// }


let data1 =[3,7,12,34,56,90];
let data2 = [4,9,25,45];
let data3 = [];
let d1=0;
let d2=0;
let d3=0;
while(d1<data1.length && d2<data2.length){
  if(data1[d1]<data2[d2])
  {
    data3[d3]=data1[d1];
    d1++;
  }else{
    data3[d3]=data2[d2];
    d2++;
  }
  d3++;
}

while(d1<data1.length){
  data3[d3]=data1[d1];
  d1++;
  d3++;
}
console.log(data3);
















// function sendEmail() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Send Email End');
//       resolve();
//     }, 2000);
//   });
// }

// function login() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Login End');
//       resolve();
//     }, 3000);
//   });
// }

// function getUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Get User Data End');
//       resolve();
//     }, 1000);
//   });
// }

// function displayUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Display User Data End');
//       resolve();
//     }, 2000);
//   });
// }


// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .then(() => {
//     console.log("✅ All tasks completed using Promises!");
//   });

// console.log("📌 Other Application Work...");

function register(callback) {
  setTimeout(() => {
    console.log('Register End');
    callback();
  }, 2000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log('Send Email End');
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log('Login End');
    callback();
  }, 3000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log('Get User Data End');
    callback();
  }, 1000);
}

function displayUserData(callback) {
  setTimeout(() => {
    console.log('Display User Data End');
    callback();
  }, 2000);
}

// Callback Hell
register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData(function () {
          // All done
        });
      });
    });
  });
});