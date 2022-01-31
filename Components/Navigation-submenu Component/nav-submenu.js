const subMenuBtns = document.querySelectorAll('.submenu-links>li');
let isOpen=false;
subMenuBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        
        subMenuBtns.forEach(item=>{
            item.childNodes[1].style.display='none';
        })
        if(!isOpen){
            btn.childNodes[1].style.display='flex';
        }else{
            btn.childNodes[1].style.display='none';
        }
        isOpen=!isOpen;
    })

})

