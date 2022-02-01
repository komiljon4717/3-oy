
class MyChar extends String{
    constructor(char){
        if (!(typeof char === "string" && char.length === 1)) {
            throw new Error('Faqat bitta belgi kiriting')
        }
        super(char)

    }
}

let char = new MyChar(5)
console.log(char);