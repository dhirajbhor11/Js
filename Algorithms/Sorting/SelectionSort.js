const sort = (arr) =>{
    for(let i=0;i<arr.length;i++){
        let key = i;
        let j = i+1;
        while( j < arr.length){
            if(arr[key] > arr[j]){
                key = j;
            }
            j++;
        }
        let temp = arr[key];
        arr[key] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


const main = ()=>{
    let arr = [3,5,2,6,9,8];
    console.log(arr);
    arr = sort(arr);
    console.log(arr); 
}

main();


// iterate from i to arr.length
//choose starting position for every elemente while iterating
//