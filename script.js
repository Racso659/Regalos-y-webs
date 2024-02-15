const alternatives = [
  {text:"", images:"images/cat-01.webp"},
  {text:"COMO???? No me amas?", images:"images/cat-02.webp"},
  {text:"Hazte la loca, me quieres?", images:"images/cat-03.webp"},
  {text:"ya no te doy regalo", images:"images/cat-04.webp"},
  {text:"Ojala te aropelle un camion, ultima oportunidad, me amas?", images:"images/cat-05.webp"},
]
const ohyes = {text:"Pues te amo mucho mass, por lo tanto estas cordialmente invitada a un taco bell, y una noche con cena romantica apenas podamos :3",   images:"images/cat-yes2.webp" }
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')


let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
  
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
          
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})