const dropDownBtn = document.querySelector('.sidebar-btn');
const dropDownList = document.querySelector('.sidebar-list');
const sectionsAnchor = document.querySelectorAll('.sidebar-list span a');


dropDownBtn.addEventListener('click',()=>{
        dropDownList.style.display='flex';
})
window.addEventListener('resize',()=>{
    if(window.innerWidth > 900){
        dropDownList.style.display='flex';
    }
    if(window.innerWidth < 900){
        dropDownList.style.display='none';
    }
})
dropDownList.addEventListener('click',()=>{
    if(window.innerWidth < 900){
        dropDownList.style.display='none';
    }
})

sectionsAnchor.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault(); 
        let query = link.getAttribute('href');
        let destination = document.querySelector(query);
        destination.scrollIntoView({
            behavior:'smooth',
        })
})
})