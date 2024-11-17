
/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/

function oddAverage(numbers){
    const odds=[];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    // is the array that contains only the odd numbers 
    // console.log(odds)
    let sum=0;
    for(const number of odds){
        sum=sum+number;
    }
    const count =odds.length
    // console.log(sum,odds)
    const avg= sum/count;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);

function averageOdds(arr){
    let sum=0;
    let count=0;

    for(let i=0;i<arr.length ; i++){
        if (arr[i]%2 !== 0){
            sum+=arr[i]
            // console.log(sum);
            count++;
            // console.log(count);
        }
    }
      // Calculate the average, handling cases where there are no odd numbers
    return count>0 ? sum/count : 0;                 

}

const number=[1,2,3,4,5,6,7,8,9]
console.log( averageOdds(number))
  