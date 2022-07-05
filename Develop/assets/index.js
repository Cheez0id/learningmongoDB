//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//  /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */


let twoSum = function(nums, target) {
    for (i=0; i < nums.length; i++) {
        for (n=0; n < nums.length; n++){
            console.log (nums.length)
            if (nums[i] + nums[n] == target) {
                console.log(i,n)
                return [i, n]
            
            }}}};

twoSum([1,2,3,4,5], 7);



//I think i need a for loop to run through the given array; I need to add two numbers in the array to meet the target, then return which indicies they are.
    //thought: can i do 2 for loops to find 2 indicies? I don't think I should have to.

