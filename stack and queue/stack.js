class stack{
    constructor () {
        this.array = []
        this.length = 0
    }
    push(data){
        this.array.push(data)
        this.length++

    }
    pop(){
        this.array.pop()
        this.length--
    }
    display(){
        console.log(this.array);
        console.log(this.length);

    }

}

let mystack =  new stack()
mystack.push(2)
mystack.push(4)
mystack.push(7)
mystack.push(8)
mystack.push(5)
mystack.push(1)

mystack.pop()


mystack.display()
