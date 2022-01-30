const modalBtn = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container');
const modal =document.querySelector('.modal');
const noModalBtn = document.querySelectorAll('.modal button')[0];

noModalBtn.addEventListener('click',()=>{
    modalContainer.style.display='none';
})
modalBtn.addEventListener('click',()=>{
    modalContainer.style.display='flex';
})

modal.addEventListener('click',e=>{
    e.stopPropagation();
})

modalContainer.addEventListener('click',()=>{
    modalContainer.style.display='none';
})