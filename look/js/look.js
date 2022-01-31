let usernameInput = document.querySelector('#usernameInput')
let telephoneInput = document.querySelector('#telephoneInput')
let foodsCount = document.querySelector('#foodsCount')

let databaseU = window.localStorage.getItem('user')
let databaseF = window.localStorage.getItem('food')

let usersData = databaseU? JSON.parse(databaseU): []
let ordersData = databaseF? JSON.parse(databaseF): []

let ordersList = document.querySelector('.main-orders')

let divMain = document.querySelector('.main')
let divStatus = document.querySelector('.main-headers')
let divId = document.querySelector('.cutomer-id-wrapper')
let foodList = document.querySelector('.orders-list')
let userList = document.querySelector('.customers-list')
let items = userList.getElementsByTagName('li')
let select = document.querySelector('#foodsSelect')


function idGenerator () {
	return usersData.length + 1
}


function chackNumber(num) {
    if (num.slice(0, 3) === '998' && num.length === 12) {
        return num
    }else{
        alert("Telefon raqam noto'g'ri! Iltimos telefon raqamiga faqat Uzbekiston raqamlarini kiriting!")
    }
}

function chackUsername(name) {
    if (name.trim().length < 30 && !(name.trim() == '')) {
        return name
    }else{
        alert("Username ga 30 tagacha belgi kiritishingiz mumkin!")

    }
}

function foodslist(obj) {
    let liOne = document.createElement('li')
    liOne.classList.add('order-item')
    if (obj.food_id == 1) {
        console.log(liOne);
        liOne.innerHTML = `<img src="./img/burger_cheese.jpeg">
        <div>
            <span class="order-name">Burger cheese</span>
            <span class="order-count">${obj.count}</span>
        </div>`
        foodList.append(liOne)
    }
    if (obj.food_id == 2) {
        liOne.innerHTML = `<img src="./img/chicken_togora.jpeg">
        <div>
            <span class="order-name">Chicken togora</span>
            <span class="order-count">${obj.count}</span>
        </div>`
        foodList.append(liOne)
    }
    if (obj.food_id == 3) {
        liOne.innerHTML = `<img src="./img/chicken_wings.jpeg">
        <div>
            <span class="order-name">Chicken wings</span>
            <span class="order-count">${obj.count}</span>
        </div>`
        foodList.append(liOne)
    }
    if (obj.food_id == 4) {
        liOne.innerHTML = `<img src="./img/combo.jpeg">
        <div>
            <span class="order-name">Combo</span>
            <span class="order-count">2</span>
        </div>`
        foodList.append(liOne)
    }
    if (obj.food_id == 5) {
        liOne.innerHTML = `<img src="./img/spinner.jpeg">
        <div>
            <span class="order-name">Spinner</span>
            <span class="order-count">${obj.count}</span>
        </div>`
        foodList.append(liOne)
    }
    if (obj.food_id == 6) {
        liOne.innerHTML = `<img src="./img/cola.jpeg">
        <div>
            <span class="order-name">Cola</span>
            <span class="order-count">${obj.count}</span>
        </div>`
        foodList.append(liOne)
    }
    if (obj.food_id == 7) {
        liOne.innerHTML = `<img src="./img/fanta.jpeg">
        <div>
            <span class="order-name">Fanta</span>
            <span class="order-count">${obj.count}</span>
        </div>`
        foodList.append(liOne)
    }
    ordersList.append(foodList)
}





userbtn.onclick = () =>{
    usersData.push({
        id: idGenerator(),
        username: chackUsername(usernameInput.value),
        phone: chackNumber(telephoneInput.value)
    })

    
    window.localStorage.setItem('user', JSON.stringify(usersData))
    
    let li = document.createElement('li')
    li.classList.add('customer-item');
    li.value=(`${idGenerator()}`);
    
    li.innerHTML = `<span class="customer-name">${usernameInput.value}</span>
	<a class="customer-phone" href="tel:+998941049914">+${telephoneInput.value}</a>`
    userList.append(li)
    
    usernameInput.value = ''
    telephoneInput.value = ''

}


for (const data of usersData) {
    let li = document.createElement('li')
    li.classList.add('customer-item');
    li.value=(`${data.id}`);
    
    li.innerHTML = `<span class="customer-name">${data.username}</span>
	    <a class="customer-phone" href="tel:+998941049914">+${data.phone}</a>`
    userList.append(li)
}

for (const li of items) {
    li.onclick = () =>{
        ordersList.innerHTML = null 
        foodList.innerHTML = null
        divStatus.innerHTML = ''
        for (const data of usersData) {
            if (data.id == li.value) {
                ordersList.append(foodList)
                let h1 = document.createElement('h1')
                h1.id = ('userHeader')
                h1.classList.add('customer-name');
                h1.textContent = data.username
                divId.innerHTML = `<span>client id:</span>
                <span id="clientId">${li.value}</span>`
                divStatus.append(divId)
                divStatus.append(h1)
            }

            count.onclick = () =>{
                if (foodsCount.value <= 10 && foodsCount.value > 0 && select.value != '') {
                    ordersData.push({
                        user_id: li.value,
                        food_id: select.value,
                        count: foodsCount.value
                    })
                    window.localStorage.setItem('food', JSON.stringify(ordersData))
                    foodslist({
                        user_id: li.value,
                        food_id: select.value,
                        count: foodsCount.value
                    })
                    foodsCount.value = null
                    select.value = null
            
                }else{
                    alert("10 tadan ko'p qo'shib bo'lmaydi")
                }
            }
        }
    
        for (const fData of ordersData) {
            if (fData.user_id == li.value) {
                foodslist(fData)
                
            }
        }
    }
}
