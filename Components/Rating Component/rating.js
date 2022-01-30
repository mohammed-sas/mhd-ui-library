const stars = document.querySelectorAll('.star');
const starContainer = document.querySelector('.rating-container');
const outputDiv = document.querySelector('.rating-text');
stars.forEach((star,index)=>{
    star.addEventListener('mouseover',()=>{
        stars.forEach(star=>{
            star.classList.remove('hover');
        })

        stars.forEach((star,i)=>{
            if(i <= index){
                star.classList.add('hover');
            }
        })
    })
})

starContainer.addEventListener('mouseleave',()=>{
    stars.forEach(star=>{
        star.classList.remove('hover');
    })
})

stars.forEach((star,index)=>{
    star.addEventListener('click',(e)=>{
        e.stopPropagation();
        stars.forEach(star=>{
            star.classList.remove('rating-active');
            star.classList.remove('hover');
        })

        stars.forEach((star,i)=>{
            if(i<=index){
                star.classList.add('rating-active');
               
            }
        })
        rating=index+1;
        outputDiv.innerHTML=`Rating: ${rating}/5`;
    })
   
})

starContainer.addEventListener('click',()=>{
    stars.forEach(star=>{
        star.classList.remove('rating-active');
        star.classList.remove('hover');
    })
    outputDiv.innerHTML=`Rating:0/5`;
})