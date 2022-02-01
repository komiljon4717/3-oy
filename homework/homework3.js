
class RGB{

    constructor(red=0, green=0, blue=0){
        this.R = this.chack(red)
        this.G = this.chack(green)
        this.B = this.chack(blue)
    }
    chack(val){
        if (val >= 0 && 255 >= val) {
            return val
        }else{
            return false
        }
    }
    get colors(){
        return `rgb(${this.R}, ${this.G}, ${this.B})`
    }

    set colors (args){
        if (this.chack(args[0])) {
            this.R = args[0]
        }if (this.chack(args[1])) {
            this.G = args[1]
        }if (this.chack(args[2])) {
            this.B = args[2]
        }
        
    }

    get red (){
        return this.R
    }

    set red (col) {
        if (this.chack(col)) {
            this.R = col
        }
        
    }
    

    get green (){
        return this.G
    }

    set green (col) {
        if (this.chack(col)) {
            this.G = col
        }
    }


    get blue (){
        return this.B
    }

    set blue (col) {
        if (this.chack(col)) {
            this.B = col
        }
    }
    
}


let rgb = new RGB(15)

// rgb.red = 250

// rgb.colors = [280, 68]
// rgb.red = 255
// rgb.green = 47
// rgb.blue = 35
// console.log(rgb.red);
// console.log(rgb.green);
// console.log(rgb.blue);
// console.log(rgb.colors);
console.log(rgb);