const cards = document.querySelectorAll(".item")
const tentativas = document.querySelector("span")
const button = document.querySelector("button")

const newRadom = () => parseInt(Math.random() * (4 - 0) + 0)
const reset = () =>{
    random = newRadom()
    cards.forEach(value => value.classList.remove("true"))
    cards.forEach(value => value.classList.remove("false"))
    button.classList.add("hide")
    tentativas.innerHTML = 3
}
const showAll = () => cards.forEach((value,index) =>{
    if(random === index){
        value.classList.add("true")
    }
    else{
        value.classList.add("false")
    }
})

button.addEventListener("click", reset)
let random = newRadom()

cards.forEach((value,index) =>{
    value.addEventListener("click", () =>{
        if(random === index){
            value.classList.add("true")
            alert("Parabens !!! voce acertou")
            showAll()
            button.classList.remove("hide")
        }
        else if(Number(tentativas.innerHTML) > 1){
            value.classList.add("false")
            tentativas.innerHTML = Number(tentativas.innerHTML) - 1
        }
        else{
            value.classList.add("false")
            tentativas.innerHTML = Number(tentativas.innerHTML) - 1
            alert("Voce perdeu!!!")
            showAll()
            button.classList.remove("hide")
        }
    })
})