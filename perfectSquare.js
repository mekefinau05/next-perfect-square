// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function nextPerfectSquare(N){
    let num;
    let nextN;
    if(Math.sqrt(N)%1 ===0) {
        num=Math.sqrt(N)
        nextN=num+1
    }else{
        return -1
    }
    return nextN * nextN
}

console.log(nextPerfectSquare(9))

console.log(nextPerfectSquare(289))

console.log(nextPerfectSquare(3000))