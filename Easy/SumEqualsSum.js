// Given an array A of N integers. 
// The task is to find if there are two pairs (a, b) and (c, d)
// such that a+b = c+d.


// Approach:
// Steps:
	// Initialize a new Map()
	// Iterate through the array from first to last index
	// Initialize a nested loop inside the first loop
	// Initialize a variable called 'sum' inside the nested loop
	// Check if the variable 'sum' is present in 'Hash'.
		// If the variable 'sum' is not present in the 'Hash',then push 'sum' to 'Hash'
		// If the variable 'sum' is present in the 'Hash':
			// Get the previous pair stored in 'Hash' and return it with the current 'sum' variable pair



const arr = [3,4,7,1,2,9,8];

function findPair(arr,n){
	let Hash = new Map();

    // Traverse through all possible pairs of arr[]
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let sum = arr[i] + arr[j];
            if (!Hash.has(sum))
                Hash.set(sum, [i, j]);
            else {
                let pp = Hash.get(sum);
                console.log("PP: ",pp)
                console.log([arr[pp[0]],arr[pp[1]]],[arr[i],arr[j]])
                console.log(Hash)
                
                return true;
            }
        }
    }

    console.log("No pairs found");
    return false;
}

n = arr.length;
const res = findPair(arr,n);
console.log(res);