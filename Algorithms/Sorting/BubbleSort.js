const sort = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
         if(arr[j] > arr[j+1]){
             let temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
         }   
        }
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