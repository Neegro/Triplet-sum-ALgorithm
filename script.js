var a = 50;
var b = 10
var c ="Time"
var linebreak = "<br />";
result = a + b;
console.log(result)
console.log(linebreak)

// Javascript program to find a triplet
// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
function find3Numbers(A, arr_size, sum)
{
    let l, r;
    // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++)
    {
        // Fix the second element as A[j]
        for (let j = i + 1; j < arr_size - 1; j++)
        {
            // Now look for the third number
            for (let k = j + 1; k < arr_size; k++)
            {
                if (A[i] + A[j] + A[k] == sum)
                {
                    console.log("Triplet is " + A[i] +
                        ", " + A[j] + ", " + A[k]);
                    return true;
                }
            }
        }
    }
    // If we reach here, then no triplet was found
    return false;
}




