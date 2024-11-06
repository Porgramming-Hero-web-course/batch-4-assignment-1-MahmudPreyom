{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


    const sumArray = (numbers: number[]): number => {
        return numbers.reduce((primaryNum, recentNum) => primaryNum + recentNum, 0)
    }

    console.log(sumArray([1, 2, 33]));
}