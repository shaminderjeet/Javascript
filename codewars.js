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

/*
Sum without highest and lowest number
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6  */
function sumWithoutHighestAndLowest(arr) {
  if (!arr || arr.length <= 2) return 0;

  let lowest = Math.min(...arr);
  let highest = Math.max(...arr);

  // Create a copy so we can remove one lowest and one highest by value
  let temp = arr.slice();

  // Remove one occurrence of lowest and highest
  temp.splice(temp.indexOf(lowest), 1);
  temp.splice(temp.indexOf(highest), 1);

  // Sum the remaining elements
  return temp.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])); // 16
console.log(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])); // 6
