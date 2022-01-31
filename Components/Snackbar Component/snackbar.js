const snackBarBtn = document.querySelector('.snackbar-btn');
const snackBar = document.querySelector('.snackbar-container');
const retryBtn = document.querySelector('.snackbar-container button');
snackBarBtn.addEventListener('click',()=>{
    snackBar.style.display='flex';
    setTimeout(()=>{
        snackBar.style.display='none';
    },3000);

})

retryBtn.addEventListener('click',()=>{
    snackBar.style.display='none';
})