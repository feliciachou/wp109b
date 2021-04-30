class vector{
    constructor(array){
        this.a=array
    }
    add(y){
        var r =[]
        for(var i=0;i<x.a.length;i++){
            r[i]=x.a[i]+y.a[i]
        }
        return new vector(r)
    }
    sub(y){
        var r =[]
        for(var i=0;i<x.a.length;i++){
            r[i]=x.a[i]-y.a[i]
        }
        return new vector(r)
    }
    neg(x){
        var r =[]
        for(var i=0;i<x.a.length;i++){
            r[i]=-x.a[i]
        }
        return new vector(r)
    }
    neg(y){
        var r =[]
        for(var i=0;i<y.a.length;i++){
            r[i]=-y.a[i]
        }
        return new vector(r)
    }
    dot(y){
        var r=0;
        for(var i=0;i<x.a.length;i++){
            r+=x.a[i]*y.a[i]
        }
        return new vector(r)
    }
}
var x = new vector([1,2,3])
var y = new vector([1,1,1])
console.log('x.add(y)=',x.add(y))
console.log('x.sub(y)=',x.sub(y))
console.log('neg(x)=',x.neg(x))
console.log('neg(y)=',y.neg(y))
console.log('x.dot(y)=',x.dot(y))