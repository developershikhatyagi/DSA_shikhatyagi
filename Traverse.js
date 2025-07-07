//=====traversing example========First-Example====//
let data = [10, 20, 30, 40, 50]
for(let i=0; i<data.length; i++);
{
    console.log(data); 
}
    let x=4;
    console.log(data[x]);

 //=====traversing example========Second-Example====//
    function getElement(){

        let el = document.getElementById('element').value
        if(el<data.length){
            alert(data[el]);
        }
        else{
            alert('please enter valid input');
        }
        
    }