// ========Array of JS==============//
let users = ['item1', 'item2', 'item3', 'item4']
console.log(users.length);
users.unshift('item5');
// console.log(users);
users.shift();
// console.log(users);

 users.push('item5');
//  console.log(users);

 users.pop();
//  console.log(users);

//  users.forEach(function (user) {
//   console.log(user);
//  });

 const actors = [
    { name: 'Actor 1', payment: 200 },
  { name: 'Actor 2', payment: 400 },
  { name: 'Actor 3', payment: 500 },
 ];

//  for(i=0; i < actors.length; i++){
//     actors[i].payment = actors[i].payment - 10;
//     console.log(actors);
//  }

//  actors.forEach((actor) => {
//    actor.payment = actor.payment - 10;
//    console.log(actors);
//  });

//  for(let actor of actors){
//   actor.payment = actor.payment - 10;
//   console.log(actors);
//  }


const array1 = [1, 2, 3, 4, 5, 6];
const map1 = array1.map((x) => x * 3);
console.log(map1);


// const users1 = [
//   {
//     id: 1 , name: shikha
//   },
//   {id: 2 , name: vimal},
//   {id: 3 , name: pooja},
// ];

// const array0 = [1, 2, 3];
// const array2  = [4, 5, 6];
// const array3 = array0.concat(array2);
// console.log(array3)

// const user = {
//   name: "Tanu",
//   greet: function() {
//     return "Hello " + this.name;
//   }
// };

// console.log(user.greet()); // "Hello Tanu"


let x = 5;
    x++;
    x *= 2;

    let total = 20;
    total -= 7;
