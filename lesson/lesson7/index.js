let username = document.querySelector('.username')
let age = document.querySelector('.age')
let btn = document.querySelector('button')
let database = window.localStorage.getItem('users')
let data = database? JSON.parse(database): []


btn.onclick = () =>{
    data.push({username: username.value, age: age.value})
    window.localStorage.setItem('users', JSON.stringify(data))
    username.value = ''
    age.value = ''
}