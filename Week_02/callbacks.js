function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}
function quad(n){
    return n*n*n*n
}

function findSum(a, b, callBackFnc){
    const first = callBackFnc(a)
    const second = callBackFnc(b)
    console.log(first+second)
}

findSum(2, 2, square)
findSum(2, 2, cube)
findSum(2, 2, quad)