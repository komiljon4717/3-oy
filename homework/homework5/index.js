let toDoList = document.querySelector('.todo-list')
let all = document.querySelector('.all-task')
let active = document.querySelector('.active-task')
let completed = document.querySelector('.completed-task')


display.onkeyup = (env) => {
    if (env.keyCode == 13) {
        let div = document.createElement('div')
        div.setAttribute('class','todo-item')
        div.innerHTML = `<div class="checker"><span class=""><input type="checkbox"></span></div>
        <span>${display.value}</span>
        <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>`
        toDoList.append(div)
        display.value = ''
    }
}

all.addEventListener ('click', () => {
    console.log("salom");
})

active.addEventListener ('click', () => {
    console.log(toDoList);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].checked) {
            console.log(toDoList[i]);
        }
        
    }
})

completed.addEventListener ('click', () => {
    // console.log("salom");
})

