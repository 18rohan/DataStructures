// Given a sorted array arr[] of distinct integers. Sort the array 
// into a wave-like array and return it
// In other words, arrange the elements into a sequence such 
// that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....


const arr = [1,2,3,4,5];
function WaveArray(arr){
	for(let i=0;i<arr.length;i += 2){
		if(arr[i]<arr[i+1]){
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	return arr;
}
const res = WaveArray(arr);
console.log(res)