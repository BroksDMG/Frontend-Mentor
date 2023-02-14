'use strict'
const btnSubmit =document.querySelector('.btn-submit')
const btnsNumber =document.querySelectorAll('.number')
const textEnd= document.querySelector('.output-text')
const container =document.querySelector('.container')
let whichNumber;
btnsNumber.forEach((btn)=>{
    btn.addEventListener('click',function(){
        whichNumber= btn.textContent
        btn.classList.toggle('toggleNumber')
    })
 })
 
btnSubmit.addEventListener('click',function(){
    if(whichNumber){
        container.innerHTML=`
        <div class="secondPages-container">
        <img class="illustriation-th" src="images/illustration-thank-you.svg" alt="ilustration-thank-you">
        <h4 class="output-text">You selected ${whichNumber} out of 5</h4>
        
        <h3 class="th-end">Thank you!</h3>
        
        <p class="prgf-end">We appreciate you taking the time to give a rating. If you ever need more support, 
         don’t hesitate to get in touch!</p>
        
        </div>
        `

    }
})