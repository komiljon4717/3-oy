let li = document.querySelector('.sayHi')

function allSiblings(el) {
    let arr = []
    console.log(el.perviousElementSibling);
    console.log('vbnm');
    while (el.perviousSibling) {
        arr.unshift(el)
        console.log(arr);
    }

}

allSiblings(li)