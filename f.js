function valid(){

let name=document.getElementById("name").value

let email=document.getElementById("email").value

let sub=document.getElementById("subject").value

let message=document.getElementById("message").value

let p=document.getElementById("p")

let btn=document.getElementById("btn")

if (name==""||email==""||sub==""||message=="") {

p.innerHTML="plese enter all feilds"

return;

}

if(email.indexOf("@")==-1||email.indexOf(".")==-1){

p.innerHTML="plese enter correct email"

return;

}

else{

p.innerHTML="done"

return;

}

}




let toggle=document.getElementById("togglebtn");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    if( document.body.classList.contains("dark")){
        toggle.innerHTML='<i class="fa-regular fa-moon"></i>'
    }else{
          toggle.innerHTML='<i class="fa-solid fa-moon"></i>'
    }
})