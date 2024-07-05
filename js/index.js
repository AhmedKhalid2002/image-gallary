const images=document.querySelectorAll('.box .col img');
const imageOver=document.querySelector('.over');
const img=document.querySelector('.image-container img');
const closeTab=document.getElementById('closeTab')
for(var i=0;i<images.length;i++){
    images[i].addEventListener('click',(e)=>{
        imageOver.style.display='flex';
        img.src=e.target.src
    })
}
imageOver.addEventListener("click",(e)=>{
    if(e.target.classList=="over"){
        imageOver.style.display="none"
    }
    
})

closeTab.addEventListener("click",()=>{
    imageOver.style.display="none"
})
