let display = document.querySelector('.display')
let button = document.querySelector("#btn")
let ul = document.querySelector('ul')

button.addEventListener('click', () =>{
    if (display.value.length > 0 &&  display.value.trim() !== "" && display.value.length < 51) {
        let li = document.createElement('li')
        let button = document.createElement('button')
        
        button.textContent = "X"
        li.innerHTML = display.value
        li.append(button)

        button.onclick = ()=>{
            li.remove()
        }
        
        ul.append(li)
        display.value = ''
    }
})










