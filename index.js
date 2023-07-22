const clicked = document.querySelector('.btn-menu');   
let open = true
clicked.addEventListener('click' , ()=>{
    if(open){
      document.querySelector('.close-bar').style.display = 'block';
      document.querySelector('.menu-bar').style.display = 'none';
      document.querySelector('.dropdown').style.display = 'flex';
      document.querySelector('.dropdown').style.flexDirection = 'column';
      open = false
    }
    else{
     document.querySelector('.close-bar').style.display = 'none';
      document.querySelector('.menu-bar').style.display = 'block';
      document.querySelector('.dropdown').style.display = 'none';
      open = true
    }
})

/* Tabs type images slides */
const tabButton = document.querySelector('.design')
tabButton.addEventListener("click" , (e)=>{
      if(e.target.innerText === "DESKTOP DESIGN"){
         console.log("desktop")
         document.querySelector('.desktop').classList.add('selected-design')
         document.querySelector('.desktop').style.backgroundColor = "rgb(62,84,163)"
         document.querySelector('.desktop').style.color = "white"
         document.querySelector('.mobile').style.backgroundColor = "rgb(219,229,230)"  
         document.querySelector('.mobile').classList.remove('selected-design')
         /* images slide*/
         document.querySelector('.huddleimg1').style.display = "block"
         document.querySelector('.huddleimg2').style.display = "none"
     }
      if(e.target.innerText === "MOBILE DESIGN"){
         console.log("mobile")
          document.querySelector('.mobile').classList.add('selected-design')
          document.querySelector('.desktop').classList.remove('selected-design')
          document.querySelector('.desktop').style.backgroundColor = "rgb(219,229,230)"
          document.querySelector('.mobile').style.backgroundColor = "rgb(62,84,163)"
          document.querySelector('.mobile').style.color = "white"
            /* images slide*/
         document.querySelector('.huddleimg1').style.display = "none"
         document.querySelector('.huddleimg2').style.display = "block"
    
         }
})



const questions_frequent = document.querySelectorAll(".freq_question")

questions_frequent.forEach((ele,i)=>{

     ele.addEventListener("click" , (e)=>{
         ele.lastElementChild.classList.toggle('active')
         ele.firstElementChild.classList.toggle('border')
                 // console.log(ele1.firstElementChild.lastElementChild.firstElementChild)
                  ele.firstElementChild.lastElementChild.firstElementChild.classList.toggle('active1')
                  ele.firstElementChild.lastElementChild.lastElementChild.classList.toggle('active1')
                  ele.firstElementChild.lastElementChild.lastElementChild.classList.toggle('active')


     })
})