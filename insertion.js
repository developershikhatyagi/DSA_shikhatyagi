//====== Insertion example with js First-Method====//

let data = [60, 30, 10, 67, 40];
let newEl = 70;
let position = 2;
console.log(data);
for(let i=data.length-1; i>=0; i--){

if(i>=position){
    data[i+1]=data[i];
    if(i==position){
        data[i]=newEl;
    }
}
}

console.log(data);


//====== Insertion example with js Second-Method====//

function insertEl(){
    let data = [60, 30, 10, 67, 40];
let newEl = document.getElementById('newEl').value;
let position = document.getElementById('position').value
console.log(data);
for(let i=data.length-1; i>=0; i--){

if(i>=position){
    data[i+1]=data[i];
    if(i==position){
        data[i]=newEl;
    }
}
}
console.log(data);
}