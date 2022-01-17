// Find the missing number from a an array range
const arr = [11,19,17,15,14,22];

function compareFunc(a,b){
	return a-b;
}
function findMissing(arr){
	const sortedArr = arr.sort(compareFunc);
	const resArr = [];

	const start = sortedArr[0];
	const end = sortedArr[sortedArr.length-1];

	for(let i=start;i<end;i++){
		if(!sortedArr.includes(i)){
			resArr.push(i);
		}
	}
	return resArr;
}

const res = findMissing(arr);
console.log(res);
