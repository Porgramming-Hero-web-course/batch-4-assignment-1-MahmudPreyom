{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (numbers: number[]): number[] => {
        return numbers.filter((nums1, nums2) => numbers.indexOf(nums1) === nums2)
    }

    console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 5, 6]));
}