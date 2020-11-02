const sort = (arr) =>{
    for(let i=1;i<arr.length;i++){
        let j=i;
        let key = arr[j];
        while(key < arr[j-1] && j > 0){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = key;
    }
    return arr;
}


const main = ()=>{
    let arr = [3,5,2,6,9,8,1,4];
    console.log(arr);
    arr = sort(arr);
    console.log(arr); 
}

main();

//iterate form i to arr.length
// j ij
// 3,5,2,6,9,8,1,4
// 2,3,5 
//2,3,5,6,9,8,1,4
//2,3,5,6,8,9,1,4
//1,2,3,5,6,9,8,4
//1,2,3,4,5,6,8,9