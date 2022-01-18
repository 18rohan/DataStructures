// Given an array of size N consisting of only 0's and 1's. 
// The array is sorted in such a manner that all the 1's are
// placed first and then they are followed by all the 0's. 
// Find the count of all the 0's.

const arr = [1,1,0,1,0,1,1,0,1];

function CountZeroes(){
	let count = 0;
	for(let i=0;i<arr.length;i++){
		if(arr[i] === 0){
			count++;
		}
	}
	return count;
}

const res = CountZeroes(arr);
console.log(res);