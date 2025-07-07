// =====Deletion-example===First-example=======//
let data = [30, 20, 45, 76, 20, 80];
let  position = 3;
for(let i=position; i<data.length-1; i++){
    data[i]=data[i+1];
}
data.length= data.length-1;
console.log(data);

// =====Deletion-example===second-example=======//
function removeEl(){
    let data = [30, 20, 45, 76, 20, 80];
let  position = document.getElementById('remove').value;
position = parseInt(position)
for(let i=position; i<data.length-1; i++){
    data[i]=data[i+1];
}
data.length= data.length-1;
console.log(data);
}