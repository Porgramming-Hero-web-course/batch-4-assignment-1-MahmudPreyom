{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (numbers: number[]): number[] => {
        const newArray = numbers.filter((num1, num2) => numbers.indexOf(num1) === num2)
        return newArray;
    }

    console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 5, 6]));
}