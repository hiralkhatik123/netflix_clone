document.getElementById("submit").addEventListener("click",()=>{
    let error_sign = document.getElementsByClassName("error_sign");
    error_sign.style.visibility = 'visible'
});
submit.addEventListener('click',()=>{
    error_sign.style.visibility = 'visible'
});