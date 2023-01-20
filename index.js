
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.querySelector('.btn')


btn.addEventListener("click", add)

function add(){
    

if(email.value === "" && password.value === ""){

    console.log("wrong");

}
else if(email.value !==null && password.value ==="")
{
    console.log("cannot be password");
}
else if(email.value === '' && password.value !==null){
    
    console.log("cannot be email");

}
else{
    console.log("answer currect");
}
}
