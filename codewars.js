/*In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

It is guaranteed that n > 0 and limit >= n.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

/*function multiplyInteger(n,limit){
    let result=[]
    for(let i=n;i<=limit;i+=n) {
        result.push(i)
    }
    return result
}
console.log(multiplyInteger(2,6))*/
//with the another method of soling by the multipication //
function multiplyInteger(n,limit){
    let result =[];
    for(let i=1; i*n<=limit;i++){
         result.push(i*n);
    }
return result ;
}
console.log(multiplyInteger(2,6)) // [2, 4, 6]