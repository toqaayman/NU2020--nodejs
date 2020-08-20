
function area(a){

    a=a*a;

    return a;    

}

function test(callbackfunction){

    return callbackfunction(20);

}

let b=test(area);

console.log(b);