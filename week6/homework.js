function star(n){
    for(var i=0;i<n;i++)
    console.log('*')
}
star(5)

function between(a,b){
    for(var i=a;i<=b;i++)
    console.log(i)
}
between(3,8)

function prime(x,y){
    for(var i = x ; i <= y ; i++)
    {
        var count = 0;
        for(var j = 1 ; j <= i ; j++)	
        {
            if(i % j == 0)
                count = count+1;
        }
        if(count == 2)
            console.log(i);
    }
}
 prime(3,15)

