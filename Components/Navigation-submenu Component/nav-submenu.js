const subMenuBtns = document.querySelectorAll('.submenu-links>li');
const subMenuLists = document.querySelectorAll('.submenu-items');
const subMenuLinks = document.querySelectorAll('.submenu-links');
subMenuBtns.forEach(btn=>{
    btn.addEventListener('mouseover',()=>{
        subMenuBtns.forEach(item=>{
            item.childNodes[1].style.display='none';
        })
        btn.childNodes[1].style.display='flex'
    })
    btn.addEventListener('click',()=>{
        subMenuLists.forEach(item=>{
            item.style.display='none';
        })
    })

})

