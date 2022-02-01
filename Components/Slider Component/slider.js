const range = document.querySelector('.range');
const bubble = document.querySelector('.bubble');

const setBubble=(range,bubble)=>{
    let value = range.value;
    const min = range.min;
    const max = range.max;
    bubble.innerText = value;
    let newVal = Number((value-min)*100/(max-min));
    bubble.style.left=`${newVal}%`;
}

range.addEventListener('input',()=>{
    setBubble(range,bubble);
})



