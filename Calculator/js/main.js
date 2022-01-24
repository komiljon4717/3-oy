let nums = document.querySelectorAll('.num')
let signs = document.querySelectorAll('.sign')
let display = document.querySelector('input')
let equal = document.querySelector('.equal')
let clearButton = document.querySelectorAll('.remove-element')[0]
let removeButton = document.querySelectorAll('.remove-element')[1]
let dot = document.querySelector('.dot')

let signsChars = ['+', '✕', '-', '÷']
let calcSign = false

function concatValues (char) {
    if (display.value == '' && char == '.') {
        display.value = display.value + '0'
    }
	display.value = display.value + char
    console.log(display.value);
}

function clearDisplay () {
	display.value = ''
}

function removeDisplay () {
	display.value = display.value.split('').splice(0, display.value.length - 1).join('')
}

function calculate () {
	calcSign = false
	if ( display.value.includes('✕') ) {
		let nums = display.value.split('✕')
		display.value = nums[0] * nums[1]
	}
	if ( display.value.includes('÷') ) {
		let nums = display.value.split('÷')
		display.value = nums[0] / nums[1]
	}
	if ( display.value.includes('+') ) {
		let nums = display.value.split('+')
		display.value = parseFloat(nums[0]) + parseFloat(nums[1])
	}
	if ( display.value.includes('-') ) {
		let nums = display.value.split('-')
		display.value = nums[0] - nums[1]
	}
}


for(let num of nums) {
	num.onclick = () => {
        if (!(display.value == '' && num.textContent == '0')) {
            concatValues(num.textContent)
        }
		
	}
}

// O'zim yozgan code

dot.onclick = () => {
    let includSign = display.value.split(calcSign)

    if (!display.value.includes(dot.textContent)) {
        concatValues(dot.textContent)
        // console.log(dot.textContent);
    }else if (display.value.includes(calcSign) && !includSign[1].includes(dot.textContent)) {
        concatValues(dot.textContent)
    }
}




for(let sign of signs) {
	sign.onclick = () => {
        let changeSign = display.value.split('')
		if( display.value != '' && !calcSign ) {
			concatValues(sign.textContent)
			calcSign = sign.textContent
		}else if (display.value !== '' && changeSign[changeSign.length - 1] == calcSign ) {
            display.value = display.value.split('').splice(0, display.value.length - 1).join('')
            concatValues(sign.textContent)
        }
	}
}


clearButton.onclick = clearDisplay
removeButton.onclick = removeDisplay
equal.onclick = calculate