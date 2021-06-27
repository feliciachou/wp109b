class animal{
    constructor(name){
        this.name=name
    }
    say(){}
}

class dog extends animal{
    constructor(){
        super('Dog')
    }
    say(){console.log(this.name,'Woof Woof')}
}
class cat extends animal{
    constructor(){
        super('Cat')
    }
    say(){console.log(this.name,'Miao Miao')}
}
class bird extends animal{
    constructor(){
        super('Bird')
    }
    say(){console.log(this.name,'Chit Chat')}
}
class cow extends animal{
    constructor(){
        super('Cow')
    }
    say(){console.log(this.name,'Moo Moo')}
}


var a = new dog()
var b = new cat()
var c = new bird()
var d = new cow()

var animallist=[a,b,c,d]

for(var x of animallist){
    x.say()
}