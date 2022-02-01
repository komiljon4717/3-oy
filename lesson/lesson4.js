
let set1

class Timer{
     
    start (){
        set1 = setInterval( () =>{
            let year = (new Date()).getFullYear() + '-' + (new Date()).getMonth()+1 + '-' + (new Date()).getDate()
            let hour = (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            console.clear()
            process.stdout.write(year + '    ' + hour);
        },1000)
    }

    notify (time, massege){
        time = time.split(':')
        let inHour = time[0]
        let inMin = time[1]
        let alo = setInterval( () =>{

            let year = (new Date()).getFullYear() + '-' + (new Date()).getMonth()+1 + '-' + (new Date()).getDate()
            let hour = (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            let rem = 0

            if ((new Date()).getHours() <= inHour) {
                rem += (inHour - (new Date()).getHours()) * 60
            }
            if ((new Date()).getMinutes() <= inMin || rem > 0) {
                rem += inMin - (new Date()).getMinutes()
            }
            else{
                console.clear()
                console.log("Iltimos hozirgi vaqtdan keyingi soat va daqiqalarni kiriting!");
                clearInterval(set1)
                clearInterval(alo)
                return
            }

            if (rem == 0) {
                clearInterval(set1)
                clearInterval(alo)
                console.clear()
                console.log(massege);
                return
            }
            // console.clear()
            console.log(`       reamining ${rem} min(s)`);
        },1000)
    }
}

let timer = new Timer()

timer.start()
timer.notify("14:50", "Uyg'on dars boshlandi")




















// process.stdout.write("hello: ");
// console.log("a");