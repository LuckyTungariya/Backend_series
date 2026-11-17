function add(a , b){
    return a + b;
}

function mul(x , y){
    return x * y;
}

function div(p , q){
    return p/q;
}
//This approach of exporting functions can be done once

const addThreeVals = (a , b ,c) => {  //This approch of exprting functions can be done multiple see below
    return a + b + c;
}

const subThreeVals = (a , b , c) => {
    return a - b - c;
}

module.exports = { add , mul , div , addThreeVals} 