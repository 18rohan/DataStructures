// Given an array of length N consisting of only 0s and 1s in random order
// Modify the array to segregate 0s on left side and 1s on the right side 
// of the array.


const arr = [0,0,1,0,1,0]
const Compare = (a,b)=>{
	return a-b
};
function Segregate(arr){
	return arr.sort(Compare);
	
}

const res = Segregate(arr);
console.log(res);
