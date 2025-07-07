// ===========Search element in array ==========//
let data = [20, 40, 60, 5, 10, 70, 80, 99];
let item = 70;
let index=undefined;

for(let i=0; i<=data.length-1; i++){
    if(data[i]===item){
        index=i
    }
}
console.log(index);
console.log(data.indexOf(item))
data.splice(2,1)
console.log(data);

// ============Search-element-in-array-second-example=============//
function searchElement(){
    let data = [20, 40, 60, 5, 10, 70, 80, 99];
let item = document.getElementById('searchEl').value;
let index=undefined;

for(let i=0; i<=data.length-1; i++){
    if(data[i]==item){
        index=i
    }
}
console.log(index);
console.log(data.indexOf(item))
data.splice(2,1)
console.log(data);
}