// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output:  [0,1,9,16,100]
const nums = [-4,-1,0,3,10];

// Approach:Iterate through the array and map each element of the array to square.

// Compare function passed as a parameter to sort() function.
const Compare = (a,b) =>{
	return a-b
}
const SortedSquares = (nums) =>{
	const squaredNums = nums.map((num)=>parseInt(num*num));
	return squaredNums.sort(Compare)

}

const res =  SortedSquares(nums)
console.log(res);